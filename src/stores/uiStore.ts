import { create } from 'zustand';

// Define UI state interface
interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  
  // Modal states
  isModalOpen: boolean;
  modalContent: React.ReactNode | null;
  modalTitle: string;
  
  // Actions
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  openModal: (title: string, content: React.ReactNode) => void;
  closeModal: () => void;
}

// Create UI store
export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  theme: 'light',
  isModalOpen: false,
  modalContent: null,
  modalTitle: '',

  // Toggle sidebar
  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }));
  },

  // Set sidebar state
  setSidebarOpen: (open) => {
    set({ sidebarOpen: open });
  },

  // Set theme
  setTheme: (theme) => {
    set({ theme });
    // Update document class for dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  // Open modal
  openModal: (title, content) => {
    set({
      isModalOpen: true,
      modalTitle: title,
      modalContent: content,
    });
  },

  // Close modal
  closeModal: () => {
    set({
      isModalOpen: false,
      modalTitle: '',
      modalContent: null,
    });
  },
}));

// Export types
export type { UIState };
