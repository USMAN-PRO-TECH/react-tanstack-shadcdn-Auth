import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";
import { useAuthStore } from "@/stores/authStore";
import { RouterContext } from "@/types/routerContext";
import { useState } from "react";

const createAppRouter = (authStore: RouterContext["authStore"]) =>
  createRouter({
    routeTree,
    context: {
      authStore,
      queryClient,
    } as RouterContext,
  });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof createAppRouter;
  }
}

function InnerApp() {
  const authStore = useAuthStore();
  console.log('InnerApp render', { 
    isAuthenticated: authStore.isAuthenticated, 
    isHydrated: authStore.isHydrated 
  });
  
  const [router] = useState(() => createAppRouter(authStore));

  return (
    <RouterProvider router={router} context={{ authStore, queryClient }} />
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerApp />
    </QueryClientProvider>
  );
};
export default App;