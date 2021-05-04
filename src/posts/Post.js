import React from 'react';
const Post = (props) =>{
return(
<div style = {{border:"1px solid black"}}>
    {props.item.msg}
</div>);
}
export default Post;