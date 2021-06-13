import Axios from 'axios';
import React from 'react';
import {withRouter } from "react-router-dom";
class Signup extends React.Component{
    constructor(props){
        super();
        this.state ={
            user:'',
            username : '',
            password : '',
            confirm_password:'',
            clicked : false,
        }
    this.handleChange.bind(this);
    this.submitHandler.bind(this);
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler =(e)=>{
        // console.log({'email':this.state.user,'user':this.state.username,'password':this.state.password,'cnf_password':this.state.confirm_password})
        e.preventDefault();
        if(this.state.password!==this.state.confirm_password){
            alert("password mismatch")
        }
        else{
            Axios.post('http://localhost:8000/api/account/register',({'email':this.state.user,'username':this.state.username,'password':this.state.password,'password2':this.state.confirm_password}))
            .then((response)=>{
                console.log(response);
                //Redirect to login page on successful user signup
                if(response.status === 200){
                    return(this.props.history.push('/login'));
                }
                else{
                    alert("Username/Email already exist");
                }
            })
            .catch((e)=>{
                console.warn(e.message);
                return(this.props.history.push('/'));
            })
        }
    }
    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.submitHandler}>
                <div className='tab'>
                <input type='email' value={this.state.user} name ='user' onChange={this.handleChange} required/>
                <label className="label-name">
                <span className="content-name">Email</span></label>
                </div>     
                <div className='tab'>
                <input type='text' value={this.state.username} name ='username' onChange={this.handleChange} required/>
                <label className="label-name">
                <span className="content-name">Username</span></label>
                </div>           
                <div className='tab'>
                <input type='password' value={this.state.password} name ='password' onChange={this.handleChange} required/>
                <label className="label-name">
                <span className="content-name">Password</span></label>
                </div>     
                <div className='tab'>
                <input type='password' value={this.state.confirm_password} name ='confirm_password' onChange={this.handleChange} required/>
                <label className="label-name">
                <span className="content-name">Confirm Password</span></label>
                </div>
                <br/>
                <button style = {{width:"40%"}}>Sign Up</button>           
            </form>
            </div>
        );
    }
}

export default withRouter(Signup);