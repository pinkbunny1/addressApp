import React from 'react';
import Form from '../../components/Form';
import {  EntryData } from './actions'

type Props = {
	firstname: string,
	lastname: string,
	onDelete(): void,
	history: any,
	onSubmit({firstname, lastname}:any): void,
	btnName: string,
	createEntry(newEntry:EntryData):void,
}

const AddEntry = (props: Props) => {
	const { createEntry, history } = props;
	return (
		<div className="addressContent">
			<Form onSubmit={createEntry} btnName="Create" history={history} {...props} />
		</div>
	);
};

export default AddEntry;
