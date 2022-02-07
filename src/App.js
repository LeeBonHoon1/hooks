import './App.css';
import {Route, Switch, useHistory} from 'react-router-dom'
import TestUseState from './components/TestUseState';
import TestUseEffect from './components/TestUseEffect';
import TestUseCallback from './components/TestUseCallback';
import TestUseMemo from './components/TestUseMemo';
import TestUseRef from './components/TestUseRef';
import Main from './page/Main'

function App() {
  return (
    <div className="container">
      <h1>React Hook</h1>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/testusestate" component={TestUseState} />
        <Route path="/testuseeffect" component={TestUseEffect} />
        <Route path="/testusecallback" component={TestUseCallback} />
        <Route path="/testusememo" component={TestUseMemo} />
        <Route path="/testuseref" component={TestUseRef} />
      </Switch>
    </div>
  );
}

export default App;
