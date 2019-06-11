import React from 'react';
//import {Route} from 'react-router-dom';
import axios from 'axios';
import {getData} from '../actions'
import {connect} from 'react-redux';

class Users extends React.Component {
   constructor() {
       super();
      
   }

   componentDidMount() {
   
        this.props.getData(this.props.credentials)
        
      
   }
    render() {
        return (
            <div>{this.props.users.map(user =>
                 <h1>{user.username}</h1>)}
                 </div>
          
           
        )
    }
    
}

const mapStateToProps = (state) => ({
    credentials: state.credentials,
    users: state.users
})

export default connect(mapStateToProps,{getData})(Users)