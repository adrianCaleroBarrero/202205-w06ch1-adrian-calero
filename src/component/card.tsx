import { useDispatch } from 'react-redux';
import { iChapter } from '../models/got';
import * as ac from '../reducer/got/action.creators';
import { HttpStorecharacters } from '../services/api';

export function Card({ character }: { character: iChapter }) {
  const api = new HttpStorecharacters();
  const dispatch = useDispatch();

  const handleClick = (character: iChapter) => {
    api.removecharacter(character).then((resp) => {
      dispatch(ac.deleteGotAction(character));
    });
  };
  return (
    <li key={character.id}>
      <p>{`nombre: ${character.name} y su edad: ${character.age}`}</p>
      <p>{`De la familia: ${character.family} y su profesion es: ${character.type}`}</p>
      <button onClick={() => handleClick(character)}>Borrar</button>
    </li>
  );
}
