import React, { Suspense, useMemo } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageLoader from "./compnents/ui/loader/page_loader";
import RootLayout from "./layout/root_layout";

const LazyHomePage = React.lazy(() => import("./pages/home/home"));
const LazyMenuPage = React.lazy(() => import("./pages/menu/menu"));

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            <Route index element={<LazyHomePage />} />
            <Route path="menu" element={<LazyMenuPage />} />
          </Route>
        )
      ),
    []
  );
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
