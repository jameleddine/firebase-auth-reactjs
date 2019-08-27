import React from "react";
import firebase,{auth,providers} from '../firebaseConfig';

class Authentification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          user: null
        }
        this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  login() {
    auth.signInWithPopup(providers).then((result) => {
        console.log(result)
      this.setState({
          user: result.user
      })
    })
  }
  logout() {
    auth.signOut().then((result) => {
      this.setState({
        user: null
      })
    })
  }
    componentDidMount() {
        auth.onAuthStateChanged((user) => { this.setState({user}) })
      }
    render() {
        const { user, signOut, signInWithGoogle } = this.state;
        console.log(user)
        return (
            <div>
                {
                    user
                        ? <p>Hello, {user.displayName}</p>
                        : <p>Please sign in.</p>
                }
                {
                    user
                        ? <button onClick={this.logout}>Sign out</button>
                        : <button onClick={this.login}>Sign in with Google</button>
                }
            </div>
        )
    }

}
export default Authentification