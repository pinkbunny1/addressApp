import { addressfilter } from '../reducers';
import { text_filter } from '../actions/addressfilter_actions';
import expect from 'expect';
import uuid from 'uuid';
import getVisibleEntries from '../selectors/addressBook';

const fakeEntries = [
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

describe('Address book text filter reducer', () => {
    it('can set filter text to a list of addresses', () => {
        const currentState = '';
        const text = 'jin';

        const newState = getVisibleEntries(
            fakeEntries,
            addressfilter(currentState, text_filter(text))
        );

        expect(newState).toEqual([fakeEntries[3], fakeEntries[0]]);
    });
});
