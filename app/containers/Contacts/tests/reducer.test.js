
import { fromJS } from 'immutable';
import contactsReducer from '../reducer';

describe('contactsReducer', () => {
  it('returns the initial state', () => {
    expect(contactsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
