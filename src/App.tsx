import { Route, Router, Switch } from 'react-router';
import { LoginForm } from './components/LoginForm';
import { createBrowserHistory } from 'history';
import { Dashboard } from './components/Dashboard';
import { AddUserForm } from './components/AddUserForm';

const history = createBrowserHistory();

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={LoginForm} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/add-user' component={AddUserForm} />
      </Switch>
    </Router>
  );
}

export default App;
