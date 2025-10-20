import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import UsersManagement from './pages/UsersManagement';
import UserDetailsPage from './pages/UserDetailsPage';
import DebugEnv from './pages/DebugEnv';

// Placeholder components for routes (we'll create these later)

const Providers = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Providers Management</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Services = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Services Management</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Products = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Products Management</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Bookings = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Bookings Management</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Orders = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Orders Management</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Coupons = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Coupons Management</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Advertisements = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Advertisements Management</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Financial = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Financial Reports</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Settings = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">Settings</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<UsersManagement />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
        <Route path="providers" element={<Providers />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="orders" element={<Orders />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="advertisements" element={<Advertisements />} />
        <Route path="financial" element={<Financial />} />
        <Route path="settings" element={<Settings />} />
        <Route path="debug-env" element={<DebugEnv />} />
        {/* Redirect any unknown routes to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
