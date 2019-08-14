import React from 'react';
import styles from './Settings.module.css';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
const Settings = () => {
    return (
        <div className = {styles.settings}> 
            Settings
        </div>
    );
}

let AuthRedirectComponent = withAuthRedirect(Settings);

export default AuthRedirectComponent;