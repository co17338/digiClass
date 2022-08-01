import React, { Component } from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home7 from './Pages/Teacher/Home7';
import T_Profile from './Pages/Student/Profile'
import S_HomeCC from './Pages/Student/HomeCC';
import S_HomeAC from './Pages/Student/HomeAC';
import S_Navbar from './Pages/Student/Navbar.js';
import S_HomeTC from './Pages/Student/HomeTC';
import Counter from './S_Components/Counter';
import T_Home9 from './Pages/Teacher/Home9';
import T_Home8 from './Pages/Teacher/Home8';





class App extends Component{

    render(){
        return(
          <> 
          
          {/* <S_Navbar/>,
          <Counter/>,
          <S_HomeCC/>,
          <S_HomeAC/>,
          <S_HomeTC/> */}
          <T_Home7/>
          <T_Home8/>
          <T_Home9/>
          
          
           
                </>
                
        )
    }
}

export default App;

