import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Main = () => {

    const history = useHistory()
  return (
    <div>
        <h2 onClick={() => {history.push('/')}}>React Hook</h2>
        <button onClick={() => {history.push('/testusestate')}}>useState</button>
        <button onClick={() => {history.push('/testuseeffect')}}>useEffect</button>
        <button onClick={() => {history.push('/testusecallback')}}>useCallback</button>
        <button onClick={() => {history.push('/testusememo')}}>useMemo</button>
        <button onClick={() => {history.push('/testuseref')}}>useRef</button>
        <button onClick={() => {history.push('/testuserefinput')}}>useRefInput</button>
        <button onClick={() => {history.push('/testquery')}}>TestQuerys</button>
    </div>
  )
};

export default Main;
