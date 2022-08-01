import { Component } from 'react';
import { NumberOfAssignments } from '../Pages/Student/assignmentList';
import { NumberOfTests } from '../Pages/Student/testList';
 class Counter extends Component {
    constructor(props) {
        super(props);
      }
    render() { 
        return (
            <>
            <div className="container card shadow-sm mt-2  ">
                <div className='card-body'>
                    <h2 className='text-left'> This Week</h2>
                    <div className='testCounter d-inline'>
                    <h4 className='text-left mt-3 d-inline'>Upcoming Tests:</h4>
                    <h4 className='text-secondary mt-3 d-inline p-2'>{NumberOfTests}</h4>
                    </div>
                    <div className='assignmentCounter d-inline ps-5 '>
                    <h4 className='text-left mt-3 d-inline'>Upcoming Assignments:</h4>
                    <h4 className='text-secondary mt-3 d-inline p-2'>{NumberOfAssignments}</h4>
                    </div>

                </div>
                
            </div>

            
            </>

        );
    }
 }
  
 export default Counter;