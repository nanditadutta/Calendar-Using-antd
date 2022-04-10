import React, { Component } from 'react';

export class ShowTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row m-2 p-3">
          <div className="col p-4">
            <div className="card p-4">
              <table class="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.user.map((e) => {
                    return (
                      <tr>
                        <td>{e.description}</td>
                        <td>{e.predate}</td>
                        <td>{e.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
