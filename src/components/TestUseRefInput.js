import React, {useEffect, useRef} from 'react';

const TestUseRefInput = () => {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}님!`);
        inputRef.current.focus()
    }
  return (
    <div>
        <input ref={inputRef} placeholder='Username' type="text" />
        <button onClick={login}>로그인</button>
    </div>
  )
};

export default TestUseRefInput;
