import React from 'react';
import {NavLink} from 'react-router-dom';
import Axios from 'axios';

export default class Login extends React.Component{
    constructor(props){
        super();
        this.state ={
            user : '',
            password : '',
            clicked : false,
            Token :" ", 
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
        console.log(this.state.user,this.state.password)
        e.preventDefault();
        if(this.state.user && this.state.password){
            Axios.post('http://localhost:8000/api/account/login',({'username':this.state.user,'password':this.state.password}))
            .then((response)=>{
                // Token is stored
                if(response.status == 200){
                    this.setState(
                        {
                            Token : response.data.token
                        }
                    )
                }
                else{
                    alert("Invalid Username or Password");
                }
            })}
        else{
            alert("Bhar usko");
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
                <button type = "submit">LOGIN</button>           
            </form>
            </div>
        );
    }
}