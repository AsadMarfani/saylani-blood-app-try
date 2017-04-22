import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Home extends Component {
    
    render() {
        return (
            <div>
                <h1>
                    Home page
                </h1>
                    <br /><hr/>
                    Email ID: <b>{this.props.authUser.email}</b>
                    <br /><hr/>
                    Username: <b>{this.props.authUser.name}</b>
            </div>
        )
    }
}

var mapStatetoProps = (state) => {
   return {
        authUser: state.authUser
    }
}


export default connect(mapStatetoProps)(Home);
