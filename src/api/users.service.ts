import { api } from './client';
import { User } from '@/types';
import { mockUserService } from '@/services/mock/users.mock';

// Check if we should use mock data
const USE_MOCK_DATA = import.meta.env.VITE_ENABLE_MOCK_DATA === 'true';

// API Response Types
interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface UsersQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: 'active' | 'suspended' | 'banned' | 'all';
  sortBy?: 'name' | 'registrationDate' | 'totalSpent';
  sortOrder?: 'asc' | 'desc';
}

interface UpdateUserStatusPayload {
  status: 'active' | 'suspended' | 'banned';
  reason?: string;
}

interface UserAnalytics {
  totalUsers: number;
  activeUsers: number;
  suspendedUsers: number;
  bannedUsers: number;
  newUsersThisMonth: number;
  userGrowthRate: number;
  topSpenders: User[];
}

// User Management Service
export const userService = {
  /**
   * Get paginated list of users
   * GET /admin/users
   */
  getUsers: async (params?: UsersQueryParams): Promise<PaginatedResponse<User>> => {
    if (USE_MOCK_DATA) {
      return mockUserService.getUsers(params);
    }
    return api.get<PaginatedResponse<User>>('/admin/users', { params });
  },

  /**
   * Get user by ID
   * GET /admin/users/:id/details
   */
  getUserById: async (id: number): Promise<User> => {
    if (USE_MOCK_DATA) {
      return mockUserService.getUserById(id);
    }
    return api.get<User>(`/admin/users/${id}/details`);
  },

  /**
   * Update user status
   * PUT /admin/users/:id/status
   */
  updateUserStatus: async (
    id: number,
    payload: UpdateUserStatusPayload
  ): Promise<User> => {
    if (USE_MOCK_DATA) {
      return mockUserService.updateUserStatus(id, payload);
    }
    return api.put<User>(`/admin/users/${id}/status`, payload);
  },

  /**
   * Get user analytics
   * GET /admin/users/analytics
   */
  getUserAnalytics: async (): Promise<UserAnalytics> => {
    if (USE_MOCK_DATA) {
      return mockUserService.getUserAnalytics();
    }
    return api.get<UserAnalytics>('/admin/users/analytics');
  },

  /**
   * Export users to CSV
   * GET /admin/users/export
   */
  exportUsers: async (params?: UsersQueryParams): Promise<Blob> => {
    if (USE_MOCK_DATA) {
      return mockUserService.exportUsers();
    }
    return api.get<Blob>('/admin/users/export', {
      params,
      responseType: 'blob',
    });
  },
};
