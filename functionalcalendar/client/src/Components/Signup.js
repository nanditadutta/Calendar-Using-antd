import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { message } from 'antd';

export  const Signup = () => {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: "",
    //         password: ""
    //     }
    // }
    
   const [signup,setSignup] = useState({
       name: "",
       password: ""
   });

   const getvalue = (e) => {
        if (e.target.name === 'name') {
            setSignup({ name: e.target.value});
        }
        else if (e.target.name === 'password') {
            setSignup({...signup, password: e.target.value });
        }
    }

  const  handleSubmit = (e) => {
      console.log(signup);
        e.preventDefault();
        fetch('http://localhost:3002/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: signup.name,
                password: signup.password

            })
        })
            .then(response => response.json())
            .then(data => {

            //  console.log(data);
            if(data)
            {
                message.success('Signup Successfully');
            window.location.replace('/login');
            }
            else
            {
                console.log("something went wrong");
            }
            });

    }
    



    return (

        <div className="p-5  mt-5">
            <div className="container  " style={{ marginTop: "100px", width: "450px" }}>
               
                <form className="form-control mb-5 signup1" onSubmit={handleSubmit}>
                <h1 className="p-2 text-white text-center " style={{ fontFamily: "sans-serif" }} >Sign Up Form</h1>
                    <input
                        type="text"
                        name="name"
                        onChange={getvalue}
                        className="form-control mt-2"
                        placeholder="enter your name"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={getvalue}
                        className="form-control mt-2"
                        placeholder="enter password"
                        required
                    />
                    <input
                        type="password"
                        className="form-control mt-2"
                        placeholder="confirm password"
                        required
                    />
                    <div className='d-flex  justify-content-evenly'>
                        <button
                            type="submit"
                            className="btn btn-success m-2 p-2"
                           
                        // style={{ marginLeft: "48%", fontWeight: "700px" }}
                        >
                            Signup!
                        </button>

                       
                            <Link to="/login" className="btn btn-primary m-2 p-2">Login Page</Link>
                        
                            </div>




                </form>
                
                {/* <a href="#" className="text-white h6 " style={{marginLeft:"55%"}}>Already a user? login maybe!</a> */}
            </div>
        </div>


    );
}



