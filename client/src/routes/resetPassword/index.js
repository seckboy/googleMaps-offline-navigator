import { h, Component } from 'preact';
import style from './style';

export default class ResetPassword extends Component {
    render() {
        return (
            <div class={style.home}>
                <h1>Reset password</h1>
                <form action="/showMap">
                <p>Email: <input type="text" name="email"/></p>
                <p>Current password: <input type="password" name="current_password"/></p>
                <p>New password: <input type="password" name="password"/></p>
                <p>Verify password: <input type="password" name="verify_password"/></p>
                    <p><input type="submit" value="Reset Password"/></p>
                </form>
                <p><a href="/register">Register</a></p>
                <p><a href="/">Sign in</a></p>
            </div>
        );
    }
}
