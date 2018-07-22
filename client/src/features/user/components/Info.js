import React from 'react';

const Info = (props) => {
	return (
		<li>
			<a href={props.html_url} target="_blank">
				{props.name}
			</a>
		</li>
	)
}

export default Info;
