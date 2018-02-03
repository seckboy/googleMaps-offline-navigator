import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Match from 'preact-router/match';


export default class Header extends Component {
	render() {
	    const profileHeader = [
	      '/',
          '/register',
          '/join',
          '/forgotPassword',
          '/resetPassword',
          '/profile',
        ];
            return (
                    <Match path="/register">
                        { ({ matches, path, url }) => profileHeader.includes(url) && (
                            <header class={style.header}>
                                <h1><img src="/assets/icons/mstile-150x150.png"/></h1>
                            </header>
                        ) }
                    </Match>
            );

	}
}
