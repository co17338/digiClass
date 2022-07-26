import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Student/Profile'
import S_Home from './Pages/Student/Home';
import S_Navbar from './Pages/Student/Navbar.js';



class App extends Component{

    render(){
        return(
          <> 
          <S_Navbar/>,
          <S_Home/>
           
                </>
                
        )
    }
}

export default App;

