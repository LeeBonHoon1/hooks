import React, { useEffect, useState, useMemo } from 'react';

const TestUseMemo = () => {

  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(false);

  const location = useMemo(() => {
    return {
      country : isKorea? "한국": "외국"
    } 
  }, [isKorea])

  useEffect(() => {
    console.log('useEffect 호출')
  }, [location])

  return (
    <div>
      <h2>Plus Number</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {setNumber(e.target.value)}}
      />
      <h2>Country</h2>
      <br />
      <p>나라: {location.country}</p>
      <button onClick={() => { setIsKorea(!isKorea)}}>Change Country</button>
    </div>
  )
};

export default TestUseMemo;
 