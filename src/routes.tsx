import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

/* Pages */
import Address from "./pages/Signup/CommonUser/Address";
import ChooseType from "./pages/Signup/ChooseType";
import Credentials from "./pages/Signup/CommonUser/Credentials";
import Dashboard from "./pages/Dashboard";
import Finished from "./pages/Finished";
import LoginPage from "./pages/LoginPage";
import ManageDoors from "./pages/ManageDoors";
import AboutClient from "./pages/Signup/CommonUser/About";

/* Organization */
import AboutOrganization from "./pages/Signup/Organization/About";
import AddressOrganization from "./pages/Signup/Organization/Address";
import AboutAdmin from "./pages/Signup/Organization/AboutAdmin";
import AddressAdmin from "./pages/Signup/Organization/AddressAdmin";
import CredentialsOrganization from "./pages/Signup/Organization/Credentials";

import AboutTechnician from "./pages/Signup/Technician/About";
import AddressTechnician from "./pages/Signup/Technician/Address";
import CredentialsTechnician from "./pages/Signup/Technician/Credentials";

import { getAllowedRoutes, isLoggedIn } from "./utils";
import privateRouteConfig from "./config/privateRoute.config";

const MapAllowedRoutes: React.FC<any> = ({
  routes,
  basePath,
  isAddNotFound,
}) => {
  const match = useRouteMatch(basePath);
  return (
    <Switch>
      {routes.map((route: any) => {
        const {
          path,
          component: Component,
          children,
          title,
          permission,
          ...rest
        } = route;

        return (
          <Route {...rest} key={path} path={`${match?.path}${path}`}>
            <Component children={children} />
          </Route>
        );
      })}
    </Switch>
  );
};

const PrivateRoutes: React.FC = () => {
  const match = useRouteMatch("/app");
  let allowedRoutes: any[] = [];

  if (isLoggedIn()) {
    allowedRoutes = getAllowedRoutes(privateRouteConfig);
  } else {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MapAllowedRoutes routes={allowedRoutes} basePath="/app" />
    </>
  );
};

const PrivateRouteClient = ({ component: Component, ...rest }: any) => {
  function handleRender(props: any) {
    const component = <Component {...props} />;
    const role = Number(localStorage.getItem("role")?.toString());

    if (role === 0) {
      return component;
    }
  }

  return <Route {...rest} render={handleRender} />;
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginPage} />
      <Route path="/sign-up-choose" component={ChooseType} />

      <Route path="/sign-up-common-user" component={AboutClient} />
      <Route path="/sign-up-address" component={Address} />

      <Route path="/sign-up-organization" component={AboutOrganization} />
      <Route
        path="/sign-up-organization-address"
        component={AddressOrganization}
      />
      <Route path="/sign-up-organization-about-admin" component={AboutAdmin} />
      <Route
        path="/sign-up-organization-address-admin"
        component={AddressAdmin}
      />
      <Route
        path="/sign-up-organization-credentials"
        component={CredentialsOrganization}
      />

      <Route path="/sign-up-about-tech" component={AboutTechnician} />
      <Route path="/sign-up-address-tech" component={AddressTechnician} />
      <Route
        path="/sign-up-credentials-tech"
        component={CredentialsTechnician}
      />

      <Route path="/sign-up-credentials" component={Credentials} />
      <Route path="/finished" component={Finished} />

      <Route path="/app">
        <PrivateRoutes />
      </Route>

      {/* <Route path="/dashboard" component={Dashboard} />
      <Route path="/doors" component={ManageDoors} /> */}
    </BrowserRouter>
  );
};

export default Routes;
