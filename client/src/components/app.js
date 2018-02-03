import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import MapHeader from './mapHeader';
import Home from '../routes/home';
import Join from '../routes/join';
import ForgotPassword from '../routes/forgotPassword';
import ResetPassword from '../routes/resetPassword';
import ShowMap from '../routes/showMap';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

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
                <Header />
                <MapHeader />
				<Router onChange={this.handleRoute}>
                    <Home path="/" />
                    <Join path="/register" />
                    <ForgotPassword path="/forgotPassword" />
                    <ResetPassword path="/resetPassword" />
                    <ShowMap path="/showMap" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
