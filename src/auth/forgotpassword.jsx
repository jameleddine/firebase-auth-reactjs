import React from "react";
import firebase, { auth, providers } from '../firebaseConfig';

const INITIAL_STATE = {
    email: '',
    error: null,
  };
class Forgot extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE };


    }
    onSubmit = event => {
        const { email } = this.state;
        auth.sendPasswordResetEmail(email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
          })
          .catch(error => {
            this.setState({ error });
          });
        event.preventDefault();
      };
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    componentDidMount() {
        auth.onAuthStateChanged((user) => { this.setState({ user }) })
    }
    render() {
        const { email, error } = this.state;
        const isInvalid = email === '';
        return (
            <div>
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <button disabled={isInvalid} onClick={this.onSubmit}>
                        Reset My Password
        </button>
                    {error && <p>{error.message}</p>}
            </div>
        )
    }

}
export default Forgot