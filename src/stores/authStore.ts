import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'auth', // The name of th   e item in storage (must be unique)
      partialize: (state) => ({ isAuthenticated: state.isAuthenticated }), // Persist only the isAuthenticated state
    }
  )
);
