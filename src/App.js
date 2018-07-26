import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';

// Pages
import Login from './views/Login/login';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  state = {
    authenticated: true,
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          {this.state.authenticated ? 
            (<Route path="/" name="Accueil" component={DefaultLayout} />)
             : 
            (<Route path="/" name="Login Page"  render={(routeProps) => <Login authenticated={() => this.handleLogin}/>} />)}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
