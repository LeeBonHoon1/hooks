import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Main = () => {

    const history = useHistory()
  return (
    <div>
        <h2>React Hook</h2>
        <button onClick={() => {history.push('/testusestate')}}>useState Hook</button>
        <button onClick={() => {history.push('/testuseeffect')}}>useEffect Hook</button>
        <button onClick={() => {history.push('/testusecallback')}}>useCallback Hook</button>
        <button onClick={() => {history.push('/testusememo')}}>useMemo Hook</button>
    </div>
  )
};

export default Main;
