import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import { AddUserForm } from './components/AddUserForm';
import { UserDetails } from './components/UserDetails';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginForm} />
        <Route path='/dashboard/:id' component={UserDetails} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/add-user' component={AddUserForm} />
      </Switch>
    </Router>
  );
}

export default App;
