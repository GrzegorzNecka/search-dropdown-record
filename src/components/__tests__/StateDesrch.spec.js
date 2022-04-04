import { render } from '@testing-library/react';
import React from 'react';
import StateSearch from '../StateSearch';
import { SearchStateContext } from '../../hooks/useSearchState';

describe('StateSearch', () => {
  it('dropdown list - shown on click input and hide on select', () => {
    render(
      <SearchStateContext.Provider value={{ query: '' }}>
        <StateSearch />
      </SearchStateContext.Provider>,
    );
  });
});
