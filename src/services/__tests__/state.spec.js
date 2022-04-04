import { getState, searchStates } from '../state';
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

describe('searchStates', () => {
  it('returns AL, AK for query: al, key: state', () => {
    expect(searchStates('al', 'state', testStates)).toEqual([
      {
        state: 'Alabama',
        code: 'AL',
      },
      {
        state: 'Alaska',
        code: 'AK',
      },
    ]);
  });

  it('returns Aempty array for query: empty string, key: state', () => {
    expect(searchStates('', 'state', testStates)).toEqual([]);
  });
});
