import React, {useEffect} from "react";
import './style.css';

export default function SharedNewsCardComponent(props) {
	return (
		<div className="newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded">
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
		<div className='d-flex justify-content-start d-grid gap-3' 
			style={{ width: '50%' }}>
			<a className='btn btn-outline-primary' rel='noreferrer'
				href={props.source}
				target='_blank'>
				Source
			</a>
			<button
				className='btn btn-outline-primary space'>
					Add to Bookmark
			</button>
		</div>
		</div>
		</div>
	)	
}

