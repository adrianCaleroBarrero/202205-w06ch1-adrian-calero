import userEvent from '@testing-library/user-event';
import 'react-redux';
import { useDispatch } from 'react-redux';
import { ChapterModel } from '../models/got';
import { render, screen } from '../services/test-utils';
import { store } from '../store/store';
import { Card } from './card';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const character = { ...new ChapterModel('Pepe', '10', 'Lannister', '🔪') };
const preloadedState = {
  chapters: [],
};

describe('Given the component Card', () => {
  describe('When i load the component', () => {
    test('Then it should render', () => {
      render(<Card character={character} />, { preloadedState, store });

      expect(screen.getByText(/pepe/i)).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });
  });
  describe('When i click the button', () => {
    test('Then it should delete the character', async () => {
      render(<Card character={character} />, { preloadedState, store });

      userEvent.click(screen.getByText(/borrar/i));
      expect(useDispatch).toHaveBeenCalled();
    });
  });
});
