import React from 'react';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: this.props.status ? this.props.status: ''
    }
    activateEditMode() {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.setStatus(this.state.title);
    }
    changeStatusText() {
        this.setState({
            title: this.newStatusElement.current.value
        });
    }
    newStatusElement = React.createRef()

    render() {
        return (<div className= {styles.info__item}>
            {this.state.editMode
                ? <div>
                    <input 
                        ref={ this.newStatusElement } 
                        autoFocus={true} 
                        onBlur={this.deactivateEditMode.bind(this)} 
                        value={this.state.title} 
                        placeholder="Enter your status"
                        onChange={this.changeStatusText.bind(this)}/></div>
                : <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.title.length > 0 ? this.state.title: 'Edit status'}</span></div>
            }
        </div>);
    }
}

export default ProfileStatus;