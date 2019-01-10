import React from 'react';
import { connect } from 'react-redux';
import AddEntry from './AddEntry';
import { createEntry } from './actions';

const mapDispatchToProps = dispatch => ({
	createEntry: newEntry => dispatch(createEntry(newEntry)),
});

export default connect(
	undefined,
	mapDispatchToProps
)(AddEntry);
