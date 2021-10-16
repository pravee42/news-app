import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TechNews from './components/TechNews';
import Menu from './svg/menu.svg';
import Close from './svg/x.svg';
import { useSwipeable } from 'react-swipeable';
import './styles/App.css';
import EducationalNews from './components/Educational';
import SportsNewsComponent from './components/Sports';
import SportsNewsLatestComponent from './components/SportsLatest';
import BusinessNews from './components/business';
import GoogleLoginComponent from './components/googleLogin';
import GoogleAuth from './components/googleauth';
import ViewBookmark from './components/viewbookmark';

export default function App() {
	const [open, setOpen] = useState(false);
	const [url, setUrl] = useState(window.location.pathname);
	const [user, setUser] = useState('');

	function setopen() {
		setOpen(!open);
	}

	useEffect(() => {
		setUser(localStorage.getItem('user'));
	}, [localStorage.getItem('user')]);

	const handlers = useSwipeable({
		onSwipedRight: () => setOpen(!open),
		onSwipedLeft: () => setOpen(!open),
	});

	const setURLfunction = () => {
		let path = window.location.pathname;
		if (path === '/sports') {
			setUrl('/sports/latest');
		} else if (path === '/education') {
			setUrl('');
		} else {
			setUrl('');
		}
	};

	React.useEffect(() => {
		setURLfunction();
	}, [window.location.pathname]);

	return (
		<Router>
			<div>
				{user ? (
					<div style={{ overflow: 'hidden', height: '100vh' }}>
						<div
							{...handlers}
							className='App'
							style={{ display: 'flex', height: '100vh' }}>
							<div
								onClick={setopen}
								className={open === true ? 'open' : 'closed'}>
								{open === false ? (
									<img
										src={Menu}
										onClick={setopen}
										alt='menu icon'
										style={{ width: '70%' }}
									/>
								) : (
									<div></div>
								)}
								{open === true && (
									<>
										<img
											src={Close}
											onClick={setopen}
											alt='close menu icon'
											style={{ width: 'auto', height: '5%' }}
										/>
										<div className='container_sidebar '>
											<div>
												<ul className='list-group'>
													<li>
														<Link class='btn btn-primary' to='/home'>
															Home
														</Link>
													</li>
													<li>
														<Link class='btn btn-primary' to='/tech'>
															Tech News
														</Link>
													</li>
													<li>
														<Link class='btn btn-primary' to='/sports'>
															Sports News
														</Link>
													</li>
													<li>
														<Link class='btn btn-primary' to='/education'>
															Educational News
														</Link>
													</li>
													<li>
														<Link class='btn btn-primary' to='/business'>
															Business News
														</Link>
													</li>
													<li>
														<Link class='btn btn-primary' to='/contact'>
															Feed Back Form
														</Link>
													</li>
													<li>
														<Link class='btn btn-primary' to='/bookmark'>
															My Bookmarks
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</>
								)}
							</div>
							<div class='main'>
								{url && (
									<div class='url'>
										<p>
											Go to
											<Link to={url} className='link1'>
												{url}
											</Link>
										</p>
									</div>
								)}
								<div class='news-container'>
									<Switch>
										<Route exact path='/home'>
											<Home />
										</Route>
										<Route path='/tech'>
											<TechNews />
										</Route>
										<Route path='/education'>
											<EducationalNews />
										</Route>
										<Route exact path='/googleauth'>
											<GoogleAuth />
										</Route>
										<Route exact path='/sports'>
											<SportsNewsComponent />
										</Route>
										<Route exact path='/sports/latest'>
											<SportsNewsLatestComponent />
										</Route>
										<Route exact path='/business'>
											<BusinessNews />
										</Route>
										<Route exact path='/contact'>
											<GoogleLoginComponent />
										</Route>
										<Route exact path='/bookmark'>
											<ViewBookmark />
										</Route>
										<Route exact path='/'>
											<Home />
										</Route>
									</Switch>
								</div>
							</div>
						</div>
					</div>
				) : (
					<GoogleAuth />
				)}
			</div>
		</Router>
	);
}
