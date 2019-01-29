import React from 'react';
import Entry from './Entry';
import { EntryData } from '../Add'

type Props = {
	entries: EntryData[]
}

const EntryList = ({ entries }:Props) => {
	const entryList = entries.map(entry => {
		return <Entry key={entry.id} {...entry} />;
	});
	return <div className="addressList">{entryList}</div>;
};

export default EntryList;
