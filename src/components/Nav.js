import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav(){
    return(
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName='active' to='/signup'>
                Sign Up
                </NavLink>
            </li>
        </ul>
    )
}
