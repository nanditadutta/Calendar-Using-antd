import { message } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


export const Login = () =>  {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: '',
  //     password: ''
  //   }
  // }

  const [login,setLogin] = useState({
    name:'',
    password: ''
  })

 const getvalue = (e) => {
    if (e.target.name === 'name') {
      setLogin({ name: e.target.value });
    }
    else if (e.target.name === 'password') {
         setLogin({...login, password: e.target.value });
    }
  }

 const loginHandleSubmit = (e) => {
    fetch('http://localhost:3002/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: login.name,
        password: login.password,

      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          sessionStorage.setItem('user', login.name)
          window.location.replace('/calendar');
        } else {
          message.success('Wrong Data entered');
          window.location.reload('/login');
        }
      })

    e.preventDefault();
  }




 
    return (
      
      <div className="container-fluid  " >

        <div className=" row p-5  ">
          <div className="col"></div>

          <div className=" " style={{ marginTop: 150,width: "450px" }}>
            
            <form className="form-control  inner-login " onSubmit={loginHandleSubmit}>
            <div className="h1  p-2 text-white text-center" style={{ fontFamily: "sans-serif" }} >Login Form</div>
              <input
                type="text"
                name="name"
                onChange={getvalue}
                value={login.name}
                className="form-control mt-2"
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="password"
                onChange={getvalue}
                value={login.password}
                className="form-control mt-2"
                placeholder="Password"
                required
              />

              <div className='d-flex justify-content-evenly'>
                <button
                  type="submit"
                  className="btn btn-success mt-2 p-2"
                // style={{ marginLeft: "48%", fontWeight: "700px" }}
                >
                  Login
                </button>

                
               <Link to="/" className="btn btn-primary mt-2" role="button">Signup Form</Link>
              
               
              </div>

              </form>
           
          </div>

          <div className="col"></div>
        </div>

      </div>





    );
  }



