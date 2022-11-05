import React,{useState} from 'react';

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : { count}</h2>
        <div className="card__btns">
          <button className="btn card__btn"
          onClick={()=>setCounter(count+1)}disabled={count === 5 ? true : false}>+</button>
          <button className="btn card__btn"  onClick={()=>setCounter(count+1)}disabled={count === -5 ? true : false}> -</button>
          <button className="btn card__btn"  onClick={()=>setCounter(count = 0)}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
