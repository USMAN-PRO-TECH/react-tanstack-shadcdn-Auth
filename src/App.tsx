import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/query';
import { useAuth } from '@/hooks/useAuth';

const router = createRouter({
  routeTree,
  context: {
    authStore: undefined!,
    queryClient
  }
})
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
function InnerApp() {
  const authStore = useAuth();
  return <RouterProvider router={router} context={{ authStore, queryClient }} />;
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
export default App;