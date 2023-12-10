import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faBell, faVideo,faUser } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    
    const [notificationCount, setNotificationCount] = useState(10);
    return (
        <div className="header" >
            <div >
                <h3>Hey {props.name}..! Welcome</h3>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button className='search_icon'> <FontAwesomeIcon icon={faSearch} /></button>
                <button className='microphone'>
                    <FontAwesomeIcon icon={faMicrophone} />
                </button>
            </div>
            <div className="notification-icons" >
                <button className='bell_icon' >
                    <FontAwesomeIcon icon={faVideo} />
                </button>
                <button className='bell_icon' >
                    <FontAwesomeIcon icon={faBell} />
                    {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
                </button>
                <button className='bell_icon' >
                    <FontAwesomeIcon icon={faUser} />
                </button>
            </div>
        </div>
    );
};

export default Header;
