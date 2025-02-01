import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { RouterContext } from '@/types/routerContext'; 
import Layout from '@/layout';

export const Route = createFileRoute("/_private")({
  beforeLoad: async ({ context, location }) => {
    const authStore = context.authStore as RouterContext['authStore'];

    if (!authStore.isAuthenticated) {
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