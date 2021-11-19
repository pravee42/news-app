import React, {useState} from 'react';
import axios from 'axios';
import './style.css';
import {toast} from 'react-toastify';
import { FacebookShareButton, FacebookIcon } from "react-share"
import 'react-toastify/dist/ReactToastify.css';



export default function NewsCardComponent(props) {
	const [link, setLink] = useState("");
	const goto = () => {
		return (
				<div>
					<a href="/login">Login to add the news to Bookmark</a>
				</div>
		)
	}

	const add_to_bookmark = async (news, source, image) => {
		let email = localStorage.getItem('user');
		if (email === null || email === "loginlater") {
			toast.info(goto)
		} 
		else {
			let responseData = await {
				email,
				news,
				source,
				image,
			};
			await axios
				.post('https://newsapi-abipravi.herokuapp.com/bookmark/', responseData)
				.then((res) => {
					toast.success('Added to Bookmarked');
				}, err => console.log(responseData, "error"));
		}
	};

	const sharenews = async(news, source, image) => {
		const url = `http://127.0.0.1:8000/share/post`
		let data = await {
			news,
			source,
			image,
		};
		let id;
		await axios.post(url, data).then((res) => {
			id = res.data.id
		}, (err) => {
			console.log(err)
		})
		await toast.info(`Link Copied to clipboard`)
		await navigator.clipboard.writeText(`localhost:3000/share/${window.btoa(id)}`)
		setLink(`https://www.facebook.com/sharer/sharer.php?u=${window.location.host}/share/${window.btoa(id)}`)
	}

	return (
		<>
					<div className='newsCard border border-light shadow-sm p-3 mb-5 bg-body rounded '>
					<img
						src={props.image}
						lazy
						alt={'loading error'}
						style={{ maxHeight: 100, width: 150 }}
						className='img-thumbnail'
					/>
					<div className='news'>
						{props.shortnews && <h6 className='heading '>{props.news}</h6>}
						{!props.shortnews && <h6 className='heading'>{props.news}</h6>}
						<p className='summary text-muted'>{props.shortnews}</p>
						<div
							className='d-flex justify-content-center align-center d-grid gap-3'
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
							<svg onClick={() => sharenews(props.news, props.link, props.image)} xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="#0d6efd" class="bi bi-share-fill" viewBox="0 0 16 16">
							<path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
							</svg>
						<a href={link}><span class="bi bi-facebook" ></span></a>
						</div>
					</div>
				</div>
			</>
		);
	}
