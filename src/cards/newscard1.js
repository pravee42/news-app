import React from 'react';
import './style.css';

export default function NewsCardComponent1(props) {
	return (
		<>
			<div className='newsCard'>
				<img src={props.image} lazy alt='Loading error' />
				<div className='news'>
					{props.shortnews && <h6 className='heading'>{props.news}</h6>}
					{!props.shortnews && <h6 className='heading'>{props.news}</h6>}
					<p className='summary'>{props.shortnews}</p>
					<a
						className='a_link'
						rel='noreferrer'
						href={props.link}
						target='_blank'>
						Source
					</a>
				</div>
			</div>
		</>
	);
}
