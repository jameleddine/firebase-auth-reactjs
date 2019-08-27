import React from "react";

import firebase, { auth, providers } from '../firebaseConfig';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class FormInscription extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      ...INITIAL_STATE
    }

  }


  componentDidMount() {
    auth.onAuthStateChanged((user) => { console.log(user); this.setState({ user }) })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);


  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const {
      user,
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div>
        Please SignUP
            <br></br>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button onClick={this.onSubmit} disabled={isInvalid}>Sign Up</button>
        {error && <p>{error.message}</p>}
      </div>

    )
  }
}
export default FormInscription