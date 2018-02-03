import { h, Component } from 'preact';
import style from './style';

export default class ShowMap extends Component {
    render() {
        return (
            <div class={style.map}>
                <img src="/assets/samplemap.png"/>
            </div>
        );
    }
}
