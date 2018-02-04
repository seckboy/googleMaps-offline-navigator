import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Match } from 'preact-router/match';

import GoogleMap from './GoogleMap';
import MapHeader from './Header/MapHeader';
import NonMapHeader from './Header/NonMapHeader';
import Home from '../routes/home';
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

    /** Gets called in Match tag.
     *	@param {string} path
     *	@param {string} event.url	The newly routed URL
     */
	getHeader = path => {
        const mapHeader = [
            '/showMap',
        ];
        return mapHeader.includes(path) ? <MapHeader/> : <NonMapHeader/>;
	}

	render() {
		return (
			<div id="app">
                <Match path="/">
                    {({matches, path, url}) => (
                        this.getHeader(path)
                    ) }
                </Match>
				<Router onChange={this.handleRoute}>
                    <Home path="/" />
                    <GoogleMap path="/showMap" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
