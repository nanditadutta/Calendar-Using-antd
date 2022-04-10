import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Appoinments = () => {



    let [dataa, setData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3002/showappointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                user: sessionStorage.getItem('user')
            })
        
        }).then(res => res.json())
            .then(data => {
                setData(data);
                                
            });
        },[])
        

        return (
            <div className='container-fluid'>
                <div className='row mt-2'>
                    <div className='col'>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid m-2">
                                <a className="navbar-brand h4" href="\Appointment">Appoinments</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/calendar">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/eventform">Book Appoinments</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/">Logout</Link>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className='row'>
                        <div className='col m-2'>
                            <div className='card p-3'>
                                <h2>Your Appoinments</h2>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.NO</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                           {dataa.map(e => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{e.aid}</th>
                                                        <td>{e.user}</td>

                                                        
                                                        <td>{e.date}</td>

                                                        <td>{e.time}</td>
                                                        
                                                        <td>{e.description}</td>

                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



