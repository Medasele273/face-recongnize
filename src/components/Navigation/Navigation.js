import React from 'react';

const Navigation = ({onSignOutClick}) =>{
    return (
        <nav style={{display:'flex',
            justifyContent:'flex-end',
            margin:'10px',
            padding:'10px'}}>
            <p onClick={onSignOutClick} className="f3 link dim black underline pointer">Sign Out</p>
        </nav>
    )
}

export default Navigation;