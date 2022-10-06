import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch=useDispatch()
const counter=useSelector(state=>
  state.counter.counter
 // state.showCounter
)

const showCounter=useSelector(state=>state.counter.showCounter)

  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
const increaseHandler=()=>{
  dispatch(counterActions.increase(5))
}

  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
   {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>+</button>
      <button onClick={increaseHandler}>increase by 5</button>
      <button onClick={decrementHandler}>-</button><br></br>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
