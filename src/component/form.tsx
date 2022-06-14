import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChapterModel } from '../models/got';
import * as ac from '../reducer/got/action.creators';
import { HttpStorecharacters } from '../services/api';

export function Form() {
  const api = new HttpStorecharacters();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    family: '',
    type: '',
  });

  function handlerOnSubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    const newCharacter = {
      ...new ChapterModel(
        formData.name,
        formData.age,
        formData.family,
        formData.type
      ),
    };
    api.addcharacter(newCharacter).then((resp) => {
      dispatch(ac.addGotAction(newCharacter));
      setFormData({
        name: '',
        age: '',
        family: '',
        type: '',
      });
    });
  }
  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    setFormData({ ...formData, [element.name]: element.value });
  }
  return (
    <form action="" onSubmit={handlerOnSubmit}>
      <label>
        ¿Cuál es el nombre del personaje?
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(ev) => handleChange(ev)}
        />
      </label>
      <label>
        ¿Edad?
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={(ev) => handleChange(ev)}
        />
      </label>
      <label>
        ¿Familia a la que pertenece?
        <select
          name="family"
          value={formData.family}
          onChange={(ev) => handleChange(ev)}
        >
          <option value="none">ninguna</option>
          <option value="Lannister">Lannister</option>
          <option value="Targaryen">Targaryen</option>
          <option value="Stark">Stark</option>
          <option value="Baratheon">Baratheon</option>
          <option value="Tyrell">Tyrell</option>
        </select>
      </label>
      <label>
        ¿Tipo de personaje?
        <select
          name="type"
          value={formData.type}
          onChange={(ev) => handleChange(ev)}
        >
          <option value="👑">👑</option>
          <option value="🔪">🔪</option>
          <option value="🛡️">🛡️</option>
          <option value="🎓">🎓</option>
        </select>
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}
