import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/* Pages */
import Address from './pages/Signup/Address';
import ChooseType from './pages/Signup/ChooseType';
import CommonUser from './pages/Signup/CommonUser';
import Credentials from './pages/Signup/Credentials';
import Dashboard from './pages/Dashboard';
import Finished from './pages/Finished';
import LoginPage from './pages/LoginPage';
import ManageDoors from './pages/ManageDoors';
import Organization from './pages/Signup/Organization';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginPage} />
      <Route path="/sign-up-choose" component={ChooseType} />

      <Route path="/sign-up-common-user" component={CommonUser} />
      <Route path="/sign-up-address" component={Address} />

      <Route path="/sign-up-organization" component={Organization} />

      <Route path="/sign-up-credentials" component={Credentials} />
      <Route path="/finished" component={Finished} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/doors" component={ManageDoors} />
    </BrowserRouter>
  );
};

export default Routes;
