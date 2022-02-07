import './App.css';
import {Route, Switch, useHistory} from 'react-router-dom'
import TestUseState from './components/TestUseState';
import TestUseEffect from './components/TestUseEffect';
import TestUseCallback from './components/TestUseCallback';
import TestUseMemo from './components/TestUseMemo';
import TestUseRef from './components/TestUseRef';
import TestUseRefInput from './components/TestUseRefInput'
import TestQuery from './page/TestQuery';
import Main from './page/Main'

function App() {

  const history = useHistory()
  return (
    <div className="container">
      <h1 onClick={() => {history.push('/')}}>React Hook</h1>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/testusestate" component={TestUseState} />
        <Route path="/testuseeffect" component={TestUseEffect} />
        <Route path="/testusecallback" component={TestUseCallback} />
        <Route path="/testusememo" component={TestUseMemo} />
        <Route path="/testuseref" component={TestUseRef} />
        <Route path="/testuserefinput" component={TestUseRefInput} />
        <Route path="/testquery" component={TestQuery} />
      </Switch>
    </div>
  );
}

export default App;
