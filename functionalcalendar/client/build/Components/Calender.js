import React, { Component } from 'react';
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
//import DatePicker from 'react-date-picker';
//import Calendar from 'rc-calendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import formatDate from '@fullcalendar/react'
import '../Components/App.css';



export class Calender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDateTime: Date().toLocaleString(),
            //currentDateTime : Date().toLocaleString,
            //  current : new Date(),
            //  date : `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
        }
    }
    state = {
        date: new Date(),
    }
  

    todayDate() {
        let currentDateTime = Date().toLocaleString();
        alert(currentDateTime);
    }
   

    //    onChange = date => this.setState({date})
    // todayDate(){

    // }
    render() {
        return (
            <div className="container-fluid  mt-3">
                <div className="row">
                    <div className="col-3">
                        <div className="h2 ">
                            <button className="btn btn-primary btn-lg mx-5" onClick={() => this.todayDate()} >Today</button>


                        </div>
                    </div>
                    <div className="col-6">

                    </div>
                    <div className="col-3">
                        <div className="h5 ">
                            {this.state.currentDateTime}
                        </div>
                    </div>
                




                {/* <h1>Current date is {date}</h1> */}
                <div className="container-fluid " >
                <div className="row ">
                    <div className="col"></div>
                    <div className="col-md-12  " >
                        <FullCalendar
                         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth" 
                            height={"auto"}
                            
                        />
                        {/* <div className="bg-success">

                        </div>
                    </Calendar> */}
                    </div>
                    <div className="col">
                        {/* < DatePicker onChange={this.onChange}
                value={this.state.date}
                /> */}
                    </div>
                </div>
            </div>
            </div>
          
            </div>
        )
    }
}