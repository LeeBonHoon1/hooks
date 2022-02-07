import React, {useState,useRef} from 'react';

const TestUseRef = () => {

    // const [count, setCount] = useState(0);
  // const countRef = useRef(0);

  // console.log("재렌더링...")
  // console.log(countRef)

  // const increaseCountState = () => {
  //   setCount(count + 1);
  // }

  // const increaseCountRef = () => {
  //   countRef.current++
  // }

  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1)
  }
  const increaseRef = () => {
    countRef.current++
    console.log('ref :::', countRef.current)
  }

  const increaseVar = () => {
    countVar++
    console.log('var :::' , countVar)
  }



  return(
    <div style={{marginLeft: "10px"}}>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더</button>
      <button onClick={increaseRef}>Ref+</button>
      <button onClick={increaseVar}>Var+</button>
    </div>
  )
};

export default TestUseRef;


