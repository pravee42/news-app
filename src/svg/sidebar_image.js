export default function SideBarImage() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			// xmlns:xlink='http://www.w3.org/1999/xlink'
			width='59.6'
			height='830'
			viewBox='0 0 59.6 830'>
			<defs>
				<radialGradient
					id='radial-gradient'
					cx='0.5'
					cy='0.5'
					r='1.001'
					gradientTransform='matrix(0.866, -0.499, 0.499, 0.866, -0.183, 0.317)'
					gradientUnits='objectBoundingBox'>
					<stop offset='0' stop-color='#1d0782' />
					<stop offset='1' stop-color='#0f0441' />
				</radialGradient>
				<filter
					id='Path_1'
					x='0.44'
					y='367'
					width='59.16'
					height='95.875'
					filterUnits='userSpaceOnUse'>
					<feOffset dy='3' input='SourceAlpha' />
					<feGaussianBlur stdDeviation='3' result='blur' />
					<feFlood flood-opacity='0.161' />
					<feComposite operator='in' in2='blur' />
					<feComposite in='SourceGraphic' />
				</filter>
				<filter
					id='Rectangle_4'
					x='0'
					y='0'
					width='28'
					height='830'
					filterUnits='userSpaceOnUse'>
					<feOffset dy='3' input='SourceAlpha' />
					<feGaussianBlur stdDeviation='3' result='blur-2' />
					<feFlood flood-opacity='0.161' />
					<feComposite operator='in' in2='blur-2' />
					<feComposite in='SourceGraphic' />
				</filter>
			</defs>
			<g
				id='Component_1_1'
				data-name='Component 1 – 1'
				transform='translate(9 6)'>
				<g transform='matrix(1, 0, 0, 1, -9, -6)' filter='url(#Path_1)'>
					<path
						id='Path_1-2'
						data-name='Path 1'
						d='M10.131,0a38.469,38.469,0,1,1,0,76.938c-3.952,0,2.458,2.109,0,0-5.186-3.354,0-19.565,0-36.859,0-15.169-2.108-26.877,0-35.01C10.176,3.772,4.055,0,10.131,0Z'
						transform='translate(2 373)'
						fill='url(#radial-gradient)'
					/>
				</g>
				<g transform='matrix(1, 0, 0, 1, -9, -6)' filter='url(#Rectangle_4)'>
					<rect
						id='Rectangle_4-2'
						data-name='Rectangle 4'
						width='10'
						height='812'
						transform='translate(9 6)'
						fill='#1d0782'
					/>
				</g>
			</g>
		</svg>
	);
}
