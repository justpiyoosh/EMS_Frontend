import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import Posts from './posts/Posts';
import  CreateBlog from "./Blogs/CreateBlog";
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
return(<div>
    <span className = "Header">
    <div className="Hlink">
    <NavLink to = '/'>Homepage</NavLink></div>
    <div className="Hlink">
    <NavLink to = '/login'>Login</NavLink>
    </div>
    <div className="Hlink">
    <NavLink to = '/signup'>Sign Up</NavLink>
    </div>
    </span>
    <Posts></Posts>
    <CreateBlog></CreateBlog>
    </div>
);}
}