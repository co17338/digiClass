import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

class App extends Component{

    render(){
        return(
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    
                </Routes>
            </Router>
        )
    }
}

export default App;

