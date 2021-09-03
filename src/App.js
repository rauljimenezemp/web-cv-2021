import {AuthProvider} from './contexts/authContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Profile from './components/Profile';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';

import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';




function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component ={ Dashboard }/>
          <PrivateRoute path="/profile" component ={ Profile }/>
          <PrivateRoute path="/update-profile" component ={ UpdateProfile }/>
           <PrivateRoute path="/signup" component ={ Signup }/>
           <Route path="/login" component ={ Login }/>
           <Route path="/forgot-password" component ={ ForgotPassword }/>
           <Route exact path="/" component ={ Inicio }/>
           <Route path="/contacto" component ={ Contacto }/>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
