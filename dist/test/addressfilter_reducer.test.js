import { addressfilter } from '../reducers';
import { text_filter } from '../actions/addressfilter_actions';
import expect from 'expect';
import uuid from 'uuid';
import getVisibleEntries from '../selectors/addressBook';
var fakeEntries = [
    {
        id: uuid(),
        firstname: 'Jin',
        lastname: 'Lee'
    },
    {
        id: uuid(),
        firstname: 'Luke',
        lastname: 'Skywalker'
    },
    {
        id: uuid(),
        firstname: 'Jane',
        lastname: 'Smith'
    },
    {
        id: uuid(),
        firstname: 'Lee',
        lastname: 'Jin'
    },
    {
        id: uuid(),
        firstname: 'Master',
        lastname: 'Yoda'
    },
    {
        id: uuid(),
        firstname: 'Han',
        lastname: 'Solo'
    }
];
describe('Address book text filter reducer', function () {
    it('can set filter text to a list of addresses', function () {
        var currentState = '';
        var text = 'jin';
        var newState = getVisibleEntries(fakeEntries, addressfilter(currentState, text_filter(text)));
        expect(newState).toEqual([fakeEntries[3], fakeEntries[0]]);
    });
});
//# sourceMappingURL=addressfilter_reducer.test.js.map