import React from 'react';
import './style.css';

export default function NewsCardComponent1(props) {
	const regex = /"(https:\/\/lh3\.googleusercontent\.com\/[props.image]*)"/g;
	function extractPhotos() {
		const links = [];
		let match;
		while ((match = regex.exec(props.image))) {
			links.push(match[1]);
		}
		console.log(links, 'link');
	}
	React.useEffect(() => {
		extractPhotos();
	}, []);
	return (
		<>
			<div className='newsCard'>
				<img src={props.image} alt='Image Loading error' />
				<div className='news'>
					{props.shortnews && <h6 className='heading'>{props.news}</h6>}
					{!props.shortnews && <h6 className='heading'>{props.news}</h6>}
					<p className='summary'>{props.shortnews}</p>
					<a className='a_link' href={props.link} target='_blank'>
						Source
					</a>
				</div>
			</div>
		</>
	);
}
