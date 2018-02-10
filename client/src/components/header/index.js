import {h, Component} from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Button/style.css';

export default class Header extends Component {
	constructor(){
		super();

		this.state = {
			drawerOpened : false
		};
	}
	render(){
		return (
			<div>
				<Button onClick={() => {
					this.setState({
						drawerOpened: !this.state.drawerOpened
					})
				}}
				>
					Menu
				</Button>
				<Drawer.TemporaryDrawer open={this.state.drawerOpened} onClose={() => {
					this.setState({
						drawerOpened: false
					});
				}}
				>
					<Drawer.DrawerHeader className="mdc-theme--primary-bg">
						Components
					</Drawer.DrawerHeader>
					<Drawer.DrawerContent>
						<List>
							<List.LinkItem>
								<List.ItemIcon>home</List.ItemIcon>
								<Link activeClassName={style.active} href="/" onClick={() => {
									this.setState({
										drawerOpened: false
									});
								}}>home</Link>
							</List.LinkItem>
							<List.LinkItem>
								<List.ItemIcon>profile</List.ItemIcon>
								<Link activeClassName={style.active} href="/profile" onClick={() => {
									this.setState({
										drawerOpened: false
									});
								}}>my profile</Link>
							</List.LinkItem>
						</List>
					</Drawer.DrawerContent>
				</Drawer.TemporaryDrawer>
			</div>
		);
	}
}