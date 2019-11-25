import React from 'react';

const Navigation = () =>{
    return (
        <nav style={{display:'flex',
            justifyContent:'flex-end',
            margin:'10px',
            padding:'10px'}}>
            <p className="f3 link dim black underline pointer">Sign Out</p>
        </nav>
    )
}

export default Navigation;