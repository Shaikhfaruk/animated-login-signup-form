// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const cliendId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={cliendId}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  rootElement
);
