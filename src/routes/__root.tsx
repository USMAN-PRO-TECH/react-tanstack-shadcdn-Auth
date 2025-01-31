// src/routes/__root.tsx
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { QueryClient } from '@tanstack/react-query';
// import Layout from '@/layout';
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
  authStore: typeof useAuth;
}






export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* <Layout> */}
        <Outlet />
        <TanStackRouterDevtools position="bottom-left"/>
      {/* </Layout> */}
    </ThemeProvider>
  ),
});
