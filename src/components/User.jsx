import React, { Component } from 'react';

class User extends Component {
    // state = {  } 
    
    render() { 
        return (
            <p>{this.props.name},{this.props.lastName}</p>
        );
    }
}
 
export default User;