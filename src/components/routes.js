import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { User } from "./context";
import LoginLayout from "./login/LoginLayout";
import MainLayout from "./main/MainLayout";

export const Login = () => <LoginLayout />;
export const Main = () => <MainLayout />;

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const user = useContext(User);
  return (
    <Route
      {...rest}
      render={routeProps =>
        user.get !== null ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />
      }
    />
  );
};
