import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';

import 'antd/dist/antd.css';

import { Calendar, Select, Radio, Col, Row, Modal } from 'antd';



function onPanelChange(value, mode) {
  console.log(value, mode);
}
const { Group, Button } = Radio;

export class AntdCalendar1 extends React.Component {
  constructor(props) {
    var today = new Date(),
      time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    super(props);
    this.state = {
      time: new Date(),
      Current: time,
      currentDateTime: Date().toLocaleString(),
    };
  }
  currentTime(){
    this.setState({
      time:new Date(),
    })
  }
  componentDidMount(){
    setInterval(() => this.currentTime(),1000)
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  formatCalendarDate = (dateTime) => {
    return moment.utc(dateTime).format('LL');
  };
  onSelect = (cal) => {
    this.setState({ selectedValue: cal });
    let url="/eventform";
    sessionStorage.setItem('date',JSON.stringify(cal._d));
    window.location.replace(url)
  };

  showAppointment(){
    let url = 'http://localhost:3000/appoinment';
    window.location.replace(url);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        {/* <div className="col"></div> */}
        <div className="col-12">
      <div className="site-calendar-customize-header-wrapper mt-4 ">
        <Calendar
          onSelect={this.onSelect}
          disabledDate={(current) => {
            return (
              moment().add(-1, 'days') >= current ||
              moment().add(1, 'month') <= current
            );
          }}
          headerRender={({ value, type, onChange, onTypeChange }) => {
            const start = 0;
            const end = 12;
            const monthOptions = [];
            const current = value.clone();
            const localeData = value.localeData();
            const months = [];
            for (let i = 0; i < 12; i++) {
              current.month(i);
              months.push(localeData.monthsShort(current));
            }

            for (let index = start; index < end; index++) {
              monthOptions.push(
                <Select.Option className="month-item" key={`${index}`}>
                  {months[index]}
                </Select.Option>
              );
            }
            const month = value.month();

            const year = value.year();
            const options = [];
            for (let i = year - 10; i < year + 10; i += 1) {
              options.push(
                <Select.Option key={i} value={i} className="year-item">
                  {i}
                </Select.Option>
              );
            }
            return (
              <div style={{ padding: 8 }}>
                <Row type="flex" justify="space-between">
                  <Col>
                    <Group
                      size="small"
                      onChange={(e) => onTypeChange(e.target.value)}
                      value={type}
                    >
                      <Select
                        className="m-1"
                        size="small"
                        dropdownMatchSelectWidth={false}
                        value={String(month)}
                        onChange={(selectedMonth) => {
                          const newValue = value.clone();
                          newValue.month(parseInt(selectedMonth, 10));
                          onChange(newValue);
                        }}
                      >
                        {monthOptions}
                      </Select>
                      <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        className="my-year-select"
                        onChange={(newYear) => {
                          const now = value.clone().year(newYear);
                          onChange(now);
                        }}
                        value={String(year)}
                      >
                        {options}
                      </Select>
                      <Button
                        className="m-1 text-white bg-success"
                        size="large"
                        onClick={this.showModal}
                      >
                        {' '}
                        Today
                      </Button>
                      <Modal
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                      >
                        <Moment format="MMMM Do YYYY, h:mm:ss a"></Moment>
                      </Modal>
                      <Button
                        className="m-1 text-white bg-success"
                        size="large"
                        onClick={this.showAppointment}
                      >
                        {' '}
                        All Appointment
                      </Button>
                    </Group>
                  </Col>

                  <Col></Col>

                  <Col>{this.state.time.toLocaleTimeString()}</Col>
                </Row>
              </div>
            );
          }}
          onPanelChange={onPanelChange}
        />
        
      </div>
      </div>
      </div>
      </div>
    );
  }
}




// {/* // import React, { Component} from 'react';
// // import './App.css';
// // import moment from 'moment'
// // import { Calendar } from 'antd';

// // // calenderStyle=CSS`
// // //   .ant-picker-calender-header{ */}



// //   float: left;
// //   }
// //   `
// function onPanelChange(value, mode) {
// 	console.log(value.format('YYYY-MM-DD'), mode);
//   }
// function disabledDate(current) {
// 	if (!current) {
// 	  return false;
// 	}
// 	else{
// 	const date = moment();
// 	date.hour(0);
// 	date.minute(0);
// 	date.second(0);
// 	return current.valueOf() < date.valueOf();
// 	}
//   }

// export class Calender extends Component {
// constructor(props) {
// super(props);
// this.state = {
// currentDateTime: Date().toLocaleString(),
// };
// }
// state = {
// date: new Date(),
// };
// todayDate() {
// let currentDateTime = Date().toLocaleString();
// alert(currentDateTime);
// }

// render() {
// return (
// <div className="container">
// <div className="row">
// <div className="col-3">
// <div className="h2">
// <button
// className="btn btn-success btn-lg m-2"
// onClick={() => this.todayDate()}
// >
// Today
// </button>
// </div>
// </div>
// <div className="col-6"></div>
// <div className="col-3">
// <div className="h5 ">{this.state.currentDateTime}</div>
// </div>
// </div>
// <div className="container">
// <div className="row text-center">
// <Calendar
// onPanelChange={onPanelChange}
// disabledDate={disabledDate}
// fullscreen={true}
// // className={calenderStyle}
// />
// </div>
// </div>
// </div>
// );
// }
// }
