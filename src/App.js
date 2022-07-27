import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Student/Profile'
import S_Home from './Pages/Student/Home';
import CourseCard from './components/card';

class App extends Component{

    render(){
        return(
            <Router>
                <Routes>
                    <Route path='/t/' exact element={<T_Home/>} />
                    <Route path='/t/profile' exact element={<T_Profile/>} />
                    <Route path='/s/' exact element={<S_Home/>} />
                    <Route path='/component/card' exact element={<CourseCard/>}/>

                </Routes>
            </Router>
        )
    }
}

export default App;

