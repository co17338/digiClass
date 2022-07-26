import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Teacher/Profile';
import S_Home from './Pages/Student/Home';
import S_Profile from './Pages/Student/Profile';
import T_EnrollmentDetails from './Pages/Teacher/EnrollmentDetails'


class App extends Component{

    render(){
        return(
            <Router>
                <Routes>
                    <Route path='/Pages/Teacher/Home' exact element={<T_Home/>} />
                    <Route path='/Pages/Teacher/Profile' exact element={<T_Profile/>} />
                    <Route path='/Pages/Student/Home' exact element={<S_Home/>} />
                    <Route path='/Pages/Student/Profile' exact element={<S_Profile/>} />
                    <Route path='/Pages/Teacher/EnrollmentDetails' exact element={<T_EnrollmentDetails/>} />
                </Routes>
            </Router>
        )
    }
}

export default App;
 