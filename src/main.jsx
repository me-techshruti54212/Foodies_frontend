import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ContextProvider } from "./components/GlobalContext/ContextProvider.jsx";

let persistor = persistStore(Store);
// Store.subscribe(()=>console.log(Store.getState()))
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <GoogleOAuthProvider clientId="788587079721-i8uvsfoa4q6f4pqcdfqebtckidf72lqo.apps.googleusercontent.com">
        <Provider store={Store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </GoogleOAuthProvider>
    </ContextProvider>
  </React.StrictMode>
);
