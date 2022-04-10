import React, { Component } from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, Select } from 'antd'

import { Calendar } from 'antd'
import '../Components/App.css';


export class AntdCalendar extends Component {

    constructor(props) {
       
         var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        super(props);
        this.state = {
            Current: time
        }
    }
   

    
   
    render() {

        const monthYear = ['January 2022','Febuary 2022','March 2022','April 2022','May 2022','June 2022','July 2022','August 2022','September 2022','October 2022','November 2022','December 2022'];
       const TodayDate = () =>{
            let currentDate = Date().toLocaleString();
            alert(currentDate);
       }

        const size = 'large';

        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 m-3 ">
                       <Select placeholder="March 2022" className="m-3 ">
                          {monthYear.map((monthYear,index) =>{
                              return <Select.Option key={index} value={monthYear}>

                              </Select.Option>
                          })}
                       </Select>
                       <Button type='primary' size={size} onClick={TodayDate}> Today</Button>
                    </div>
                    <div className="col-2 m-3">
                   
                    </div>
                    <div className="col-6 m-3 h5">
                       
                    </div>
                    <div className="col m-1 h5 m-4">
                    {this.state.Current}
                       </div>
                </div>
                <div className="row">
                    <div className="col demo  ">
                       <Calendar 
                       
                       />
                    </div>
                   
                </div>

            </div>
        )
    }
}