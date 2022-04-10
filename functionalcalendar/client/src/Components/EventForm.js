import React, { Component, useState} from 'react';
import { Form, Input, Button, DatePicker, message } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'antd/dist/antd.css';
import './App.css';
import { NavLink, Link } from 'react-router-dom';
import moment from 'moment';
import 'antd/dist/antd.css';


const { TextArea } = Input;

export const EventForm = () =>{

 
     
  const btnDisabled1 = false;
  const btnDisabled2 = false;
  const btnDisabled3 = false;
  const btnDisabled4 = false;
    
    
    const  predate= sessionStorage.getItem("date");
    

  let [event, setEvent] = useState({
    date: "",
    time:"",
    description:"",
    
  });
  

 let onChangeDesc = (e) => {
   if(e.target.name === 'description'){
  setEvent({ description: e.target.value });
  }
}
 const onChangeDate = (date,dateString,e) => {
 
    setEvent({...event, date: dateString });
  
}


  
 const update = () => {


    fetch('http://localhost:3002/addappointment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        date: event.date,
        time : event.timeslot,
        description: event.description,

        user: sessionStorage.getItem('user')
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        message.success('Your Booking is Confirmed');
        
        
       window.location.replace('/appoinment');
      })
    }
    const disabledHours = () => {
      const hours = [];
      const currentHour = moment().hour();

      for (let i = currentHour + 1; i <= 24; i++) {
        hours.push(i);
      }

      return hours;
    };

    const disabledMinutes = (selectedHour) => {
      const minutes = [];
      const currentMinute = moment().minute();
      if (selectedHour === moment().hour()) {
        for (let i = currentMinute; i <= 60; i++) {
          minutes.push(i);
        }
      }
      return minutes;
    }
    const format = 'HH:mm';
    return (
      <div className="container-fluid">
        <div className="App container-form"> 
          <div className="App-header-event">
            <div className='text-center display-2 m-3 font-weight-bold' style={{ fontWeight: 'bold', color: 'orange' }}>Book Your Appoinment</div>
            <div className="row">
              <div className=" p-3 color-white border rounded-3 bg-light">
                <Form
                 
                  name="control-ref"
                  className='form'
                  onFinish={ update}
                >

                  <div className="row p-2">

                    <Form.Item
                      name="textbox"
                      label="Description"
                      className='label'
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <div className="col-9">
                        <TextArea
                          rows="5"
                          className="form-control fields"
                          style={{ resize: 'none' }}
                          onChange={onChangeDesc}
                          name="description"

                        />
                      </div>
                    </Form.Item>
                  </div>

                  <div className="row p-2">
                    <Form.Item
                      label="Date"
                      className='label'
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <DatePicker

                        style={{ marginLeft: 35 }}
                        onChange={onChangeDate}
                        name="date"
                        disabledDate={(current) => {
                          return (
                            moment().add(-1, 'days') >= current ||
                            moment().add(1, 'month') <= current
                          );
                        }}
                        defaultValue={moment(predate, 'YYYY-MM-DD')}
                      />
                      {/* <Input /> */}
                    </Form.Item>
                  </div>

                  
                  <div className="row p-2">
                    <div className="col d-flex slot">
                      <button type='button' className=" btn btn-sm m-2 inner-slot"  value='10am to 11am' onClick={(e)=>{setEvent({ ...event, timeslot: e.target.value });}} disabled={btnDisabled1} name="10to11">10am - 11am</button>

                      <button type='button' className=" btn btn-sm m-2 inner-slot" value='11am to 12pm'
                       disabled={btnDisabled2} onClick={(e)=>{setEvent({ ...event, timeslot: e.target.value });}} name="11to12">11am - 12pm</button>

                      <button type='button' className=" btn  btn-sm m-2 inner-slot" value='3pm to 4pm'
                       disabled={btnDisabled3}   onClick={(e)=>{setEvent({ ...event, timeslot: e.target.value });}} name="3to4">3pm - 4pm</button>

                      <button type='button' className=" btn  btn-sm m-2 inner-slot"
                      disabled={btnDisabled4}    value='4pm to 5pm' onClick={(e)=>{setEvent({ ...event, timeslot: e.target.value });}} name="4to5">4pm - 5pm</button>
                    </div>
                  </div>
                  <center>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col d-flex ">

                          <Form.Item>
                            
                            <button
                              className='btn btn-success btn-xs m-2'
                              type='submit'
                            >
                              Book Your Appointment
                            </button>
                            
                          </Form.Item>

                          <Form.Item>
                            <button
                              type='button'
                              className="btn btn-warning btn-xs m-2"
                              onClick={setEvent.onReset}
                            >
                              Reset
                            </button>
                          </Form.Item>
                          <Form.Item>
                            <Link to="/appoinment">
                              <Button
                                className="m-1 text-white bg-primary"
                                size="large"
                                onClick={setEvent.showAppointment}

                              >
                                {' '}
                                All Appointments
                              </Button>
                            </Link>
                          </Form.Item>
                        </div>
                      </div>
                      <Button type='ghost'>
                        <NavLink to="/calendar" activeclassName="active">
                          Cancel
                        </NavLink>
                      </Button>
                    </div>
                  </center>
                </Form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
                            }
                          

                            

