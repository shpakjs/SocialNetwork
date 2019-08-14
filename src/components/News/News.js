import React from 'react';
import styles from './News.module.css';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const News = () => {
    return (
        <div className = {styles.news}> 
            News
        </div>
    );
}

let AuthRedirectComponent = withAuthRedirect(News);
export default AuthRedirectComponent;