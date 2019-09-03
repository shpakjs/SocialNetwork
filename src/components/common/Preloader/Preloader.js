import React from 'react';
import preloader from '../../../assets/images/preloader.gif';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return <div className={styles.preloader}>
    { props.isFetching ? <img src={preloader} alt="preloader"/> : ''}
    </div>;
}

export default Preloader;