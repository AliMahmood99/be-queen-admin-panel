import { Button } from '@/components/ui/button';
import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-rose-500 rounded-full"></span>
          </Button>
          <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
            <div className="text-right">
              <div className="text-sm font-medium text-slate-900">Admin User</div>
              <div className="text-xs text-slate-500">admin@bequeen.qa</div>
            </div>
            <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
