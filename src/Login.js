import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Axios from 'axios';
import Homepage from './Homepage';

export default class Login extends React.Component{
    constructor(props){
        super();
        this.state ={
            user : '',
            password : '',
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
        if(this.state.user==='xyz@123.com' && this.state.password==='123'){
            console.log("correct")
            return(<Route path ='/' component = {Homepage}/>)
        }
        else{
            console.log("try again")
        }    
    }
    render(){
        return(
            <div>
                <div className = "Header">
                <div className="Hlink">
                <NavLink to = '/'>Homepage</NavLink></div>  
                <div className="Hlink">
                <NavLink to = '/signup'>Sign Up</NavLink>
                </div>
                </div> 
                <h1>Login</h1>     
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
                <button>LOGIN</button>           
            </form>
            </div>
        );
    }
}