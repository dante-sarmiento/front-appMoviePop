import React, { useState } from 'react'
import { faArrowRightFromBracket, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { Menu } from 'antd'
import { Navigate } from 'react-router-dom'


export const Header = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")));

    const logout = ()=> {
        console.log(logout)
        localStorage.removeItem('userToken');
        localStorage.removeItem('currentUser');
        setUser(null);
    }
    return (
        <>
            <div >
                <Menu className='containerHeader'>
                    <a href="/*"><FontAwesomeIcon icon={faHouse} className='icons' /></a>
                    <a href="/Movies"><FontAwesomeIcon icon={faMagnifyingGlass} className='icons' /></a>
                    <a href="/Favorites"><FontAwesomeIcon icon={faStar} className='icons'/></a>
                    <a href='/login' onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} className='icons' /></a>
                </Menu>
            </div>
        </>
    )
}