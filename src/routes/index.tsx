import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Favorite } from '../pages/Favorite';
import { Results } from '../pages/Results';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/favorite" component={Favorite} />
    <Route path="/results" component={Results} />
  </Switch>
);

export default Routes;
