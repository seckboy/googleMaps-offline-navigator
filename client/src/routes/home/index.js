import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Sign in</h1>
				<form action="/showMap">
                <p>Email: <input type="text" name="email"/></p>
                <p>Password: <input type="password" name="password"/></p>
                <p><input type="submit" value="Sign In"/></p>
				</form>
                <p><a href="/register">register</a></p>
                <p><a href="/forgotPassword">forgot password?</a></p>
			</div>
		);
	}
}
