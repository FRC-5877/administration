
import { fromJS } from 'immutable';
import mailReducer from '../reducer';

describe('mailReducer', () => {
  it('returns the initial state', () => {
    expect(mailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
