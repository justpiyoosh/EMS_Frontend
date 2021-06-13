import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import Posts from './posts/Posts';
import Signup from './Signup'
export default class Homepage extends React.Component{
state = {
    data : "",
}
componentDidMount(){
    axios.get("http://localhost:8000")
    .then(res => 
        {console.log('itm',res)
        this.setState({data:res.data})
})}
render(){
return(
<div className = "Home">
    <span className = "Header">
        <div className="Hlink">
            <NavLink to = '/'>Homepage</NavLink>
        </div>
        <div className="Hlink">
            <NavLink to = '/signup'>Sign Up</NavLink>
        </div>
        <div className="Hlink">
            <NavLink to = '/login'>Login</NavLink>
        </div>
    </span>
    <div className="topPost">
        <h1>
            Top Posts
        </h1>
        <Posts/>
        <NavLink to = "/viewpost">Read More</NavLink> 
    </div>
    <div className = "signup">
        <Signup/>
    </div>
    <footer>

    </footer>
</div>
);}
}