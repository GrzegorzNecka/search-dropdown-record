import { getState } from '../state';
import states from './../states.json';

const testStates = [
  {
    state: 'Alabama',
    code: 'AL',
  },
  {
    state: 'Alaska',
    code: 'AK',
  },
  {
    state: 'Arizona',
    code: 'AZ',
  },
  {
    state: 'California',
    code: 'CA',
  },
];

describe('getState', () => {
  it('returns California for ca', () => {
    expect(getState('CA', testStates)).toEqual({
      state: 'California',
      code: 'CA',
    });
  });

  it('returns undefined for empty string', () => {
    expect(getState('', testStates)).toEqual(undefined);
  });
});
