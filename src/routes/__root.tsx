// src/routes/__root.tsx
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { AuthState } from "@/hooks/useAuth";
import { QueryClient } from "@tanstack/react-query";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

type RootRouteContext = {
  queryClient: QueryClient;
  authStore: AuthState;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Outlet />
      <TanStackRouterDevtools position="bottom-left" />
    </ThemeProvider>
  ),
});
