import { useQuery, useMutation, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { userService } from '@/api/users.service';
import { User } from '@/types';
import { toast } from 'sonner';

// Query Keys
export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: any) => [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
  analytics: () => [...userKeys.all, 'analytics'] as const,
};

/**
 * Hook to fetch paginated users list
 */
export const useUsers = (params?: Parameters<typeof userService.getUsers>[0]) => {
  return useQuery({
    queryKey: userKeys.list(params),
    queryFn: () => userService.getUsers(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook to fetch single user details
 */
export const useUser = (
  id: number,
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userService.getUserById(id),
    enabled: !!id,
    ...options,
  });
};

/**
 * Hook to fetch user analytics
 */
export const useUserAnalytics = () => {
  return useQuery({
    queryKey: userKeys.analytics(),
    queryFn: () => userService.getUserAnalytics(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to update user status (activate/suspend/ban)
 */
export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload
    }: {
      id: number;
      payload: Parameters<typeof userService.updateUserStatus>[1]
    }) => userService.updateUserStatus(id, payload),

    // Optimistic update for instant UI feedback
    onMutate: async ({ id, payload }) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: userKeys.lists() });

      // Snapshot the previous value
      const previousUsers = queryClient.getQueriesData({ queryKey: userKeys.lists() });

      // Optimistically update all user list queries
      queryClient.setQueriesData({ queryKey: userKeys.lists() }, (old: any) => {
        if (!old?.data) return old;

        return {
          ...old,
          data: old.data.map((user: User) =>
            user.id === id ? { ...user, status: payload.status } : user
          ),
        };
      });

      // Return context for rollback
      return { previousUsers };
    },

    onSuccess: (data, variables) => {
      // Invalidate and refetch users list to get fresh data
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });

      // Invalidate analytics since counts changed
      queryClient.invalidateQueries({ queryKey: userKeys.analytics() });

      // Update the specific user in cache
      queryClient.setQueryData(userKeys.detail(variables.id), data);

      // Show personalized success message
      const statusText = variables.payload.status === 'active' ? 'activated'
        : variables.payload.status === 'suspended' ? 'suspended'
        : 'banned';

      toast.success(`User has been ${statusText} successfully`);
    },

  onError: (error: any, _variables: any, context: any) => {
      // Rollback optimistic update on error
      if (context?.previousUsers) {
        context.previousUsers.forEach(([queryKey, data]: [any, any]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }

      toast.error(error?.message || 'Failed to update user status. Please try again.');
    },
  });
};

/**
 * Hook to export users
 */
export const useExportUsers = () => {
  return useMutation({
    mutationFn: (params?: Parameters<typeof userService.exportUsers>[0]) => 
      userService.exportUsers(params),
    
    onSuccess: (blob) => {
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `users_export_${new Date().toISOString()}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success('Users exported successfully');
    },
    
    onError: (error: any) => {
      toast.error(error?.message || 'Failed to export users');
    },
  });
};
