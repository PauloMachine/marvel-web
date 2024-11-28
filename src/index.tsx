import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PaginationProvider } from "./components/paginator/pagination.context";
import { FilterProvider } from "./components/filter/filter.context";
import Layout from "./components/layout";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <PaginationProvider>
            <I18nextProvider i18n={i18n}>
              <Layout>
                <App />
              </Layout>
            </I18nextProvider>
          </PaginationProvider>
        </FilterProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
