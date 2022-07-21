import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import S_Home from './Pages/Student/Home';

class App extends Component{

    render(){
        return(
            <Router>
                <Routes>
                    <Route path='/t/' exact element={<T_Home/>} />
                    <Route path='/s/' exact element={<S_Home/>} />
                </Routes>
            </Router>
        )
    }
}

export default App;

