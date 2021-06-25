import React, { Component } from 'react';
import Post from './Post'
export default class Posts extends Component{
    state = {
        posts : [{user:"SAurav",msg:"Hello My friend"},{user:"Saurav",msg:"This is good"},{user:"Piyoosh",msg:"Nice"},{user:"Shivanshu",msg:"Nice"}]
    }
    render(){
        let post = this.state.posts.map(
            (data,index) => {
                return <Post key = {index} item = {data}/>
            });
        return(
            <div class = "PostBlock">
                {post}
            </div>
        );
    }
}