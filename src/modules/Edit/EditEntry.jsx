import React from 'react';
import AddressForm from '../../components/Form';

const Edit = props => {
	const { editEntry, removeEntry, lastname, firstname, history } = props;
	const { id } = props.match.params;

	const handleEditEntry = newEntry => {
		editEntry(id, newEntry);
	};

	const handleDeleteEntry = () => {
		removeEntry(id);
	};
	return (
		<div className="addressContent">
			<AddressForm
				onSubmit={handleEditEntry}
				onDelete={handleDeleteEntry}
				lastname={lastname}
				firstname={firstname}
				btnName="Update"
				history={history}
			/>
		</div>
	);
};

export default Edit;
