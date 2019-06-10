import React from 'react';
//import {Route} from 'react-router-dom';
import axios from 'axios';

class Users extends React.Component {
   constructor() {
       super();
       this.state = {
           users:[]
       }
   }

   componentDidMount() {
   
        axios.get('http://localhost:5000/api/users')
        
          .then(res => {
            console.log(`hellooo ${res.data}`)
            this.setState({users: res.data.users})
          })
          .catch(err => console.log(err))
      
   }
    render() {
        return (
            <div>{this.state.users.map(zoo => <div>
                    <h1>hello</h1>
                </div>)}</div>
           
        )
    }
    
}

export default Zoos;