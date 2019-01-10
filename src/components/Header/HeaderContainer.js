import React from 'react';
import { connect } from 'react-redux';
import { text_filter } from './actions';
import Header from './Header';

const mapStateToProps = state => ({
	// filter: state.filter,
	filter: state.addressfilter,
});

const mapDispatchToProps = dispatch => ({
	textFilter: text => dispatch(text_filter(text)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
