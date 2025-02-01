import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
export interface AuthState {
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
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage), 
      partialize: (state) => ({ isAuthenticated: state.isAuthenticated }), 
    }
  )
);
export type Auth = ReturnType<typeof useAuthStore>;