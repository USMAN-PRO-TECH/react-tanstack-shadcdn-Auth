import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { RouterContext } from '@/types/routerContext';


export const Route = createFileRoute('/_public')({
  beforeLoad: async ({ context, location }) => {
    const authStore = context.authStore as RouterContext['authStore'];

    if (!authStore.isHydrated) {
      return;
    }

    if (authStore.isAuthenticated) {
      throw redirect({
        to: '/',
        search: { redirect: location.pathname },
      });
    }
  },
  component: () => (
      <Outlet />
  ),
});
