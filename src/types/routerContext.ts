import { QueryClient } from "@tanstack/react-query";
import { AuthState } from "@/stores/authStore";

export interface RouterContext {
  authStore: AuthState;
  queryClient: QueryClient;
}