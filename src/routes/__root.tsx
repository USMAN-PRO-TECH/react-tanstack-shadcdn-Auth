// src/routes/__root.tsx
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { Auth } from "@/stores/authStore";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );
const TanStackQueryDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/react-query-devtools").then((res) => ({
          default: res.ReactQueryDevtools,
        }))
      );

type RootRouteContext = {
  queryClient: QueryClient;
  authStore: Auth;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Outlet />
      <TanStackRouterDevtools position="bottom-left" />
      <TanStackQueryDevtools />
    </ThemeProvider>
  ),
});
