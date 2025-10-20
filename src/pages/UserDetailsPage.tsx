import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft, Phone, Mail, MapPin, CheckCircle, XCircle, Ban,
  TrendingUp
} from 'lucide-react';
import { useUser } from '@/hooks/useUsers';

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userId = parseInt(id || '0');

  // Pagination state
  const [bookingPage, setBookingPage] = useState(1);
  const [orderPage, setOrderPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  // Fetch user data
  const { data: user, isLoading, error } = useUser(userId);

  // Mock data - Generate enough items to demonstrate pagination
  const allBookingHistory = [
    { id: 1, service: 'Hair Styling & Makeup', provider: 'Nour Salon', date: 'Dec 18, 2024', amount: 180, status: 'completed' as const },
    { id: 2, service: 'Botox Treatment', provider: 'Elite Clinic', date: 'Dec 10, 2024', amount: 450, status: 'confirmed' as const },
    { id: 3, service: 'Manicure & Pedicure', provider: 'Rose Beauty Center', date: 'Dec 5, 2024', amount: 120, status: 'completed' as const },
    { id: 4, service: 'Facial Treatment', provider: 'Glamour Salon', date: 'Nov 28, 2024', amount: 95, status: 'upcoming' as const },
    { id: 5, service: 'Hair Coloring', provider: 'Beauty Haven', date: 'Nov 15, 2024', amount: 280, status: 'canceled' as const },
    { id: 6, service: 'Deep Tissue Massage', provider: 'Serenity Spa', date: 'Nov 8, 2024', amount: 220, status: 'completed' as const },
    { id: 7, service: 'Eyebrow Threading', provider: 'Perfect Brows', date: 'Oct 30, 2024', amount: 45, status: 'completed' as const },
    { id: 8, service: 'Laser Hair Removal', provider: 'Elite Clinic', date: 'Oct 22, 2024', amount: 380, status: 'completed' as const },
    { id: 9, service: 'Bridal Makeup Package', provider: 'Nour Salon', date: 'Oct 15, 2024', amount: 650, status: 'completed' as const },
    { id: 10, service: 'Body Scrub & Wrap', provider: 'Luxury Spa', date: 'Oct 8, 2024', amount: 290, status: 'completed' as const },
    { id: 11, service: 'Hair Extensions', provider: 'Hair Paradise', date: 'Sep 28, 2024', amount: 520, status: 'completed' as const },
    { id: 12, service: 'Nail Art Design', provider: 'Rose Beauty Center', date: 'Sep 20, 2024', amount: 85, status: 'completed' as const }
  ];

  const allOrderHistory = [
    { id: 1, product: 'Skin Care Set - Premium Collection', quantity: 1, date: 'Dec 15, 2024', amount: 340, status: 'delivered' as const },
    { id: 2, product: 'Hair Treatment Oil', quantity: 2, date: 'Dec 8, 2024', amount: 180, status: 'on_the_way' as const },
    { id: 3, product: 'Facial Serum', quantity: 1, date: 'Nov 20, 2024', amount: 220, status: 'delivered' as const },
    { id: 4, product: 'Makeup Brush Set', quantity: 1, date: 'Nov 10, 2024', amount: 150, status: 'confirmed' as const },
    { id: 5, product: 'Anti-Aging Night Cream', quantity: 1, date: 'Nov 2, 2024', amount: 280, status: 'delivered' as const },
    { id: 6, product: 'Hair Straightener Pro', quantity: 1, date: 'Oct 25, 2024', amount: 420, status: 'delivered' as const },
    { id: 7, product: 'Vitamin C Serum', quantity: 3, date: 'Oct 15, 2024', amount: 360, status: 'delivered' as const },
    { id: 8, product: 'Makeup Remover Kit', quantity: 2, date: 'Oct 5, 2024', amount: 120, status: 'delivered' as const },
    { id: 9, product: 'Face Mask Collection', quantity: 1, date: 'Sep 28, 2024', amount: 95, status: 'delivered' as const },
    { id: 10, product: 'Eye Cream Deluxe', quantity: 1, date: 'Sep 18, 2024', amount: 180, status: 'delivered' as const }
  ];

  // Paginated data
  const bookingHistory = useMemo(() => {
    const startIndex = (bookingPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allBookingHistory.slice(startIndex, endIndex);
  }, [bookingPage]);

  const orderHistory = useMemo(() => {
    const startIndex = (orderPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allOrderHistory.slice(startIndex, endIndex);
  }, [orderPage]);

  // Calculate pagination info
  const bookingTotalPages = Math.ceil(allBookingHistory.length / ITEMS_PER_PAGE);
  const orderTotalPages = Math.ceil(allOrderHistory.length / ITEMS_PER_PAGE);

  const bookingStartIndex = (bookingPage - 1) * ITEMS_PER_PAGE + 1;
  const bookingEndIndex = Math.min(bookingPage * ITEMS_PER_PAGE, allBookingHistory.length);

  const orderStartIndex = (orderPage - 1) * ITEMS_PER_PAGE + 1;
  const orderEndIndex = Math.min(orderPage * ITEMS_PER_PAGE, allOrderHistory.length);

  const getStatusBadge = (status: 'active' | 'suspended' | 'banned') => {
    switch(status) {
      case 'active':
        return (
          <Badge className="bg-slate-900 text-white hover:bg-slate-900 text-sm px-4 py-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Active
          </Badge>
        );
      case 'suspended':
        return (
          <Badge className="bg-amber-500 text-white hover:bg-amber-500 text-sm px-4 py-2">
            <XCircle className="h-4 w-4 mr-2" />
            Suspended
          </Badge>
        );
      case 'banned':
        return (
          <Badge className="bg-rose-500 text-white hover:bg-rose-500 text-sm px-4 py-2">
            <Ban className="h-4 w-4 mr-2" />
            Banned
          </Badge>
        );
    }
  };

  const getBookingStatusBadge = (status: 'confirmed' | 'upcoming' | 'completed' | 'canceled') => {
    switch(status) {
      case 'confirmed':
        return <Badge className="bg-amber-500 text-white hover:bg-amber-500">Confirmed</Badge>;
      case 'upcoming':
        return <Badge className="bg-blue-500 text-white hover:bg-blue-500">Upcoming</Badge>;
      case 'completed':
        return <Badge className="bg-emerald-500 text-white hover:bg-emerald-500">Completed</Badge>;
      case 'canceled':
        return <Badge className="bg-rose-500 text-white hover:bg-rose-500">Canceled</Badge>;
    }
  };

  const getOrderStatusBadge = (status: 'confirmed' | 'on_the_way' | 'delivered' | 'canceled') => {
    switch(status) {
      case 'confirmed':
        return <Badge className="bg-amber-500 text-white hover:bg-amber-500">Confirmed</Badge>;
      case 'on_the_way':
        return <Badge className="bg-blue-500 text-white hover:bg-blue-500">On the Way</Badge>;
      case 'delivered':
        return <Badge className="bg-emerald-500 text-white hover:bg-emerald-500">Delivered</Badge>;
      case 'canceled':
        return <Badge className="bg-rose-500 text-white hover:bg-rose-500">Canceled</Badge>;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center py-12">
          <div className="text-slate-500">Loading user details...</div>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="p-6">
        <Button variant="ghost" className="mb-6 -ml-2 gap-2" onClick={() => navigate('/users')}>
          <ArrowLeft className="h-4 w-4" />
          Back to Users
        </Button>
        <div className="flex items-center justify-center py-12">
          <div className="text-rose-500">Error loading user details. Please try again.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Back Button */}
      <Button variant="ghost" className="mb-6 -ml-2 gap-2" onClick={() => navigate('/users')}>
        <ArrowLeft className="h-4 w-4" />
        Back to Users
      </Button>

      {/* User Header Card */}
      <Card className="mb-6 border-slate-200">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">
                  {user.avatar || getInitials(user.name)}
                </span>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-slate-900 mb-3">{user.name}</h1>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <span className="text-sm">{user.mobile}</span>
                  </div>
                </div>
                {user.location && (
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-shrink-0">
              {getStatusBadge(user.status)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">{user.totalBookings}</div>
            {user.activeBookings !== undefined && (
              <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                {user.activeBookings} active
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">{user.totalOrders}</div>
            <p className="text-xs text-slate-500 mt-1">Product purchases</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              QAR {user.totalSpent.toLocaleString()}
            </div>
            <p className="text-xs text-slate-500 mt-1">Lifetime value</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Member Since</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-slate-900">{user.registrationDate}</div>
            <p className="text-xs text-slate-500 mt-1">Registration date</p>
          </CardContent>
        </Card>
      </div>

      {/* Booking History */}
      <Card className="mb-6 border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg">Booking History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700 w-16">#</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Service</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Provider</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Date</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Amount</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingHistory.length > 0 ? (
                  bookingHistory.map((booking, index) => (
                    <tr key={booking.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-6">
                        <div className="text-sm font-medium text-slate-500">
                          {(bookingPage - 1) * ITEMS_PER_PAGE + index + 1}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-sm font-medium text-slate-900">{booking.service}</td>
                      <td className="py-3 px-6 text-sm text-slate-700">{booking.provider}</td>
                      <td className="py-3 px-6 text-sm text-slate-700">{booking.date}</td>
                      <td className="py-3 px-6 text-sm font-semibold text-slate-900">QAR {booking.amount}</td>
                      <td className="py-3 px-6">
                        {getBookingStatusBadge(booking.status)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500">
                      No booking history available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Booking Pagination */}
          {allBookingHistory.length > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-slate-200 gap-4">
              <div className="text-sm text-slate-600">
                Showing <span className="font-medium">{bookingStartIndex}</span> to{' '}
                <span className="font-medium">{bookingEndIndex}</span> of{' '}
                <span className="font-medium">{allBookingHistory.length}</span> bookings
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={bookingPage === 1}
                  onClick={() => setBookingPage(p => p - 1)}
                >
                  Previous
                </Button>
                {Array.from({ length: Math.min(bookingTotalPages, 5) }, (_, i) => i + 1).map((pageNum) => (
                  <Button
                    key={pageNum}
                    variant="outline"
                    size="sm"
                    className={bookingPage === pageNum ? 'bg-pink-50 text-pink-600 border-pink-200' : ''}
                    onClick={() => setBookingPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={bookingPage === bookingTotalPages}
                  onClick={() => setBookingPage(p => p + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Order History */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg">Order History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700 w-16">#</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Product</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Quantity</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Date</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Amount</th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.length > 0 ? (
                  orderHistory.map((order, index) => (
                    <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-6">
                        <div className="text-sm font-medium text-slate-500">
                          {(orderPage - 1) * ITEMS_PER_PAGE + index + 1}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-sm font-medium text-slate-900">{order.product}</td>
                      <td className="py-3 px-6 text-sm text-slate-700">{order.quantity}</td>
                      <td className="py-3 px-6 text-sm text-slate-700">{order.date}</td>
                      <td className="py-3 px-6 text-sm font-semibold text-slate-900">QAR {order.amount}</td>
                      <td className="py-3 px-6">
                        {getOrderStatusBadge(order.status)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500">
                      No order history available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Order Pagination */}
          {allOrderHistory.length > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-slate-200 gap-4">
              <div className="text-sm text-slate-600">
                Showing <span className="font-medium">{orderStartIndex}</span> to{' '}
                <span className="font-medium">{orderEndIndex}</span> of{' '}
                <span className="font-medium">{allOrderHistory.length}</span> orders
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={orderPage === 1}
                  onClick={() => setOrderPage(p => p - 1)}
                >
                  Previous
                </Button>
                {Array.from({ length: Math.min(orderTotalPages, 5) }, (_, i) => i + 1).map((pageNum) => (
                  <Button
                    key={pageNum}
                    variant="outline"
                    size="sm"
                    className={orderPage === pageNum ? 'bg-pink-50 text-pink-600 border-pink-200' : ''}
                    onClick={() => setOrderPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={orderPage === orderTotalPages}
                  onClick={() => setOrderPage(p => p + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetailsPage;
