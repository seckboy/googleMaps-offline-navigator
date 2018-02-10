import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import NonMapHeader from '../../components/Header/NonMapHeader';
import style from './style';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

export default class Home extends Component {
	render() {
		return (
			<div>
				<NonMapHeader/>
				<h1>Home</h1>
				<form action="/show-map">
					<div>
						<TextField label="Email" name="email"/>
					</div>
					<div>
						<TextField label="Password" name="password" type="password"/>
					</div>
					<Button unelevated className="mdc-theme--primary-bg">
						Sign In
					</Button>
					<br/>
					<br/><Link activeClassName={style.active} href="/register">register</Link>
					<br/><Link activeClassName={style.active} href="/forgot-password">forgot password?</Link>
				</form>
			</div>
		);
	}
}
