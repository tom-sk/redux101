import React, { Component } from 'react';
import timezone from '../data/timezones';
import axios from 'axios';
import propTypes from 'prop-types';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation:'',
            timezone:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        this.props.userSignupRequest(this.state);
    }
    render(){
        const options = Object.keys(timezone).map(function(val){
      return (
        <option key={timezone[val]} value={timezone[val]}>{val}</option>
      )
    })
        return (
            <div className="">
                <form action=""  onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">User Name</label>
                        <input 
                            value={this.state.username} 
                            type="text" 
                            name='username' 
                            onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input 
                            value={this.state.email} 
                            type="text" 
                            name='email' 
                            onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input 
                            value={this.state.password} 
                            type="text" 
                            name='password' 
                            onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="">Password Confirmation</label>
                        <input 
                            value={this.state.passwordConfirmation} 
                            type="text" 
                            name='passwordConfirmation' 
                            onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="">Time Zone</label>
                        <select 
                            value={this.state.timezone} 
                            type="text" 
                            name='timezone' 
                            onChange={this.onChange} >
                            <option value="" disabled>
                                Choose Time Zone
                            </option>
                            {options}
                            </select>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>

            </div>
        )
    }
}

Form.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}