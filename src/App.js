import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TechNews from './components/TechNews';
import Menu from './svg/menu.png';
import { useSwipeable } from 'react-swipeable';
import './styles/App.css';
import EducationalNews from './components/Educational';
import SportsNewsComponent from './components/Sports';

export default function App() {
	const [open, setOpen] = React.useState(false);
	const [size, setSize] = React.useState(window.screen.width);
	function setopen() {
		setOpen(!open);
	}

	React.useEffect(() => {
		console.log('width', size);
	}, [size]);

	const handlers = useSwipeable({
		onSwipedRight: () => setOpen(!open),
		onSwipedLeft: () => setOpen(!open),
	});
	return (
		<Router>
			<div
				{...handlers}
				className='App'
				style={{ display: 'flex', height: '100vh' }}>
				<div onClick={setopen} className={open === true ? 'open' : 'closed'}>
					{open === false && (
						<img
							src={Menu}
							onClick={setopen}
							alt='menu icon'
							style={{ width: '100%' }}
						/>
					)}
					{open === true && (
						<div className='container_sidebar'>
							<div>
								<ul className='list-group'>
									<li>
										<Link class='link' to='/home'>
											Home
										</Link>
									</li>
									<li>
										<Link class='link' to='/tech'>
											Tech News
										</Link>
									</li>
									<li>
										<Link class='link' to='/sports'>
											Sports News
										</Link>
									</li>
									<li>
										<Link class='link' to='/education'>
											Educational News
										</Link>
									</li>
									<li>
										<Link class='link' to='/business'>
											Business News
										</Link>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
				<div class='main'>
					<Switch>
						<Route path='/home'>
							<Home />
						</Route>
						<Route path='/tech'>
							<TechNews />
						</Route>
						<Route path='/education'>
							<EducationalNews />
						</Route>
						<Route path='/sports'>
							<SportsNewsComponent />
						</Route>
						<Route exact path='/'>
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
