import { render, screen } from '@testing-library/react';
import React from 'react';
import StateSearch from '../StateSearch';
import { SearchStateContext } from '../../hooks/useSearchState';

describe('StateSearch', () => {
  it('dropdown list - shown on click input and hide on select', () => {
    const testList = [{ state: 'state1' }, { state: 'state2' }, { state: 'state3' }];

    render(
      <SearchStateContext.Provider value={{ query: '', list: testList }}>
        <StateSearch />
      </SearchStateContext.Provider>,
    );

    // check there id no dropdown list render
    const menuBefore = screen.queryAllByTestId('dropdown-test-menu');
    console.log('🚀 ~ file: StateDesrch.spec.js ~ line 16 ~ it ~ menuBefore ', menuBefore);
    expect(menuBefore.length).toBe(0);
  });
});

//https://www.youtube.com/watch?v=GZVBu-Z8qVw&list=PLT7X0UTo8GN_nsAlEdVInoRkvE_pmLayP&index=8
