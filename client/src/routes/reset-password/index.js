import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import NonMapHeader from '../../components/Header/NonMapHeader';
import style from './style';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

export default class ResetPassword extends Component {
	render() {
		return (
			<div>
				<NonMapHeader/>
				<h1>We sent you a temporary password. Please change it below:</h1>
				<form action="/show-map">
					<div>
						<TextField label="Email" name="email"/>
					</div>
					<div>
						<TextField label="Temporary Password" name="password" type="password"/>
					</div>
					<div>
						<TextField label="New Password" name="new_password" type="password"/>
					</div>
					<div>
						<TextField label="Confirm New Password" name="confirm_password" type="password"/>
					</div>
					<Button unelevated className="mdc-theme--primary-bg">
						Join
					</Button>
				</form>
				<br/><Link activeClassName={style.active} href="/">sign in</Link>
				<br/><Link activeClassName={style.active} href="/forgot-password">forgot password?</Link>
			</div>
		);
	}
}
