import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { text_filter } from '../actions/addressfilter_actions';

const AddressHeader = ({ filter, dispatch }) => {
    const onSearchHandle = e => {
        const text = e.target.value;
        dispatch(text_filter(text));
    };

    return (
        <header className="addressList_header">
            <span className="header__title">Address Book</span>
            <span>
                <Link className="createNew" to="/create" type="button">
                    <button> + </button>
                </Link>
            </span>
            <span>
                <input
                    type="search"
                    placeholder="Search"
                    value={filter.text}
                    onChange={onSearchHandle}
                />
            </span>
        </header>
    );
};

const mapStateToProps = state => ({
    filter: state.addressfilter
});

export default connect(mapStateToProps)(AddressHeader);
