import { chapters } from '../localStore/localStore';

export function List() {
  return (
    <>
      <ul>
        {chapters.map((item) => (
          <li key={item.id}>
            <p>{`nombre: ${item.name} y su edad: ${item.age}`}</p>
            <p>{`De la familia: ${item.family} y su profesion es: ${item.type}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
