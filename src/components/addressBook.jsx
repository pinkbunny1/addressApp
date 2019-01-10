import React from 'react';
import { connect } from 'react-redux';
import getVisibleEntries from '../selectors/addressBook';
import AddressBookNameBox from './addressBookNameBox';

class AddressBook extends React.Component {
    showlist = () => {
        const { entries } = this.props;
        if (entries.length === 0) {
            return <h3>No entries found...</h3>;
        }
        return entries.map(({ firstname, lastname, id }) => (
            <AddressBookNameBox
                key={id}
                firstname={firstname}
                lastname={lastname}
                id={id}
            />
        ));
    };

    render() {
        return (
            <div className="addressList">
                <div>{this.showlist()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    entries: getVisibleEntries(state.addressbook, state.addressfilter)
});

export default connect(mapStateToProps)(AddressBook);
