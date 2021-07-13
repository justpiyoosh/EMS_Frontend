import React from 'react';
import axios from 'axios';
import {NavLink, Redirect} from 'react-router-dom';
import Hmpg from './Images/Hmpg.png'
export default class Homepage extends React.Component
{
    state = {
        data : "",
    }
    componentDidMount(){
        axios.get("http://localhost:8000")
        .then(res => 
            {console.log('itm',res)
            this.setState({data:res.data})
    })}
    render()
    {var cookie = document.cookie
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
            return(
            <div className = "Home">
                <div className = "HomePageImage">
                    <img src = {Hmpg} alt = "Failed To load" width = "100%" height = "100%"/>
                </div>
                <div className = "HomeAction">
                    <h1 style = {{color:'skyblue'}}>Join Us Now</h1>
                    <h4 style = {{color:'grey'}}>Share your thoughts</h4>
                    <NavLink to = '/signup'><button id = "MyButton">Signup</button></NavLink>
                    <br/>
                    <NavLink to = '/login'><button id = "MyButton">Login</button></NavLink>
                </div>
            </div>
            );
        }
        else{
            return(<Redirect to = "/viewpost"/>);
        }
    }
}