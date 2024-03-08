import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import Reducer from "./store/Reducer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const store = legacy_createStore(Reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Router basename="/izobox">
        <App />
      </Router>
    </Provider>
    <ToastContainer autoClose={2000} closeOnClick pauseOnHover theme="light" />
  </>
);
