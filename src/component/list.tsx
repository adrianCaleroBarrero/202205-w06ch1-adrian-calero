import { SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chapters } from '../localStore/localStore';
import { HttpStorecharacters } from '../services/api';
import * as ac from '../reducer/got/action.creators';
import { ChapterModel, iChapter } from '../models/got';
import { Card } from './card';

export function List() {
  const characters = useSelector((state) => state as iChapter[]);
  const api = new HttpStorecharacters();
  const dispatch = useDispatch();

  useEffect(() => {
    api.getAllcharacters().then((resp) => {
      dispatch(ac.loadGotAction(resp));
    });
  }, [dispatch]);

  return (
    <>
      <ul>
        {characters.length &&
          characters.map((character) => <Card character={character} />)}
      </ul>
    </>
  );
}
