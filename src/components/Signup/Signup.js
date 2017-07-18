import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
class Signup extends Component{
    render(){
        const { userSignupRequest } = this.props;
        return (
            <div className="container">
                <h1>Sign Up</h1>
                <Form userSignupRequest={userSignupRequest} />
            </div>
        )
    }
}

Signup.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(Signup);