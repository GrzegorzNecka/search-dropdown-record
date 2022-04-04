import { render, screen } from '@testing-library/react';
import React from 'react';
import StateSearch from '../StateSearch';
import { SearchStateContext } from '../../hooks/useSearchState';
import userEvent from '@testing-library/user-event';

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
    expect(menuBefore.length).toBe(0);

    //click input
    const input = screen.queryByTestId('input');
    userEvent.click(input);

    //dropdown appears
    const menuAfterClickInput = screen.queryAllByTestId('dropdown-test-menu');
    console.log('🚀 ~ file', menuAfterClickInput);
    expect(menuAfterClickInput.length).toBe(1);

    //check items count
    // const menuItems = screen.queryAllByTestId('dropdown-item-test');
    // expect(menuItems.length).toBe(3);
  });
});

//https://www.youtube.com/watch?v=ySQORayuup0&list=PLT7X0UTo8GN_nsAlEdVInoRkvE_pmLayP&index=9
//https://kentcdodds.com/blog/avoid-nesting-when-youre-testing
