import React, { Component } from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Student/Profile'
import S_HomeCC from './Pages/Student/HomeCC';
import S_HomeAC from './Pages/Student/HomeAC';
import S_Navbar from './Pages/Student/Navbar.js';
import S_HomeTC from './Pages/Student/HomeTC';



class App extends Component{

    render(){
        return(
          <> 
          <S_Navbar/>,
          <S_HomeCC/>,
          <S_HomeAC/>,
          <S_HomeTC/>
          
          
           
                </>
                
        )
    }
}

export default App;

