import React, { Component } from 'react';

export class Appoinments extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid m-2">
                                <a className="navbar-brand" href="#">Navbar</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/eventform">Book Appoinments</a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link" href="">Pricing</a>
                                        </li>
                                        <li class="nav-item">
                                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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
                                            <th scope="col">Email</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Slot</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>pankaj@gmail.com</td>
                                            <td>i have to regular chekcup.</td>
                                            <td>22-12-03</td>
                                            <td>10am - 11am</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

