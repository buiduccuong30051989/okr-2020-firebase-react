import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../utils/constants';

const HomePage = lazy(() => import('../HomePage'));
const NotFoundPage = lazy(() => import('../NotFoundPage'));
const Detail = lazy(() => import('../Detail'));
const Add = lazy(() => import('../Add'));
const Edit = lazy(() => import('../Edit'));

function App() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={routes.homepage} component={HomePage} />
        <Route exact path={routes.homepage} component={HomePage} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/:id" component={Detail} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
