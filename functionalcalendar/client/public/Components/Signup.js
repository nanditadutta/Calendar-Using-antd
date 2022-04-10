import res from 'express/lib/response';
import React, { Component } from 'react'

export class Signup extends Component {

 constructor(props) {
   super(props);
   this.state = {
     username : '',
     password : '',
     confirmPassword : '',
     disabled:true
   };

 }

 getvalue(e) {
        if (e.target.username === 'username') {
          this.setState({username : e.target.value});
        }
        else if (e.target.name === 'password') {
          this.setState({password : e.target.value});
        }
        else if (e.target.name === 'confirmpassword') {
          this.setState({confirmpassword : e.target.value});
        }
 }
handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:3001/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          confirmpassword: this.state.confirmpassword 
        })
      }).then(response => response.json())
      .then(data =>{
        console.log('data');
      })
}
 
    
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4'>
            <form className='form m-2' method='post' action='#' onSubmit={this.handleSubmit}>
              <label className='h4'>Username</label>
              <input type='text' className='form-control m-2' name='username' placeholder='Username'
                onChange={this.getvalue} value={this.state.username} required></input>
              <label className='h4'>Password</label>
              <input type='text' className='form-control m-2' name='password' placeholder='Password'
               onChange={this.getvalue} value={this.state.password} required></input>
              <label className='h4'>ConfirmPassword</label>
              <input type='text' className='form-control m-2' name='confirmPassword' placeholder='Password'
                  onChange={this.getvalue} value={this.state.confirmPassword} required></input>
              <button type='submit' className='btn btn-primary m-2' >Submit</button>
            </form>
          </div>
          <div className='col-4'></div>
        </div>

      </div>
    )
  }
}
