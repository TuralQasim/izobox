import "./App.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";
import axios from "axios";
const Home = lazy(() => import("./pages/home/Home"));

const App = ({ loading }) => {
  const [countriesData, setCountriesData] = useState(null);
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries"
        );
        setCountriesData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {!countriesData ? (
        <Loading />
      ) : (
        <>
          <Header countries={countriesData} />
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
      )}
    </>
  );
};

const t = (a) => a;
export default connect(t)(App);
