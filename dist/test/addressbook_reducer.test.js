import { addressbook } from '../reducers';
import { createEntry, editEntry, removeEntry } from '../actions/addressbook_actions';
import expect from 'expect';
var fakeEntry = {
    firstname: 'Jin',
    lastname: 'Lee'
};
describe('Address book add/edit/remove entry reducer', function () {
    it('can create a new entry', function () {
        var currentState = [];
        var newState = addressbook(currentState, createEntry(fakeEntry));
        expect(newState[0].firstname).toEqual(fakeEntry.firstname);
        expect(newState[0].lastname).toEqual(fakeEntry.lastname);
    });
    it('can edit existing entry', function () {
        var currentState = addressbook([], createEntry(fakeEntry));
        var id = currentState[0].id;
        var editedEntryData = {
            firstname: 'Jane',
            lastname: 'Leen'
        };
        var newState = addressbook(currentState, editEntry(id, editedEntryData));
        expect(newState[0].id).toEqual(id);
        expect(newState[0].firstname).toEqual(editedEntryData.firstname);
        expect(newState[0].lastname).toEqual(editedEntryData.lastname);
    });
    it('can remove existing entry', function () {
        var currentState = addressbook([], createEntry(fakeEntry));
        var id = currentState[0].id;
        var newState = addressbook(currentState, removeEntry(id));
        expect(newState).toEqual([]);
    });
});
//# sourceMappingURL=addressbook_reducer.test.js.map