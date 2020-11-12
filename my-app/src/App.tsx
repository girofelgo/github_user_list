import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import * as routes from "./routes";
import { UserDetails } from './views/UserDetails/components/UserDetails';
import { UserList } from "./views/UserList/components/UserList";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path={routes.USER_LIST.route} component={UserList}/>
          <Route path={routes.USER_DETAILS.route} component={UserDetails}/>
          <Redirect from="/" to={routes.USER_LIST.route} />
      </Switch>
    </div>
  );
}

export default App;
