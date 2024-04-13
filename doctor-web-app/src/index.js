import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import { store, persistor } from "./login/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Skeleton />} persistor={persistor}> {/* Wrap with Skeleton */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
