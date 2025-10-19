import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Users,
  Store,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Star,
  ArrowUp,
} from 'lucide-react';
import {
  dashboardStats,
  revenueData,
  categoryData,
  topProviders,
} from '@/data/mockData';

export const Dashboard = () => {
  return (
    <>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
        <p className="text-slate-600 mt-1">Monitor your platform performance and metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {/* Total Users */}
        <Card className="border-slate-200 hover:shadow-md transition-shadow">
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
              {dashboardStats.totalUsers.toLocaleString()}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                +{dashboardStats.userGrowth}%
              </Badge>
              <span className="text-xs text-slate-500">vs last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Active Providers */}
        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-slate-600">Active Providers</CardTitle>
              <div className="h-10 w-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Store className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">{dashboardStats.activeProviders}</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                +{dashboardStats.providerGrowth}
              </Badge>
              <span className="text-xs text-slate-500">new this month</span>
            </div>
          </CardContent>
        </Card>

        {/* Today's Bookings */}
        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-slate-600">Today's Bookings</CardTitle>
              <div className="h-10 w-10 bg-pink-50 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-pink-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">{dashboardStats.todayBookings}</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                +{dashboardStats.bookingGrowth}%
              </Badge>
              <span className="text-xs text-slate-500">vs yesterday</span>
            </div>
          </CardContent>
        </Card>

        {/* Today's Revenue */}
        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-slate-600">Today's Revenue</CardTitle>
              <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              QAR {dashboardStats.todayRevenue.toLocaleString()}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                +{dashboardStats.revenueGrowth}%
              </Badge>
              <span className="text-xs text-slate-500">vs yesterday</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 border-slate-200">
          <CardHeader>
            <div>
              <CardTitle className="text-lg">Revenue Overview</CardTitle>
              <CardDescription>Last 7 days performance</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis
                  dataKey="date"
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                  formatter={(value: number) => [`QAR ${value}`, 'Revenue']}
                />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#ec4899"
                  strokeWidth={3}
                  dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  Top Performers
                </CardTitle>
                <CardDescription>This month's leaders</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProviders.map((provider, index) => (
                <div key={provider.id} className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      index === 0
                        ? 'bg-amber-100 text-amber-700'
                        : index === 1
                        ? 'bg-slate-100 text-slate-700'
                        : index === 2
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-slate-50 text-slate-600'
                    }`}
                  >
                    #{index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-slate-900 truncate">{provider.name}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                        <span className="text-xs text-slate-600">{provider.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-semibold text-slate-900">
                        QAR {provider.revenue.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500">{provider.bookings} bookings</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    +{provider.growth}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Distribution */}
      <Card className="border-slate-200">
        <CardHeader>
          <div>
            <CardTitle className="text-lg">Bookings by Category</CardTitle>
            <CardDescription>Today's distribution across service types</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
                formatter={(value: number) => [value, 'Bookings']}
              />
              <Bar dataKey="value" fill="#ec4899" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
};
