import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define user interface
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'super_admin' | 'manager';
  avatar?: string;
}

// Define auth state interface
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Actions
  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  setLoading: (loading: boolean) => void;
}

// Create auth store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      // Login action
      login: (user, token) => {
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));
        
        set({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      // Logout action
      logout: () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      // Update user profile
      updateUser: (userData) => {
        set((state) => {
          if (!state.user) return state;
          
          const updatedUser = { ...state.user, ...userData };
          localStorage.setItem('auth_user', JSON.stringify(updatedUser));
          
          return { user: updatedUser };
        });
      },

      // Set loading state
      setLoading: (loading) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: 'be-queen-auth', // localStorage key
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// Export types
export type { User, AuthState };
