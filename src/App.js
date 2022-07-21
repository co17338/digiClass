import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';

class App extends Component{

    render(){
        return(
            <Router>
                <Routes>
                    <Route path='/' exact element={<T_Home/>} />
                </Routes>
            </Router>
        )
    }
}

export default App;

