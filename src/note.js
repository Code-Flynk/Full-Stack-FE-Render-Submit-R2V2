import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return ( <div id="error-page"><h1>Oops!</h1> <p> <i>{error.statusText||error.message}</i> </p> </div>);
}
export default ErrorPage;