import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import Rahul from './rahul';
import Home from './Pages/Home';

class App extends Component{

    render(){
        return(
            <div>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                </Routes>
            </Router>
            <div className="h-full flex justify-center flex-col w-2/3 m-auto p-8 shadow-lg">
            <div className="App">
              <h1 className="text-4xl font-bold flex items-center">
               <span>Sign Up </span>
              </h1>
              <Rahul onChange={fields => this.onChange(fields)} />
              <p>
              {JSON.stringify(this.state.fields, null, 2)}
             </p>
            </div>
          </div>
          </div>
        )
    }
}

export default App;

