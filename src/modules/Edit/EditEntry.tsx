import React from 'react';
import AddressForm from '../../components/Form';
import { EntryData } from '../Add'

type Props = {
	editEntry(id: string, newEntry: EntryData): void,
	removeEntry(id:string): void,
	lastname: string, 
	firstname: string, 
	history: object,
	match: any
}

const Edit = (props:Props) => {
	const { editEntry, removeEntry, lastname, firstname, history } = props;
	const { id } = props.match.params;

	const handleEditEntry = (newEntry:EntryData):void => {
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
