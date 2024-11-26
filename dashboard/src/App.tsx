import React, { Suspense, useMemo } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageLoader from "./compnents/ui/loader/page_loader";
import RootLayout from "./layout/root_layout";
import DashboardLayout from "./layout/dashboard/dashboard_layout";

const LazyHomePage = React.lazy(() => import("./pages/home/home"));
const LazyMenuPage = React.lazy(() => import("./pages/menu/menu"));
const LazyCategoryPage = React.lazy(() => import("./pages/category/category"));
const LazyFoodPage = React.lazy(() => import("./pages/food/food"));
const LazyAddFoodPage = React.lazy(() => import("./pages/food/add_food"));
const LazyFoodEditpage = React.lazy(() => import("./pages/food/food_edit"));

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            <Route element={<DashboardLayout />}>
              <Route index element={<LazyHomePage />} />
              <Route path="menu" element={<LazyMenuPage />} />
              <Route path="category" element={<LazyCategoryPage />} />
              <Route path="foods">
                <Route index element={<LazyFoodPage />} />
                <Route path="add-food" element={<LazyAddFoodPage />} />
                <Route path="edit/:food_id" element={<LazyFoodEditpage />} />
              </Route>
            </Route>
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
