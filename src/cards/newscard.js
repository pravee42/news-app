import React from 'react';
import axios from 'axios';
import './style.css';
import {toastContainer, toast} from 'react-toastify';

export default function NewsCardComponent(props) {
	const add_to_bookmark = async (news, source, image) => {
		let email = localStorage.getItem('user');
		let responseData = await {
			email,
			news,
			source,
			image,
		};
		await axios
			.post('https://newsapi-abipravi.herokuapp.com/bookmark', responseData)
			.then((res) => {
				alert('Added to Bookmard');
			});
	};

	return (
		<>
			<div className='newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded '>
				<img
					src={props.image}
					lazy
					alt={'Loading error'}
					style={{ maxHeight: 100, width: 150 }}
					className='img-thumbnail'
				/>
				<div className='news'>
					{props.shortnews && <h6 className='heading '>{props.news}</h6>}
					{!props.shortnews && <h6 className='heading'>{props.news}</h6>}
					<p className='summary text-muted'>{props.shortnews}</p>
					<div
						className='d-flex justify-content-start d-grid gap-3'
						style={{ width: '50%' }}>
						<a
							className='btn btn-outline-primary'
							rel='noreferrer'
							href={props.link}
							target='_blank'>
							Source
						</a>
						<button
							onClick={() =>
								add_to_bookmark(props.news, props.link, props.image)
							}
							className='btn btn-outline-primary space'>
							Add to Bookmark
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
