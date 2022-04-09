/* eslint-disable @typescript-eslint/no-unused-expressions */
import { configureScope, init } from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import configs from "../configs";

(() => {
  // Desativa o plugin em localhost
  //   if (
  //     window.location.hostname === "localhost" ||
  //     window.location.hostname === "127.0.0.1"
  //   ) {
  //     return;
  //   }

  init({
    dsn: configs.sentry,
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

  configureScope((scope) => {});
})();
