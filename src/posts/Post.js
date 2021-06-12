import Axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Post = (props) =>{
return(
<div className = "Post">
    <h3>{props.item.msg}</h3>
    <NavLink to = '/profile'>{props.item.user}</NavLink>
    <br/><br/>
</div>);
}
export default Post;