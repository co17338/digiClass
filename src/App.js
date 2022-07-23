import React, { Component } from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Student/Profile'
import S_Home from './Pages/Student/Home';
<<<<<<< HEAD
import T_ClassDetail from './Pages/Teacher/ClassDetail'
import S_ClassDetails from './Pages/Student/ClassDetail';
=======
>>>>>>> 2b9ad3cb11ac0a21ec4f154264dae56b04baf519

class App extends Component{

    render(){
        return(
            <div>
            {/* <Router>
                <Routes>
                    <Route path='/t/' exact element={<T_Home/>} />
                    <Route path='/t/profile' exact element={<T_Profile/>} />
                    <Route path='/s/' exact element={<S_Home/>} />
                    <Route path='/t/ClassDetail' exact element={<T_ClassDetail/>} />
                </Routes>
            </Router> */}
            <S_ClassDetails/>
            </div>
          
        )
    }
}

export default App;

