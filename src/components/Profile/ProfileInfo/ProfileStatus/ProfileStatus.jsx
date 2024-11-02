import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: null
    }

    activateEditMode = () => {
        // this.state.editMode = true
        this.setState({
            editMode: true,
            userStatus: this.props.status
        });
    }

    deactivateEditMode = () => {
        // this.state.editMode = false
        this.setState({ editMode: false });
    }

    // componentDidMount() {
    //     console.log(this.props.updateStatus);
    // }

    updateLocalUserStatus = (e) => {
        let status = e.target.value;
        this.setState({ userStatus: status })
    }

    updateServerUserStatus = (status) => {
        this.props.updateStatus(status);
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        {/* <input onChange={this.updateLocalUserStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus} /> */}
                        <input onChange={this.updateLocalUserStatus} autoFocus={true} value={this.state.userStatus} />
                        <button onClick={this.deactivateEditMode}>Отменить</button>
                        <button onClick={() => { this.updateServerUserStatus(this.state.userStatus); this.deactivateEditMode() }}>Сохранить</button>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;