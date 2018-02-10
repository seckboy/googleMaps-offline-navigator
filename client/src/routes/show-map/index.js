import { h, Component } from 'preact';
import style from './style';
import GoogleMap from '../../components/GoogleMap';
import MapHeader from '../../components/Header/MapHeader';

export default class ShowMap extends Component {
	render() {
		return (
			<div>
				<MapHeader/>
				<GoogleMap/>
			</div>
		);
	}
}
