import { Route} from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import './App.css'
function App() {
  return (
    <div className = 'App'>
      <Route path = '/' exact component = {Homepage}/>
      <Route path = '/login' exact component = {Login}/>
      <Route path = '/signup' exact component = {Signup}/>
    </div>
  );
}

export default App;
