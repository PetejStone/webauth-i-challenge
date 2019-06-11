import React from 'react';
//import {Route} from 'react-router-dom';

import {getData} from '../actions'
import {connect} from 'react-redux';

class Users extends React.Component {
  

   componentDidMount() {
       
        this.props.getData()
        
      
   }

   logout = e => {
    e.preventDefault();
    localStorage.clear()
    this.props.history.push('/')
   

   }
    render() {
        return (
            <div>
                <div>
                {this.props.users.map(user =>
                    <h1>{user.username}</h1>)}
                </div>
                <button onClick={this.logout}>Logout</button>
            </div>
          
           
        )
    }
    
}

const mapStateToProps = (state) => ({
    credentials: state.credentials,
    users: state.users
})

export default connect(mapStateToProps,{getData})(Users)