import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 31675 }

        this.props.getProfile(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let withRouter = (Component) => {
    return (props) => {
        const match = { params: useParams() };
        return <Component {...props} match={match} />
    }
}

let AuthRedirectComponent = withAuthNavigate(ProfileContainer);

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfile })(WithUrlDataContainerComponent);