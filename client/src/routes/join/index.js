import { h, Component } from 'preact';
import style from './style';
import Header from '../../components/header';
export default class Join extends Component {
    render() {
        return (
            <div class={style.home}>
                <h1>Join</h1>
                <form action="/showMap">
                <p>Email: <input type="text" name="email"/></p>
                <p>Password: <input type="password" name="password"/></p>
                <p>Verify password: <input type="password" name="verify_password"/></p>
                <p><input type="submit" value="Sign In"/></p>
                </form>
                <p>Already have an account?</p>
                <p><a href="/">Sign in</a></p>
                <p><a href="/forgotPassword">forgot password?</a></p>
            </div>
        );
    }
}
