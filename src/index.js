import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Signup from "./Componant/Auth/SignUp/SignUp";
import SignIn from "./Componant/Auth/SignIn/SignIn";
import SignUpCompany from "./Componant/Auth/SignUpCompany/SignUpCompany";
import ResetPassword from "./Componant/Auth/ResetPassword/ResetPassword";
import VerifyEmail from "./Componant/Auth/verifyEmail/VerifyEmail";
import ReCreatePassword from "./Componant/Auth/ReCreatePassword/ReCreatePassword";

// تكوين مسارات التطبيق
const RouterPath = createBrowserRouter([
  {
    
    path: "",
    element: <App/>,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signupcompany",
        element: <SignUpCompany />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "verifyemail",
        element: <VerifyEmail />,
      },
      {
        path: "recreatepassword",
        element: <ReCreatePassword />,
      },
    ],
  },
]);

// إنشاء عنصر الجذر للتطبيق
const root = ReactDOM.createRoot(document.getElementById("root"));

// عرض التطبيق
root.render(
  <RouterProvider router={RouterPath} />
);
