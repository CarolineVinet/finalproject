import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Gate from "./GatePage";
import Homepage from "./Homepage";
import Profile from "./Profile";
import RecipePage from "./RecipePage";
import SignIn from "./SignInForm";
import Results from "./Results";
import FourOhFour from "./FourOhFour";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Gate />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
        <Route exact path="/results/:id">
          <RecipePage />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/*">
          <FourOhFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
