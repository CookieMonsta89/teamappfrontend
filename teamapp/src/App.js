import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebase, { auth, provider } from "./firebase";

class App extends Component {

  state = {
    email:'jlstan06@yahoo.com',
    password:'*Football1', 
    user:null
  }

  componentDidMount() {

  }

  signIn = (e) => {
    e.preventDefault();
    console.log('admin');
    auth.signInWithEmailAndPassword(this.state.email, this.state.password) //returns promis
    .then(res => {
      console.log(res);
      axios
          .get('http://localhost:3300/users', {
            headers: { Authorization: res.user.uid }
          })
          .then(res => {
            this.setState({
              user:res.data
            })
          })
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    return (
      <div className="App">         
          <button onClick={this.signIn}>Sign In</button>
        
      </div>
    );
  }
}

export default App;
