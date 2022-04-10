import { AntdCalendar1 } from './Components/AntdCalendar1'
import { EventForm } from './Components/EventForm'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import { Appoinments } from './Components/Appoinments';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';



export const App = () => {
  return (
    <div className="App">

      {/* < ShowTable /> */}
      
      <Router>
        {/* <Link to="/EventForm" className="btn btn-primary m-2">Add Event</Link> */}
        <Routes>
          <Route path='/'
            element={< Signup />} exact={true} ></Route>
          <Route path='/login'
            element={< Login />} exact={true} ></Route>

          <Route path="/calendar" element={< AntdCalendar1 />} ></Route>

          <Route path='/eventform'
            element={< EventForm />} />

          
          <Route path='/appoinment' 
          element={< Appoinments />} />


        </Routes>
      </Router>

      {/* < Calender /> */}
      {/* < AntdCalendar1 /> */}


      {/* < EventForm />  */}
    
    </div>
  );

}

