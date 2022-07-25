import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Student/Profile'
import S_Home from './Pages/Student/Home';
import Sidebar from './Pages/Student/Sidebar';



class App extends Component{

    render(){
        return(
          <>  <Sidebar/>,
                <S_Home/>
                </>
                
        )
    }
}

export default App;

