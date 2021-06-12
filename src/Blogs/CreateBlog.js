import Axios from 'axios';
import React, { Component } from 'react';
export default class CreateBlog extends Component{
    state = {
        title : "",
        body : ""
    }
    ChangeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    PostBlog = () =>{
        let config = {
            headers: {
                Authorization: "Token 7d60554184594ce585b042ee28d53a5318bdffcf"
            }
          }
        Axios.Post("localhost:8000/api/blog/create",{"title":this.state.title,"body":this.state.body},config);
    }
    render(){
        return(
            <div>
                <input type = "text" name = "title" value = {this.state.title} onChange = {this.ChangeHandler}/>
                <input type = "text" name = "body" value = {this.state.body} onChange = {this.ChangeHandler} />
                <button type = "submit" onClick = {this.PostBlog}/>
            </div>
        );
    }
}