import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, TimePicker } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'antd/dist/antd.css';
import './App.css';
import { NavLink, Link } from 'react-router-dom';
import moment from 'moment';
import 'antd/dist/antd.css';

import { ShowTable } from './ShowTable';
import confirm from 'antd/lib/modal/confirm';
const { TextArea } = Input;

export class EventForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      btnIsDisable1: false
    }
    this.state = {
      btnIsDisable2: false
    }
    this.state = {
      btnIsDisable3: false
    }
    this.state = {
      btnIsDisable4: false
    }
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // var a = new Date();
    // var date = a.toDateString();
    // var b = new Date();
    // var time = b.toLocaleTimeString();
    this.state = {
      description: '',
      date: '',
      time: '',
      predate: sessionStorage.getItem("date")
    };
  }
  /* 
    What you can do is :
    *  state ? <ShowTable userData={ Userdata }/> : undefined;
  */

  onChangeDesc(e) {
    this.setState({ description: e.target.value });
  }
  onChangeDate(date, dateString) {
    // console.log({dateString});
    this.setState({ date: dateString });
  }
  onChangeTime(time, timeString) {
    // console.log(timeString);
    this.setState({ time: timeString });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      description: '',
      date: '',
      time: '',
    });
  }

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('user'));

    // if (userData.length > 0) {
    this.setState({
      description: this.state.description,
      date: this.state.date,
      time: this.state.time,
    });
    // } else {
    this.setState({
      description: '',
      date: '',
      time: '',
    });
    // }
  }

  // toggleShowHide = () => {
  //   this.setState(state => ({ display: !state.display }));
  // };

  update = (e) => {
    let arr = JSON.parse(localStorage.getItem('user')) || [];
    arr.push(this.state);
    localStorage.setItem('user', JSON.stringify(arr));
  };

  formRef = React.createRef();

  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };

  slotBook1 = () => {
    alert('Your Booking is Confirmed for 10am to 11am');
    this.setState({ btnIsDisable1: true });
  }
  slotBook2 = () => {
    alert('Your Booking is Confirmed for 11am to 12pm');
    this.setState({ btnIsDisable2: true });
  }
  slotBook3 = () => {
    alert('Your Booking is Confirmed for 3pm to 4pm');
    this.setState({ btnIsDisable3: true });
  }
  slotBook4 = () => {
    alert('Your Booking is Confirmed for 4pm to 5pm');
    this.setState({ btnIsDisable4: true });

    // confirm({
    //   title: 'Do you want to book this slot',

    //   onOk(){
    //    let url="http://localhost:3000/eventform";
    //   
    //   },

    //   onCancel(){


    //   }
    // })

  }
  showAppointment(){
    let url = 'http://localhost:3000/appoinment';
    window.location.replace(url);
  }

  render() {
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
    };
    const format = 'HH:mm';
    return (
      <div className="container-fluid">
        <div className="App container-form">
          <div className="App-header">
            <div className='text-center display-2 m-3 font-weight-bold' style={{ fontWeight: 'bold', color: 'orange' }}>Book Your Appoinment</div>
            <div className="row">
              <div className=" p-3 color-white border rounded-3 bg-light">
                <Form
                  ref={this.formRef}
                  name="control-ref"
                  className='form'
                  onFinish={this.onFinish}
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
                          value={this.state.description}
                          onChange={this.onChangeDesc}
                        />
                      </div>
                    </Form.Item>
                  </div>

                  <div className="row p-2">
                    <Form.Item
                      name="date"
                      label="Date"
                      className='label'
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <DatePicker
                        
                        style={{ marginRight: 260 }}
                        value={this.state.date}
                        onChange={this.onChangeDate}
                        disabledDate={(current) => {
                          return (
                            moment().add(-1, 'days') >= current ||
                            moment().add(1, 'month') <= current
                          );
                        }}
                        defaultValue={moment(this.state.predate, 'YYYY-MM-DD')}
                      />
                      {/* <Input /> */}
                    </Form.Item>
                  </div>

                  {/* <div className="row p-2">
                    <Form.Item
                   
                      name="time"
                      label="Time"
                      className='label'
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >

                      <TimePicker.RangePicker
                        disabledHours={disabledHours}
                        disabledMinutes={disabledMinutes}


                        use12Hours
                        className=" fields"
                        style={{ marginRight: 60 }}

                        value={this.state.time}
                        onChange={this.onChangeTime}
                      />

                    </Form.Item>
                  </div> */}
                  <div className="row p-2">
                    <div className="col d-flex slot">
                      <button type='button' className=" btn  btn-sm m-2 inner-slot" onClick={this.slotBook1} disabled={this.state.btnIsDisable1}>10am - 11am</button>
                      <button type='button' className=" btn  btn-sm m-2 inner-slot" onClick={this.slotBook2} disabled={this.state.btnIsDisable2}>11am - 12pm</button>
                      <button type='button' className=" btn  btn-sm m-2 inner-slot" onClick={this.slotBook3} disabled={this.state.btnIsDisable3}>3pm - 4pm</button>
                      <button type='button' className=" btn  btn-sm m-2 inner-slot" onClick={this.slotBook4} disabled={this.state.btnIsDisable4}>4pm - 5pm</button>



                    </div>
                  </div>
                  <center>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col d-flex ">

                          <Form.Item>
                            <Link
                              to={{
                                pathname: '/showtable',
                              }}
                            >
                              {this.state.userData ? (
                                <ShowTable userData={this.userData} />
                              ) : undefined}
                              <button
                                className='btn btn-success btn-xs m-2'
                                type='submit'
                                onClick={this.update}
                              >
                                Book Your Appointment
                              </button>
                            </Link>
                          </Form.Item>

                          <Form.Item>
                            <button
                              type='button'
                              className="btn btn-warning btn-xs m-2"
                              onClick={this.onReset}
                            >
                              Reset
                            </button>
                          </Form.Item>
                          <Form.Item>
                          <Button
                        className="m-1 text-white bg-primary"
                        size="large"
                        onClick={this.showAppointment}
                      >
                        {' '}
                        All Appointments
                      </Button>
                      </Form.Item>
                        </div>
                      </div>
                      <Button type='ghost'>
                        <NavLink to="/" activeclassname="active">
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
}

