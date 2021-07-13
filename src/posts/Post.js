import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Like from '../Images/Like.jpg';
const Post = (props) =>{
    
  const [count, setCount] = useState(0);
return(
<div className = "Post">
    <h3>{props.item.msg}</h3>
    <span style = {{display:'flex',flexDirection:'row',flexWrap:'wrap',width:"100%"}}>
    <div style = {{width:"30%"}}>
      <button onClick={() => setCount(count + 1)}><img src = {Like} height = "20px" alt = "loading"/></button> : {count}
    </div>
    <div style = {{width:"40%"}}>
        <NavLink to = '/profile'>{props.item.user}</NavLink></div>
    <div style = {{width:"30%"}}>
        <NavLink to = '/createpost'>Comment</NavLink>
    </div>
    </span>
    <br/><br/>
</div>);
}
export default Post;