
import { fromJS } from 'immutable';
import mailPageReducer from '../reducer';

describe('mailPageReducer', () => {
  it('returns the initial state', () => {
    expect(mailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
