import React from "react";
import firebaseApp, { auth } from '../firebaseConfig';



const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class FormLogin extends React.Component {
    componentDidMount() {
        auth.onAuthStateChanged((user) => { this.setState({user}) })
      }
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    doSignInWithEmailAndPassword = (email, password) =>
        auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => auth.signOut();


    onSubmit = event => {
        const { email, password } = this.state;
        this.doSignInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response)
                this.setState({ ...INITIAL_STATE });
                // this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    render() {
        const { email, password, error,user } = this.state;
        const isInvalid = password === '' || email === '';
        console.log(user)
        return (
            <div>
                {user ? <p>{user.email}</p> :
                    <div>
                        <input name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Password"
                        />

                    </div>
                }

                {user ? <button onClick={this.doSignOut}>Sign out</button> : <button disabled={isInvalid} onClick={this.onSubmit}>
                    Sign In
                 </button>}
                {error && <p>{error.message}</p>}
            </div>

        )
    }
}


export default FormLogin;
