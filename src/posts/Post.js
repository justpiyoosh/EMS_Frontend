import Axios from 'axios';
import React from 'react';
var reply = "";
function Repost(){
    reply = document.getElementById("Reply").value;
    Axios.post('http://localhost:8000/api/account/blog_post',{'content':reply});
}
const Post = (props) =>{
return(
<div style = {{border:"1px solid black",padding:"5px"}}>
    {props.item.msg}
    <br/><br/>
    <input type = "text" placeholder="Reply" id = "Reply"/>
    <button type = "submit" onClick = {Repost}/>
</div>);
}
export default Post;