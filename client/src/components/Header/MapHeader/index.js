import { h, Component } from 'preact';

export default class MapHeader extends Component {
    render() {
        return (
            <header>
                <div>
                    Search: <input/>
                    <input type="submit"/>
                </div>
            </header>
        );
    }
}
