import { Route,Switch} from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import CreateBlog from './Blogs/CreateBlog'
import Posts from './posts/Posts'
import './App.css'
function App() {
  return (
    <div className = 'App'>  
      <Switch>  
        <Route path = '/' exact component = {Homepage}/>
        <Route path = '/login' exact component = {Login}/>
        <Route path = '/signup' exact component = {Signup}/>
        <Route path = '/viewpost' exact component = {Posts}/>
        <Route path = '/createpost' exact component = {CreateBlog}/>
      </Switch>
    </div>
  );
}

export default App;
