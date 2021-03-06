import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "./context";
import Cookies from "js-cookie";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import CompositeLayout from "./layouts/CompositeLayout";
import AnalysisLayout from "./layouts/AnalysisLayout";
import StartLayout from "./layouts/StartLayout";

export const Login = () => <LoginLayout />;
export const Main = () => <MainLayout />;
export const Dashboard = () => <DashboardLayout />;
export const Composite = () => <CompositeLayout />;
export const Analysis = () => <AnalysisLayout />;
export const Start = () => <StartLayout />;

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const auth = useContext(Auth);
  const token = Cookies.get("token");
  return (
    <Route
      {...rest}
      render={routeProps =>
        token || auth.login ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />
      }
    />
  );
};
