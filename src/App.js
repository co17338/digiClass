import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Student/Profile'
import T_Login from './Pages/Teacher/Login'
import S_Home from './Pages/Student/Home';

class App extends Component{

    render(){
        return(
            <Router>
                <Routes>
                    <Route path='/t/' exact element={<T_Home/>} />
                    <Route path='/t/Login' exact element={<T_Login/>} />
                    <Route path='/t/profile' exact element={<T_Profile/>} />
                    <Route path='/s/' exact element={<S_Home/>} />
                </Routes>
            </Router>
        )
    }
}

export default App;

