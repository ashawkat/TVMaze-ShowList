import React from 'react';
import LoaderSrc from '../../assets/loader.gif';

const Loader = props => (
    <div>
        <img style={{ width:150 }} src={LoaderSrc} alt="loader icon" />
    </div>
);

export default Loader;