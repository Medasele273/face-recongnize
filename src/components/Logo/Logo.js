import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt pa3"
                options={{ max: 55 }}
                style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner br4 shadow-2">
                    <img style={{ paddingTop: '5px' }} src={brain} alt="Logo" />
                </div>
            </Tilt>
        </div>
    );
}
export default Logo;