import React from 'react';
import Entry from './Entry';

const EntryList = ({ entries }) => {
	const entryList = entries.map(entry => {
		return <Entry key={entry.id} {...entry} />;
	});
	return <div className="addressList">{entryList}</div>;
};

export default EntryList;
