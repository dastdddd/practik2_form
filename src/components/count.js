import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Asan')
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const setinter = setInterval(() => {
      setCount(count === 30 ? 0 : count + 1);
    }, 500);
    return () => clearInterval(setinter);
  }, [count]);
//[count] - чтобы только его показывал, а то башка клик болгондо токтоп калат экен

  const handleClick = ()=>{
    setIsActive(!isActive)
  }

  return (
    <div>
      <h1>{count}</h1>
      <hr />
      <button onClick={handleClick}>!true(Toggle)</button>
      <h1>{isActive ? name : ''}</h1>
    </div>
  );
};

export default Count;
