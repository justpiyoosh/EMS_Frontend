import Axios from 'axios';
import React from 'react';
import {NavLink  } from "react-router-dom";
export default class Login extends React.Component{
    constructor(props){
        super();
        this.state ={
            user : '',
            password : '',
            confirm_password:'',
            clicked : false,
        }
    this.submitHandler.bind(this);
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler =(e)=>{
        console.log("Here")
        e.preventDefault();
        if(this.state.password!==this.state.confirm_password){
            alert("password mismatch")
        }
    }
    render(){
        return(
            <div>
                <div className = "Header">
    <div className="Hlink">
    <NavLink to = '/'>Homepage</NavLink></div>  
    <div className="Hlink">
    <NavLink to = '/login'>Login</NavLink>
    </div>
    </div> 
                <h1>Sign Up</h1>
                <form onSubmit={this.submitHandler}>
                <div className='tab'>
                <input type='email' value={this.state.user} name ='user' onChange={this.handleChange}/>
                <label className="label-name">
                <span className="content-name">Email</span></label>
                </div>           
                <div className='tab'>
                <input type='password' value={this.state.password} name ='password' onChange={this.handleChange}/>
                <label className="label-name">
                <span className="content-name">Password</span></label>
                </div>     
                <div className='tab'>
                <input type='password' value={this.state.confirm_password} name ='confirm_password' onChange={this.handleChange}/>
                <label className="label-name">
                <span className="content-name">Confirm Password</span></label>
                </div>
                <button>Sign Up</button>           
            </form>
            </div>
        );
    }
}