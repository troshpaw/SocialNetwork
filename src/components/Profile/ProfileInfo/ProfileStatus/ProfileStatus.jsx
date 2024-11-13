import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.status
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.userStatus);
    }

    onStatusChange = (e) => {
        this.setState({ userStatus: e.target.value })
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
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
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;