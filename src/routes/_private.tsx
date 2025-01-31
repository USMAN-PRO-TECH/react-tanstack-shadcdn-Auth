// src/routes/_private.tsx
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import Layout from '@/layout';

export const Route = createFileRoute("/_private")({
  beforeLoad: async ({ context, location }) => {
    console.log("context.authStore()", context);
    
    if (!context.authStore.isAuthenticated) {
      console.log("Redirecting to login...");
      throw redirect({
        to: "/login",
        search: { redirect: location.href }, 
      });
    }
  },
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});