import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Student/Profile'
import S_Home from './Pages/Student/Home';
import S_Navbar from './Pages/Student/Navbar.js';
import Login from './Pages/Student/Login';
import Signup from './Pages/Student/Register';



class App extends Component{

    render(){
        return(
          <> 
          <Login/>,
          {/* <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/shome' element={<S_Home/>}/>
            <Route exact path='/signup' element={<Signup/>}/>

           
          </Routes> */}
          <Signup/>
           
                </>
                
        )
    }
}

export default App;

