import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Users, UserCheck, UserPlus, Search, Filter, MoreVertical,
  Eye, Ban, CheckCircle, XCircle, Phone, Mail, Loader2
} from 'lucide-react';
import { useUsers, useUserAnalytics, useUpdateUserStatus } from '@/hooks/useUsers';
import { User } from '@/types';

const UsersManagement: React.FC = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'suspended' | 'banned'>('all');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [updatingUserId, setUpdatingUserId] = useState<number | null>(null); // Track which user is being updated

  // Confirmation dialog state
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    title: string;
    description: string;
    action: () => void;
  }>({
    open: false,
    title: '',
    description: '',
    action: () => {},
  });

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setPage(1); // Reset to first page on search
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // Fetch users with filters
  const { data: usersData, isLoading: usersLoading, error: usersError } = useUsers({
    page,
    limit,
    search: searchQuery || undefined,
    status: statusFilter,
  });

  // Fetch analytics
  const { data: analytics } = useUserAnalytics();

  // Update user status mutation
  const updateUserStatus = useUpdateUserStatus();

  const getStatusBadge = (status: User['status']) => {
    switch(status) {
      case 'active':
        return (
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active
          </Badge>
        );
      case 'suspended':
        return (
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
            <XCircle className="h-3 w-3 mr-1" />
            Suspended
          </Badge>
        );
      case 'banned':
        return (
          <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">
            <Ban className="h-3 w-3 mr-1" />
            Banned
          </Badge>
        );
    }
  };

  const handleViewDetails = (user: User) => {
    navigate(`/users/${user.id}`);
    setOpenDropdown(null);
  };

  const handleStatusChange = async (userId: number, newStatus: User['status']) => {
    setUpdatingUserId(userId);
    try {
      await updateUserStatus.mutateAsync({
        id: userId,
        payload: { status: newStatus }
      });
      setOpenDropdown(null);
    } catch (error) {
      // Error handled by mutation
    } finally {
      setUpdatingUserId(null);
    }
  };

  const showConfirmDialog = (title: string, description: string, action: () => void) => {
    setConfirmDialog({
      open: true,
      title,
      description,
      action,
    });
    setOpenDropdown(null);
  };

  const toggleDropdown = (userId: number) => {
    setOpenDropdown(openDropdown === userId ? null : userId);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (openDropdown !== null) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Users Management</h2>
        <p className="text-slate-600 mt-1">Manage and monitor all registered users on the platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-slate-600">Total Users</CardTitle>
              <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              {analytics?.totalUsers.toLocaleString() || '0'}
            </div>
            <p className="text-xs text-slate-500 mt-1">All registered users</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-slate-600">Active Users</CardTitle>
              <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              {analytics?.activeUsers.toLocaleString() || '0'}
            </div>
            <p className="text-xs text-emerald-600 mt-1">
              {analytics?.totalUsers
                ? `${Math.round((analytics.activeUsers / analytics.totalUsers) * 100)}% of total users`
                : '0% of total users'
              }
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-slate-600">New This Month</CardTitle>
              <div className="h-10 w-10 bg-pink-50 rounded-lg flex items-center justify-center">
                <UserPlus className="h-5 w-5 text-pink-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              {analytics?.newUsersThisMonth.toLocaleString() || '0'}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {analytics?.userGrowthRate
                ? `${analytics.userGrowthRate > 0 ? '+' : ''}${analytics.userGrowthRate}% growth`
                : 'No growth data'
              }
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6 border-slate-200">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search by name, email, or mobile number..."
                className="pl-10"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {searchInput && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                  {usersLoading ? 'Searching...' : ''}
                </div>
              )}
            </div>
            <select
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as typeof statusFilter);
                setPage(1); // Reset to first page on filter
              }}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="banned">Banned</option>
            </select>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="border-slate-200">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            {usersLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-slate-500">Loading users...</div>
              </div>
            ) : usersError ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-rose-500">Error loading users. Please try again.</div>
              </div>
            ) : !usersData?.data.length ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-slate-500">No users found</div>
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">User</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Registration</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Activity</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.data.map((user) => {
                    const isUpdating = updatingUserId === user.id;
                    return (
                      <tr
                        key={user.id}
                        className={`border-b border-slate-100 transition-all ${
                          isUpdating
                            ? 'opacity-60 pointer-events-none bg-slate-50'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {user.avatar || getInitials(user.name)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{user.name}</div>
                            <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1 text-sm text-slate-700">
                          <Phone className="h-3 w-3 text-slate-400" />
                          {user.mobile}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-slate-700">
                          {user.registrationDate}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm">
                          <div className="text-slate-900 font-medium">{user.totalBookings} bookings</div>
                          <div className="text-slate-500 text-xs">{user.totalOrders} orders</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {getStatusBadge(user.status)}
                          {isUpdating && (
                            <Loader2 className="h-4 w-4 animate-spin text-pink-600" />
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 relative">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => handleViewDetails(user)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <div className="relative">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleDropdown(user.id);
                              }}
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>

                            {openDropdown === user.id && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-50">
                                <button
                                  className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                  onClick={() => handleViewDetails(user)}
                                >
                                  <Eye className="h-4 w-4" />
                                  View Details
                                </button>

                                {user.status === 'active' && (
                                  <button
                                    className="w-full px-4 py-2 text-left text-sm text-amber-700 hover:bg-amber-50 flex items-center gap-2"
                                    onClick={() =>
                                      showConfirmDialog(
                                        'Suspend User',
                                        `Are you sure you want to suspend ${user.name}? They will not be able to access the platform.`,
                                        () => handleStatusChange(user.id, 'suspended')
                                      )
                                    }
                                  >
                                    <XCircle className="h-4 w-4" />
                                    Suspend Account
                                  </button>
                                )}

                                {user.status === 'suspended' && (
                                  <button
                                    className="w-full px-4 py-2 text-left text-sm text-emerald-700 hover:bg-emerald-50 flex items-center gap-2"
                                    onClick={() =>
                                      showConfirmDialog(
                                        'Activate User',
                                        `Are you sure you want to activate ${user.name}? They will regain access to the platform.`,
                                        () => handleStatusChange(user.id, 'active')
                                      )
                                    }
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                    Activate Account
                                  </button>
                                )}

                                {user.status !== 'banned' && (
                                  <button
                                    className="w-full px-4 py-2 text-left text-sm text-rose-700 hover:bg-rose-50 flex items-center gap-2 border-t border-slate-100"
                                    onClick={() =>
                                      showConfirmDialog(
                                        'Ban User',
                                        `Are you sure you want to permanently ban ${user.name}? This action will prevent them from accessing the platform.`,
                                        () => handleStatusChange(user.id, 'banned')
                                      )
                                    }
                                  >
                                    <Ban className="h-4 w-4" />
                                    Ban Account
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination */}
          {usersData && usersData.data.length > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-slate-200 gap-4">
              <div className="text-sm text-slate-600">
                Showing{' '}
                <span className="font-medium">{(page - 1) * limit + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(page * limit, usersData.total)}
                </span>{' '}
                of <span className="font-medium">{usersData.total.toLocaleString()}</span> users
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1 || usersLoading}
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                >
                  Previous
                </Button>

                {/* Page numbers */}
                {Array.from({ length: Math.min(5, usersData.totalPages) }, (_, i) => {
                  let pageNum;
                  if (usersData.totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (page <= 3) {
                    pageNum = i + 1;
                  } else if (page >= usersData.totalPages - 2) {
                    pageNum = usersData.totalPages - 4 + i;
                  } else {
                    pageNum = page - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant="outline"
                      size="sm"
                      disabled={usersLoading}
                      className={page === pageNum ? 'bg-pink-50 text-pink-600 border-pink-200' : ''}
                      onClick={() => setPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}

                {usersData.totalPages > 5 && page < usersData.totalPages - 2 && (
                  <>
                    <span className="text-slate-400">...</span>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={usersLoading}
                      onClick={() => setPage(usersData.totalPages)}
                    >
                      {usersData.totalPages}
                    </Button>
                  </>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === usersData.totalPages || usersLoading}
                  onClick={() => setPage(p => Math.min(usersData.totalPages, p + 1))}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={confirmDialog.open} onOpenChange={(open) => {
        if (!updateUserStatus.isPending) {
          setConfirmDialog({ ...confirmDialog, open });
        }
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{confirmDialog.title}</DialogTitle>
            <DialogDescription>{confirmDialog.description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              disabled={updateUserStatus.isPending}
              onClick={() => setConfirmDialog({ ...confirmDialog, open: false })}
            >
              Cancel
            </Button>
            <Button
              className="bg-pink-600 hover:bg-pink-700"
              disabled={updateUserStatus.isPending}
              onClick={() => {
                confirmDialog.action();
                setConfirmDialog({ ...confirmDialog, open: false });
              }}
            >
              {updateUserStatus.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Confirm'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UsersManagement;
