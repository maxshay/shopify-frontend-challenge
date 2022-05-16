import { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { GTP3ContextProvider } from "./context/GPT3Context";
import { Text } from "@mantine/core";

// atoms
import Spinner from "./components/atoms/Spinner";

// pages
const DashboardPage = lazy(() => import("./pages/DashboardPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/404NotFoundPage.jsx"));
const WelcomePage = lazy(() => import("./pages/WelcomePage.jsx"));

// views (smaller pages)
const SearchView = lazy(() => import("./views/SearchView.jsx"));
const HistoryView = lazy(() => import("./views/HistoryView.jsx"));

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <GTP3ContextProvider>
      <div className="App overflow-hidden">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Welcome Page */}
              <Route index element={<WelcomePage />} />

              {/* Dash Page */}
              <Route path="dash" element={<DashboardPage />}>
                <Route
                  index
                  element={
                    <Text>
                      👋 Hello there! Use the menu on the left so explore the
                      dashboard
                    </Text>
                  }
                />

                <Route
                  path="search"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <SearchView />
                    </Suspense>
                  }
                />
                <Route
                  path="history"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <HistoryView />
                    </Suspense>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Route>

              {/* Not found Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </GTP3ContextProvider>
  );
};

export default App;
