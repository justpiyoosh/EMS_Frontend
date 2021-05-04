import React, { Component } from 'react';
import Post from './Post'
export default class Posts extends Component{
    state = {
        posts : [{msg:"hi"},{msg:"hi"},{msg:"hi"},{msg:"hi"},{msg:"hi"},{msg:"hi"}]
    }
    render(){
        let post = this.state.posts.map(
            (data,index) => {
                return <Post key = {index} item = {data}/>
            });
        return(
            <div>
                {post}
            </div>
        );
    }
}