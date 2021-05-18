import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import NewsSearch from '../containers/NewsSearch';



const keyword = 'El Duderino'
jest.mock('../services/NewsAPI', () => ({
  getArticles: () => [{
    author: 'El Duderino',
    title: 'Living Like Lebowski',
    description: 'Tao of Dude',
    url: 'dudeism.com',
  }],
  getArticleByKeyword: (keyword) =>[{
    author: 'El Duderino',
    title: 'Living Like Lebowski',
    description: 'Tao of Dude',
    url: 'dudeism.com',
  }] 
}))

describe('NewsSearch Container', () => {
  it('displays a list of Articles that update by keyword search', async () => {
    render(<NewsSearch />);

    screen.getByText('LOADING...');

    const ul = await screen.findByRole('list', { name: 'articles-list' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('Search')
    fireEvent.type(input, 'Dude');

    const ButtonClick = await screen.findByRole('button', {
      name: 'Submit',
    });
    fireEvent.click(ButtonClick);

    return waitFor(() => {
      const articles = screen.getByText('El Duderino', { exact: true});
      expect(articles).toBeInTheDocument();
    });
  });
});
