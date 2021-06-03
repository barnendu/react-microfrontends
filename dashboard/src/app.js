import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navigation-bar'
const MFE1 = React.lazy(
  () => import('MFE1/App')
);
const MFE2 = React.lazy(
  () => import('MFE2/App')
);

function App() {
  return (
    <Router>
    <NavigationBar/>
    <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
        <Route path='/' component={MFE1} >
          <Route exact path="/mfe1">
            <MFE1 />
          </Route>
          <Route exact path="/mfe2" >
            <MFE2 />
          </Route>
          </Route>
        </Switch>
        </Suspense>
    </Router>
  );
}
export default App;
