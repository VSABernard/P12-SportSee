import React from 'react'
import { Link } from 'react-router-dom'
import {USER_MAIN_DATA as users} from '../../data/dataMocker'

import logo from "../../assets/logo.png"
import smiley from '../../assets/smiley.png'

import '../Homepage/Homepage.css'

const Homepage = (userInfos) => {

    return (
        <div className='homepage'>
            <div className="logo-homepage">
                <img src={logo} alt="running man logo" />
            </div>
            <p className='bienvenue'>Bienvenue !</p>
            <ul className='users-block'>
                { users.map((user) => (
                    <li key={user.id} className='user-item'>
                        <Link to={`/Dashboard/${user.id}`} state={ user } >
                            <img className='user' src={ smiley } alt={`${user.id}`} />
                            <p className='identity'>{user.userInfos.firstName} {user.userInfos.lastName}</p>
                        </Link>
                    </li>            
                ))}
           </ul> 
        </div>
    )
} 

export default Homepage