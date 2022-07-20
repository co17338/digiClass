import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component}  from 'react';
import {Route,Routes} from "react-router-dom"
import Pricing from "./components/pages/pricing"
import Features from "./components/pages/features"


class App extends Component {

  state = { 
    counters:[
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
    ]
 } ;
 handleReset =() => {
 };
 handleIncrement =counter =>{
    const counters=[...this.state.counters]
    const index= counters.indexOf(counter)
    counters[index]={...counter}
    counters[index].value++
    this.setState({counters})
 }

 handleDelete= counterId => {
    const counters=this.state.counters.filter(c=>c.id!==counterId);
    this.setState({ counters: counters });

 }

 handleReset = () => {
    const counters=this.state.counters.map(c=>{
        c.value=0 ;
        return c;
    })
        this.setState({counters}) 
 }

  render(){
    return (
      <div>
      <NavBar totalCounters={this.state.counters.filter(c=> c.value>0).length}
       />
      <main ClassName="container">
        <Routes>
          <Route path ="/" element={      
          <Counters
          counters={this.state.counters}
          onReset ={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete} />} >
          </Route>
          <Route path ="/components/pages/features" element={<Features />} > </Route>
          <Route path ="/components/pages/pricing" element={<Pricing />} > </Route>
        </Routes>
      {/* <Counters
      counters={this.state.counters}
      onReset ={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete} /> */}
      </main>
      </div>  
    );
    }
  }
export default App;
