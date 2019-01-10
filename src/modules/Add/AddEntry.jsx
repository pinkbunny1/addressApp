import React from 'react';
import Form from '../../components/Form';

const AddEntry = props => {
	const { createEntry, history } = props;

	return (
		<div className="addressContent">
			<Form onSubmit={createEntry} btnName="Create" history={history} />
		</div>
	);
};

export default AddEntry;
