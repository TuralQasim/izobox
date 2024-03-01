import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";
const Home = lazy(() => import("./pages/home/Home"));

const App = ({ loading }) => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {routes.map((t) => (
          <Route
            path={t.path}
            key={t.path}
            element={
              <Suspense fallback={<Loading />}>
                {loading ? <Loading /> : t.element}
              </Suspense>
            }
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

const t = (a) => a;
export default connect(t)(App);
