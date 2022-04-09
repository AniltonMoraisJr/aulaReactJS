import "./apis/axios.api";
import * as React from "react";
import * as store from "./mobx";
import Routes from "./routes";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import { router } from "./mobx/";
import { Router } from "react-router-dom";
import { syncHistoryWithStore } from "mobx-react-router";
import Loading from "./components/loading";
import "./plugins/sentry.plugins";

const rootElement = document.getElementById("root");
const browserHistory = createBrowserHistory();

const history = syncHistoryWithStore(browserHistory, router);

render(
  <React.StrictMode>
    <Provider {...store}>
      <Loading />
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
