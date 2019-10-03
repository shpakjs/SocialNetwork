import React, { useState, useEffect }from 'react';
import styles from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [ editMode, setEditMode ] = useState(false);
    let [ status, setStatus ] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        if(props.isOwner) setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (<div className= {styles.info__item}>
            { editMode
            ?<div>
                <input 
                    autoFocus={true} 
                    value={status} 
                    placeholder="Enter your status"
                    onBlur={deactivateEditMode}
                    onChange = {onStatusChange} />
            </div>
            :<div>
                <span onDoubleClick={activateEditMode} >
                    {status}
                </span>
            </div>
            }
    </div>);
}


export default ProfileStatusWithHooks;