import React from 'react';
import { connect } from 'react-redux';
import getVisibleEntries from '../../selectors/addressBook';
import EntryList from './EntryList';

const mapStateToProps = state => (
	console.log('home', state),
	{
		// entries: getVisibleEntries([...state.add, ...state.edit], state.filter),
		entries: getVisibleEntries(state.addressbook, state.addressfilter),
	}
);

export default connect(mapStateToProps)(EntryList);
