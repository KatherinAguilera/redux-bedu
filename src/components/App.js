import React from 'react';

const App = () => {

  const ponerFilas = () => [
    <tr>
      <td>
        Katherine
      </td>
      <td>
        kathe@gmail.com
      </td>
      <td>
        https://katherinaguilera.github.io/
      </td>
    </tr>,
    <tr>
      <td>
        Haru
      </td>
      <td>
        haru@gmail.com
      </td>
      <td>
        https://haru.github.io/
      </td>
    </tr>
  ]
  return (
    <div className="margen">
      <table className="tabla">
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th>
            Correo
          </th>
          <th>
            Enlace
          </th>
        </tr>
      </thead>
      <tbody>
        { ponerFilas() }
      </tbody>
    </table>
    </div>
  );
}

export default App;