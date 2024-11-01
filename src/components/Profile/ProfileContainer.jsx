import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        // if (!userId) { userId = 31675 }
        if (!userId) { userId = 2 }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

let withRouter = (Component) => {
    return (props) => {
        const match = { params: useParams() };
        return <Component {...props} match={match} />
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus }),
    withRouter,
    withAuthNavigate
)(ProfileContainer);