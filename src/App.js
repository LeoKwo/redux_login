import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Login from './components/login.js'
import Logout from './components/logout.js'
import { selectUser } from './features/userSlice';


function App() {

  const user = useSelector(selectUser);
  return (
    <div className="App">
      <h1>Redux</h1>
      <div>{
        user ? <Logout /> : <Login />
      }</div>
    </div>
  );
}

export default App;
