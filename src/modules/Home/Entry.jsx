import React from 'react';
import { Link } from 'react-router-dom';

const Entry = ({ id, firstname, lastname }) => {
	return (
		<Link className="addressList__nameBox" to={`/edit/${id}`} style={{ textDecoration: 'none' }}>
			<h4 className="addressList__nameText">
				{firstname} {lastname}
			</h4>
		</Link>
	);
};

export default Entry;
