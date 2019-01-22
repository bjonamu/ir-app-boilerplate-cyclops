import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeLayout from './home-layout';
import UsersLayout from './users-layout';

const PrimaryLayout = props => {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={HomeLayout} />
        <Route path='/users' component={UsersLayout} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  );
};

export default PrimaryLayout;