// import React, { Component } from 'react';
// import { Form, Input, Button, DatePicker, Space, TimePicker } from 'antd';
// import { NavLink } from 'react-router-dom';
// import 'antd/dist/antd.css';
// import './App.css';
// import'bootstrap/dist/css/bootstrap.min.css';
// import'bootstrap/dist/js/bootstrap.bundle.min';
// const { TextArea } = Input;
// export default class EventForm extends Component {
//   formRef = React.createRef();

//   userData;
//   constructor (props) {
//     super(props)
//     this.onChangeDesc = this.onChangeDesc.bind(this);
//     this.onChangeDate = this.onChangeDate.bind(this);
//     this.onChangeTime = this.onChangeTime.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.state = {
//       description:'',
//       date:'',
//       time:''
//     };
//   }

//   onChangeDesc(e){
//     this.setState({description:e.target.value})
//   }
//   onChangeDate(e){
//     console.log('e--->>',e.target.value);
//     this.setState({date:this.date.value})
//   }
//   onChangeTime(e){
//     this.setState({time:e.target.value})
//   }
//   onSubmit(e){
//     e.preventDefault(
//       this.setState({
//         description:'',
//         date:'',
//         time:''
//       })
//     )

//   }

//   componentDidMount(){
//     this.userData = JSON.parse(sessionStorage.getItem('user'));
//     if(sessionStorage.getItem('user')){
//       this.setState({
//         description:this.userData.description,
//         date:this.userData.date,
//         time:this.userData.time
//       })
//     }
//     else{
//       this.setState({
//         description:'',
//         date:'',
//         time:''
//       })
//     }
//   }

//   componentDidUpdate(nextProps,nextState){
//     sessionStorage.setItem('user',JSON.stringify(nextState));
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header " style={{ backgroundColor: '#84ab8e' }}>
//           <div className="container ">
//             <div className="row">
//               <div className="col m-4">
//                 <div className="card p-3 bg-light">
//                 <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish}>                  <div className="row p-2">
//                     <div className="col-3">
//                     <Form.Item label="Description" name="description" rules={[
//                   {
//                     required: true,
//                   },
//                 ]}>
//                     </Form.Item>
//                     </div>
//                     <div className="col-9">
//                       <TextArea rows="5" style={{resize:'none'}}value={this.state.description} onChange={this.onChangeDesc} />
//                       </div>
//                     </div>
//                     <div className="row p-2">
//                     <div className="col-3">
//                     <Form.Item label="Date" name="date">
//                       </Form.Item>
//                       </div>
//                       <div className="col-9">
//                       <Space direction="vertical">
//                       {/* <DatePicker
//                           className="" value={this.state.date}
//                           style={{ marginRight: 70 }}
//                         ></DatePicker>                     */}
//                         <DatePicker
//                         className=""
//                          style={{ marginRight: 60 }} />
//                 {/* <Input /> */}
//                           </Space>
//                       </div>
//                     </div>
//                     <div className="row p-2">
//                     <div className="col-3">
//                     <Form.Item label="Time" name="time">
//                       </Form.Item>
//                       </div>
//                       <div className="col-9">
//                       <Space direction="vertical">
//                       <TimePicker
//                         className=""
//                          style={{ marginRight: 60 }} />
//                       </Space>
//                       </div>
//                     </div>
//                     <Form.Item>
//                     <Button type="primary" className='btn1' htmlType="submit">
//                   Book Your Appointment
//                 </Button>
//                 <Button htmlType="button" onClick={this.onReset}>
//                   Reset
//                 </Button>                    </Form.Item>
//                     <div className="navbar bg-light">
//           <NavLink to="/" activeClassName="active">
//             Cancel
//           </NavLink>
//           </div>
//                   </Form>
//                 </div>

//               </div>
//               <div className="col-4"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
