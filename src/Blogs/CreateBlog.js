import Axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class CreateBlog extends Component{
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
        var cookie = document.cookie
        var token = cookie.split(';')
        var name = "Token=";
        var authToken = "Token "
        for(var j = 0;j<token.length;j++){
            var c = token[j]
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) === 0) {
                authToken += c.substring(name.length, c.length)
                break;
              }
            }
        if(authToken === "Token "){
            return (this.props.history.push('/login'))
        }
        let config = {
            headers: {
                Authorization: authToken
            }
          }
        Axios.Post("localhost:8000/api/blog/create",{"title":this.state.title,"body":this.state.body},config);
        alert("Posted Successfully");
    }
    render(){
        return(
            <div className = "createBlog">
                <h1>
                    Create Blog
                </h1>
                <h3>
                    Title
                </h3>
                <textarea name = "title" value = {this.state.title} onChange = {this.ChangeHandler}/>
                <br/>
                <h3>
                    Body
                </h3>
                <textarea name = "body" value = {this.state.body} onChange = {this.ChangeHandler} />
                <br/><br/>
                <button type = "submit" onClick = {this.PostBlog}>Post</button>
            </div>
        );
    }
}
export default withRouter(CreateBlog);