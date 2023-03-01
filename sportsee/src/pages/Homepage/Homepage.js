import React from 'react'
import { Link } from 'react-router-dom'
import {USER_MAIN_DATA as users} from '../../data/dataMocker'

import logo from "../../assets/logo.png"
import smiley from '../../assets/smiley.png'

import '../Homepage/Homepage.css'

/**
 * Component React that displays the homepage of the app for the log in,
 * and for the moment it contains only two users' links which are connected by their specific id
 * @component
 * @param {Object} userInfos User's informations  
 * @returns The homepage of the app to log in to the user's dashboard
 */
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