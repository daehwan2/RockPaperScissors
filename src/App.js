import React from 'react';
import {HashRouter, Route, Router} from 'react-router-dom'
import Home from './components/home';
import Send from './components/send';
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/send' component={Send}/>
      </HashRouter>
    );
  }
}

export default App;
