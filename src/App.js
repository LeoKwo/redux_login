import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions'

function App() {
  const counter = useSelector(state => {
    return state.counter
  })
  const isLogged = useSelector(state => {
    return state.isLogged
  })
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Redux</h1>
      <p>Counter {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged && <p>This should not be seen if not logged in</p>}
    </div>
  );
}

export default App;
