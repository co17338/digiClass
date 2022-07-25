import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css'
import ClassList from './ClassList';
import { validateDate } from '@mui/x-date-pickers/internals';

const Sidebar = ({children})=>
    {
        return(
            <div className='sidebar'>

                <ul className='SidebarList'>
                <li className='row'>Dashboard</li>
                {ClassList.map((val,key) => {
                    return(
                        <li key = {key} className="row"onClick ={()=>{
                            window.location.pathname = "/";
                        }}>
                            <div id="title">
                                {val.subject}
                            </div>
                        </li>
                    )
                })};
                </ul>
            </div>
        );
    };

    export default Sidebar;