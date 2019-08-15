import React from 'react';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status || 'Edit status'
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    changeStatusText = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status || 'Edit status'
            });
        }
    }

    render() {
        return (<div className= {styles.info__item}>
            {this.state.editMode
                ? <div>
                    <input 
                        autoFocus={true} 
                        onBlur={this.deactivateEditMode} 
                        value={this.state.status} 
                        placeholder="Enter your status"
                        onChange={this.changeStatusText}/></div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.state.status}
                    </span>
                </div>
            }
        </div>);
    }
}

export default ProfileStatus;