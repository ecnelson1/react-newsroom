import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from '../containers/NewsSearch';

require('dotenv').config();

describe('NewsSearch Container', () => {
  it('displays a list of Articles that update by keyword search', async () => {
    render(<NewsSearch />);

    screen.getByText('LOADING...');

    const ul = await screen.findByRole('list', { name: 'articles-list' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('Search')
    userEvent.type(input, 'bitcoin');

    const ButtonClick = await screen.findByRole('button', {
      name: 'Submit',
    });
    userEvent.click(ButtonClick);

    return waitFor(() => {
      const articles = screen.getAllByText('bitcoin', { exact: false });
      expect(articles).toHaveLength(38);
    });
  });
});
