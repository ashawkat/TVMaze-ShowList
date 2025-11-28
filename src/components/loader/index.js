import React from 'react';
import LoaderSrc from '../../assets/loader.gif';
import './index.css';

const Loader = props => (
    <div className="loader-container">
        <img src={LoaderSrc} alt="Loading..." className="loader-image" />
        <p className="loader-text">Loading...</p>
    </div>
);

export default Loader;