import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChapterModel } from '../models/got';
import * as ac from '../reducer/got/action.creators';

export function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    family: '',
    type: '',
  });

  function handlerOnSubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    console.log('Guardado' + formData);
    dispatch(
      ac.addGotAction(
        new ChapterModel(
          formData.name,
          formData.age,
          formData.family,
          formData.type
        )
      )
    );
  }
  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    console.log(element.name, element.value);
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
          <option value="Rey">👑</option>
          <option value="Asesino">🔪</option>
          <option value="Escudero">🛡️</option>
          <option value="Asesor">🎓</option>
        </select>
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
