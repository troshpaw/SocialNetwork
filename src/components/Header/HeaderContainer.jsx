import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
// import { authAPI } from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let { id, email, login } = response.data.data;
        //             this.props.setAuthUserData(id, email, login);
        //         }
        //     })

        // authAPI.auth()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             let { id, email, login } = data.data;
        //             this.props.setAuthUserData(id, email, login);
        //         }
        //     })

        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);