import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { Menu } from 'antd'


export const Header = () => {
    return (
        <>
            <div className='containerHeader'>
                <Menu >
                    <a href="/"><FontAwesomeIcon icon={faHouse} className='icons' /></a>
                    <a href="/movies"><FontAwesomeIcon icon={faMagnifyingGlass} className='icons' /></a>
                </Menu>
            </div>
        </>
    )
}