import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        
        console.log(match)
        debugger
        
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);