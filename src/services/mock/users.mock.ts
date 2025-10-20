import { User } from '@/types';

// Generate mock users
const generateMockUsers = (): User[] => {
  const firstNames = ['Sara', 'Fatima', 'Layla', 'Mariam', 'Aisha', 'Nour', 'Huda', 'Yasmin', 'Reem', 'Dana', 'Maha', 'Hana', 'Lina', 'Rana', 'Salma'];
  const lastNames = ['Ahmed', 'Ali', 'Hassan', 'Omar', 'Khalid', 'Abdullah', 'Mohamed', 'Ibrahim', 'Mahmoud', 'Said', 'Rashid', 'Hamad', 'Jaber', 'Salem', 'Youssef'];
  const statuses: Array<'active' | 'suspended' | 'banned'> = ['active', 'active', 'active', 'active', 'suspended', 'banned'];

  const users: User[] = [];

  for (let i = 1; i <= 100; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    // Generate random dates for the past 6 months
    const daysAgo = Math.floor(Math.random() * 180);
    const registrationDate = new Date();
    registrationDate.setDate(registrationDate.getDate() - daysAgo);

    users.push({
      id: i,
      name,
      email,
      mobile: `+974 555${Math.floor(1000 + Math.random() * 9000)}`,
      avatar: `${firstName[0]}${lastName[0]}`,
      registrationDate: registrationDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      status,
      location: ['Doha City, Qatar', 'Al Wakrah, Qatar', 'Al Rayyan, Qatar', 'Lusail, Qatar'][Math.floor(Math.random() * 4)],
      totalBookings: Math.floor(Math.random() * 20),
      totalOrders: Math.floor(Math.random() * 15),
      totalSpent: Math.floor(500 + Math.random() * 4500),
      activeBookings: Math.floor(Math.random() * 3),
      completedBookings: Math.floor(Math.random() * 15),
    });
  }

  return users.sort((a, b) => b.id - a.id); // Sort by newest first
};

const mockUsers = generateMockUsers();

// Mock service implementation
export const mockUserService = {
  getUsers: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: 'active' | 'suspended' | 'banned' | 'all';
    sortBy?: 'name' | 'registrationDate' | 'totalSpent';
    sortOrder?: 'asc' | 'desc';
  }) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const search = params?.search?.toLowerCase() || '';
    const status = params?.status || 'all';

    // Filter users
    let filteredUsers = mockUsers;

    if (status !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.status === status);
    }

    if (search) {
      filteredUsers = filteredUsers.filter(user =>
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.mobile.includes(search)
      );
    }

    // Sort users
    if (params?.sortBy) {
      filteredUsers = [...filteredUsers].sort((a, b) => {
        const aValue = a[params.sortBy!];
        const bValue = b[params.sortBy!];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return params.sortOrder === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return params.sortOrder === 'asc'
            ? aValue - bValue
            : bValue - aValue;
        }

        return 0;
      });
    }

    // Paginate
    const total = filteredUsers.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    const data = filteredUsers.slice(start, end);

    return {
      data,
      total,
      page,
      limit,
      totalPages,
    };
  },

  getUserById: async (id: number): Promise<User> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const user = mockUsers.find(u => u.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  },

  updateUserStatus: async (
    id: number,
    payload: { status: 'active' | 'suspended' | 'banned'; reason?: string }
  ): Promise<User> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const userIndex = mockUsers.findIndex(u => u.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    // Update the user status
    mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      status: payload.status,
    };

    return mockUsers[userIndex];
  },

  getUserAnalytics: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 400));

    const totalUsers = mockUsers.length;
    const activeUsers = mockUsers.filter(u => u.status === 'active').length;
    const suspendedUsers = mockUsers.filter(u => u.status === 'suspended').length;
    const bannedUsers = mockUsers.filter(u => u.status === 'banned').length;

    // Calculate new users this month
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();

    const newUsersThisMonth = mockUsers.filter(user => {
      const regDate = new Date(user.registrationDate);
      return regDate.getMonth() === thisMonth && regDate.getFullYear() === thisYear;
    }).length;

    // Calculate growth rate
    const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    const lastMonthYear = thisMonth === 0 ? thisYear - 1 : thisYear;

    const newUsersLastMonth = mockUsers.filter(user => {
      const regDate = new Date(user.registrationDate);
      return regDate.getMonth() === lastMonth && regDate.getFullYear() === lastMonthYear;
    }).length;

    const userGrowthRate = newUsersLastMonth > 0
      ? Math.round(((newUsersThisMonth - newUsersLastMonth) / newUsersLastMonth) * 100)
      : 0;

    // Get top spenders
    const topSpenders = [...mockUsers]
      .sort((a, b) => b.totalSpent - a.totalSpent)
      .slice(0, 5);

    return {
      totalUsers,
      activeUsers,
      suspendedUsers,
      bannedUsers,
      newUsersThisMonth,
      userGrowthRate,
      topSpenders,
    };
  },

  exportUsers: async (): Promise<Blob> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Create CSV content
    const headers = ['ID', 'Name', 'Email', 'Mobile', 'Status', 'Registration Date', 'Total Spent'];
    const rows = mockUsers.map(user => [
      user.id,
      user.name,
      user.email,
      user.mobile,
      user.status,
      user.registrationDate,
      user.totalSpent,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    return new Blob([csvContent], { type: 'text/csv' });
  },
};
