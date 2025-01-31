import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/api/authApi";
import { useAuthStore } from "@/stores/authStore";

export const useAuth = () => {
  const { isAuthenticated, login, logout } = useAuthStore();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: isAuthenticated, // Fetch only if authenticated
  });

  return { user, isLoading, isAuthenticated, login, logout };
};
export type AuthState = ReturnType<typeof useAuth>;