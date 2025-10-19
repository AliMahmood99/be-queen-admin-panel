import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Users,
  Store,
  Package,
  Calendar,
  ShoppingCart,
  Tags,
  Megaphone,
  DollarSign,
  Settings,
} from 'lucide-react';

interface NavigationItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  badge?: number;
}

const NavigationItem = ({ icon: Icon, label, to, badge }: NavigationItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
        isActive ? 'bg-pink-50 text-pink-600' : 'text-slate-600 hover:bg-slate-50'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span className="font-medium text-sm">{label}</span>
      </div>
      {badge && badge > 0 && (
        <Badge variant="destructive" className="bg-rose-500 hover:bg-rose-600 text-xs px-2">
          {badge}
        </Badge>
      )}
    </Link>
  );
};

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-white border-r border-slate-200 transition-all duration-300 overflow-hidden`}
    >
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">BQ</span>
          </div>
          <div>
            <h1 className="font-bold text-slate-900">BE QUEEN</h1>
            <p className="text-xs text-slate-500">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <NavigationItem icon={LayoutDashboard} label="Dashboard" to="/" />
          <NavigationItem icon={Users} label="Users" to="/users" />
          <NavigationItem icon={Store} label="Providers" to="/providers" badge={3} />
          <NavigationItem icon={Package} label="Services" to="/services" badge={7} />
          <NavigationItem icon={ShoppingCart} label="Products" to="/products" badge={5} />
          <NavigationItem icon={Calendar} label="Bookings" to="/bookings" />
          <NavigationItem icon={ShoppingCart} label="Orders" to="/orders" />
          <NavigationItem icon={Tags} label="Coupons" to="/coupons" />
          <NavigationItem icon={Megaphone} label="Advertisements" to="/advertisements" badge={4} />
          <NavigationItem icon={DollarSign} label="Financial Reports" to="/financial" />
          <NavigationItem icon={Settings} label="Settings" to="/settings" />
        </nav>
      </div>
    </aside>
  );
};
