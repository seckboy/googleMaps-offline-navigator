import { h, Component } from 'preact';
import { Router } from 'preact-router';

import ForgotPassword from '../routes/forgot-password';
import Home from '../routes/home';
import Profile from '../routes/profile';
import Register from '../routes/register';
import ResetPassword from '../routes/reset-password';
import ShowMap from '../routes/show-map';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<ForgotPassword path="/forgot-password" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Register path="/register" />
					<ResetPassword path="/reset-password" />
					<ShowMap path="/show-map" />
				</Router>
			</div>
		);
	}
}
