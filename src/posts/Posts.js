import React, { Component } from 'react';
import Post from './Post'
export default class Posts extends Component{
    state = {
        posts : [{user:"Po",msg:"Hello My friend"},{user:"Master",msg:"This is good"},{user:"Godzilaa99",msg:"Nice"},{user:"Champ",msg:"Come here BoY!!"}]
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