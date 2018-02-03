import { h, Component } from 'preact';
import style from './style';

export default class ForgotPassword extends Component {
    render() {
        return (
            <div class={style.home}>
                <h1>Forgot Password</h1>
                <p>We'll email you</p>
                <form action="/resetPassword">
                <p>Email: <input type="text" name="email"/></p>
                <p><input type="submit" value="Email Temporary Password"/></p>
                </form>
                <p><a href="/register">register</a></p>
                <p><a href="/">sign in</a></p>
            </div>
        );
    }
}
