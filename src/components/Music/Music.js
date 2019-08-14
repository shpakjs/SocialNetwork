import React from 'react';
import styles from './Music.module.css';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const Music = () => {
    return (
        <div className = {styles.music}> 
            Music
        </div>
    );
}
let AuthRedirectComponent = withAuthRedirect(Music);
export default AuthRedirectComponent;