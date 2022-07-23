import {Component} from 'react';
import  { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import T_Home from './Pages/Teacher/Home';
import T_Profile from './Pages/Student/Profile'
import S_Home from './Pages/Student/Home';

class App extends Component{

    render(){
        return(
            <div>
            <Router>
                <Routes>
                    <Route path='/t/' exact element={<T_Home/>} />
                    <Route path='/t/profile' exact element={<T_Profile/>} />
                    <Route path='/s/' exact element={<S_Home/>} />
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

