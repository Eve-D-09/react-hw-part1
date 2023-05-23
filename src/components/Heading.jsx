import React, { Component } from 'react';
import User from './User';

class Heading extends Component {
    // state = {  } 
    
    render() { 
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;

        if (hours < 12) {
             timeOfDay = "morning";
        } else if (hours >= 12 && hours < 16) {
             timeOfDay = "afternoon";
        } else {
             timeOfDay = "evening";
    }

        const user = { firstName: 'Eve', lastName: 'D'};
        return (
            <>
            <div className="heading">
               <h2>Good {timeOfDay}!</h2>
               <User name={user.firstName} lastName={user.lastName}/>
            </div>
            </>
        );
    }
}
 
export default Heading;