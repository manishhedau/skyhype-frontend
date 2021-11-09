import React from "react";
import './App.css';


import ErrorPage from './components/Error_Page/error_page';
import Signup from './components/Login_Page/Signup';
import LoginPage from "./components/Login_Page/login_page";
import LandingPage from "./components/Landing_Page/landing_page";
import ProfilePage from './components/Profile_Page/profile_page';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WaitingPage from "./components/Waiting_Page/Index";

import Dashboard from "../src/components/Dashboard/dashboard_main";
import { Provider } from "react-redux";

import configureStore from "./stores/configureStore";

const store = configureStore();

// console.log("Store:\n",store.getState() );

function App() {

  return (

    <Router>

      <div className="App">

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/dashboard/user/">

            <Provider store={store} >
              <Dashboard />
            </Provider>
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/users/:userId">
            <ProfilePage />
          </Route>

          <Route exact path="/waiting-page">
            <WaitingPage />
          </Route>
          <Route path="*" component={ErrorPage} />
        </Switch >
      </div >

    </Router>
  )
}
App.getInitialProps = ({ req }) => {
  // let userAgent;
  // if (req) {
  //   userAgent = req.headers["user-agent"];
  // } else {
  // }

};

export default App;
