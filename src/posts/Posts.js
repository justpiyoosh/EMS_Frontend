import React, { Component } from 'react';
import Post from './Post';
import { NavLink } from 'react-router-dom';
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
            <div style = {{'width':"100%"}}>
                <div style = {{"margin-left":"90%"}}>
                    <div>
                        <NavLink to = '/profile'>MyProfile</NavLink>
                    </div>
                    <div>
                        <NavLink to = '/'>Sign off</NavLink>
                    </div>
                </div>
                <br/>
                <br/>
                <div class = "PostBlock"> 
                    {post}
                </div>
            </div>
        );
    }
}