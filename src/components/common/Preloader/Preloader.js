import React from 'react';
import preloader from '../../../assets/images/preloader.gif';

const Preloader = (props) => {
    return <div>
    { props.isFetching ? <img src={preloader} alt="preloader"/> : ''}
    </div>;
}

export default Preloader;