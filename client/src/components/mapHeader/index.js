import { h, Component } from 'preact';
import style from './style';
import Match from 'preact-router/match';

export default class MapHeader extends Component {
    render() {
        const profileHeader = [
            '/showMap',
        ];
        return (
            <Match path="/register">
                { ({ matches, path, url }) => profileHeader.includes(path) && (
                    <header class={style.header}>
                        <nav>
                            <input type="text" name="search"/> <input type="submit" value="Search"/>
                            <a href="/">Sign out</a>
                        </nav>
                    </header>
                ) }
            </Match>
        );

    }
}
