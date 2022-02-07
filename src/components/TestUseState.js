import React, {useEffect, useState} from 'react';

const TestUseState = () => {
  const [input, setInput] = useState({
    id: '',
    password: ''
  })

  const { id, password } = input;
  
  const inputHandler = (e) => {
    const {value, name} = e.target;
    setInput({
      ...input,
      [name] : value
    })
  }

  useEffect(() => {
    console.log("id :::", id)
    console.log("password :::", password)
  }, [id, password])

  return (
  <div>
      <div>
        <input name="id" type="text" placeholder='ID' onChange={inputHandler}/>
        <input name="password" type="password" placeholder='Password' onChange={inputHandler}/>
      </div>
  </div>
  )
};

export default TestUseState;