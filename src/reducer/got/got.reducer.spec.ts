import { ChapterModel, iChapter } from '../../models/got';
import { gotReducer } from './got.reducer';
import * as ac from './action.creators';

describe('Given the function gotReducer', () => {
  const mockreducer: ChapterModel = {
    id: 1,
    name: 'pepe',
    age: 30,
    family: 'Lannister',
    type: '🔪',
  };
  describe('When i use gotLoad', () => {
    test('Then it should load the character', () => {
      const initialState: iChapter[] = [];

      const newState = gotReducer(
        initialState,
        ac.loadGotAction([mockreducer])
      );

      expect(newState).toHaveLength(1);
      expect(newState).toStrictEqual([mockreducer]);
    });
  });
  describe('When i use gotModify', () => {
    test('Then it should modify the character', () => {
      const initialState: iChapter[] = [mockreducer];
      const updatemock = { ...mockreducer, name: 'test' };

      const newState = gotReducer(initialState, ac.modifyGotAction(updatemock));

      expect(newState).toHaveLength(1);
      expect(newState).toStrictEqual([updatemock]);
    });
  });
  describe('When i use gotDelete', () => {
    test('Then it should be delete the character', () => {
      const initialState: iChapter[] = [mockreducer];

      const newState = gotReducer(
        initialState,
        ac.deleteGotAction(mockreducer)
      );

      expect(newState).toHaveLength(0);
    });
  });
  describe('When i use gotAdd', () => {
    test('Then it should add the character', () => {
      const initialState: iChapter[] = [mockreducer];
      const addMock = { ...mockreducer, name: 'test', id: 2 };

      const newState = gotReducer(initialState, ac.addGotAction(addMock));

      expect(newState).toHaveLength(2);
      expect(newState).toStrictEqual([mockreducer, addMock]);
    });
  });
});
