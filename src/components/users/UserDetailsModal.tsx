import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  XCircle, Phone, Mail, Calendar, ShoppingCart, CheckCircle, Ban
} from 'lucide-react';
import { User } from '@/types';

interface UserDetailsModalProps {
  user: User;
  onClose: () => void;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ user, onClose }) => {
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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {user.avatar || getInitials(user.name)}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{user.name}</h2>
              <p className="text-slate-600 text-sm">{user.email}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <XCircle className="h-5 w-5" />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-600">Mobile Number</label>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-900">{user.mobile}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Email Address</label>
                <div className="flex items-center gap-2 mt-1">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-900">{user.email}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Registration Date</label>
                <p className="text-slate-900 mt-1">{user.registrationDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Account Status</label>
                <div className="mt-1">
                  {getStatusBadge(user.status)}
                </div>
              </div>
              {user.location && (
                <div className="col-span-2">
                  <label className="text-sm font-medium text-slate-600">Location</label>
                  <p className="text-slate-900 mt-1">{user.location}</p>
                </div>
              )}
            </div>
          </div>

          {/* Activity Stats */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Activity Overview</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600">{user.totalBookings}</div>
                    <p className="text-sm text-slate-600 mt-1">Total Bookings</p>
                    {user.completedBookings !== undefined && (
                      <p className="text-xs text-slate-500 mt-1">
                        {user.completedBookings} completed
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{user.totalOrders}</div>
                    <p className="text-sm text-slate-600 mt-1">Total Orders</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">
                      QAR {user.totalSpent.toLocaleString()}
                    </div>
                    <p className="text-sm text-slate-600 mt-1">Total Spent</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activity - Mock data for now */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Recent booking activity</p>
                    <p className="text-xs text-slate-500">Last {user.activeBookings} active bookings</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Product orders</p>
                    <p className="text-xs text-slate-500">{user.totalOrders} total orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-pink-600 hover:bg-pink-700">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
