import { addressbook } from '../reducers';
import {
    createEntry,
    editEntry,
    removeEntry
} from '../actions/addressbook_actions';
import uuid from 'uuid';
import expect from 'expect';

const fakeEntry = {
    firstname: 'Jin',
    lastname: 'Lee'
};

describe('Address book add/edit/remove entry reducer', () => {
    it('can create a new entry', () => {
        const currentState = [];
        const newState = addressbook(currentState, createEntry(fakeEntry));

        expect(newState[0].firstname).toEqual(fakeEntry.firstname);
        expect(newState[0].lastname).toEqual(fakeEntry.lastname);
    });

    it('can edit existing entry', () => {
        const currentState = addressbook([], createEntry(fakeEntry));

        const id = currentState[0].id;

        const editedEntryData = {
            firstname: 'Jane',
            lastname: 'Leen'
        };

        const newState = addressbook(
            currentState,
            editEntry(id, editedEntryData)
        );

        expect(newState[0].id).toEqual(id);
        expect(newState[0].firstname).toEqual(editedEntryData.firstname);
        expect(newState[0].lastname).toEqual(editedEntryData.lastname);
    });

    it('can remove existing entry', () => {
        const currentState = addressbook([], createEntry(fakeEntry));

        const id = currentState[0].id;

        const newState = addressbook(currentState, removeEntry(id));

        expect(newState).toEqual([]);
    });
});
