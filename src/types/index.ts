// User Types
export interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  avatar: string;
  registrationDate: string;
  status: 'active' | 'suspended' | 'banned';
  location?: string;
  totalBookings: number;
  totalOrders: number;
  totalSpent: number;
  activeBookings: number;
  completedBookings: number;
}

// Provider Types
export interface Provider {
  id: number;
  name: string;
  type: 'salon' | 'clinic';
  email: string;
  mobile: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  totalBookings: number;
  revenue: number;
  status: 'active' | 'pending' | 'suspended';
  hasAdvertising: boolean;
  registrationDate: string;
}

// Service Types
export interface Service {
  id: number;
  name: string;
  category: string;
  provider: string;
  providerId: number;
  providerType: 'salon' | 'clinic';
  inSalonPrice: number;
  atHomePrice?: number;
  duration: string;
  description: string;
  status: 'active' | 'pending' | 'inactive';
}

// Product Types
export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  provider: string;
  providerId: number;
  providerType: 'salon' | 'clinic';
  price: number;
  stock: 'In Stock' | 'Low Stock' | 'Out of Stock';
  sold: number;
  revenue: number;
  status: 'active' | 'pending' | 'inactive';
  imageUrl?: string;
}

// Booking Types
export interface Booking {
  id: string;
  customer: {
    name: string;
    email: string;
    mobile: string;
    avatar: string;
  };
  service: string;
  provider: string;
  providerType: 'salon' | 'clinic';
  date: string;
  time: string;
  serviceType: 'in-salon' | 'at-home';
  duration: string;
  amount: number;
  paymentMethod: 'Visa' | 'Cash';
  paymentStatus: 'paid' | 'pending';
  status: 'upcoming' | 'confirmed' | 'completed' | 'canceled';
  address?: string;
}

// Order Types
export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    mobile: string;
    avatar: string;
  };
  product: string;
  quantity: number;
  provider: string;
  providerType: 'salon' | 'clinic';
  date: string;
  amount: number;
  paymentMethod: 'Visa' | 'Cash';
  paymentStatus: 'paid' | 'pending';
  status: 'confirmed' | 'on_the_way' | 'delivered' | 'canceled';
  deliveryAddress: string;
}

// Advertisement Types
export interface Advertisement {
  id: number;
  provider: string;
  providerType: 'salon' | 'clinic';
  campaignName: string;
  services: string[];
  originalPrice: number;
  bundlePrice: number;
  discount: number;
  submittedDate?: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
  status: 'pending' | 'active' | 'expired';
  views?: number;
  clicks?: number;
  bookings?: number;
  revenue?: number;
  conversionRate?: number;
}

// Coupon Types
export interface Coupon {
  id: number;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  description: string;
  validFrom: string;
  validTo: string;
  usageLimit: number;
  usedCount: number;
  minPurchase?: number;
  applicableOn: 'all' | 'services' | 'products';
  status: 'active' | 'expired' | 'inactive';
}

// Category Types
export interface Category {
  id: number;
  name: string;
  icon?: string;
  productCount?: number;
  revenue?: number;
  description?: string;
}

// Stats Types
export interface DashboardStats {
  totalUsers: number;
  activeProviders: number;
  todayBookings: number;
  todayRevenue: number;
  userGrowth: number;
  providerGrowth: number;
  bookingGrowth: number;
  revenueGrowth: number;
}

// Chart Data Types
export interface RevenueData {
  date: string;
  amount: number;
}

export interface CategoryData {
  name: string;
  value: number;
}

export interface TopProvider {
  id: number;
  name: string;
  revenue: number;
  bookings: number;
  growth: number;
  rating: number;
}
