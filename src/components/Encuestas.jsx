
import React, { useState } from 'react';

function App() {
  const [encuestas, setEncuestas] = useState([
    {
      id: 1,
      pregunta: '¿Cuál es tu color favorito?',
      opciones: ['Rojo', 'Azul', 'Verde'],
      respuesta: '',
    },
    {
      id: 2,
      pregunta: '¿Cuál es tu comida favorita?',
      opciones: ['Pizza', 'Hamburguesa', 'Sushi'],
      respuesta: '',
    },
  ]);

  const handleRespuesta = (encuestaId, respuesta) => {
    const nuevasEncuestas = encuestas.map(encuesta => {
      if (encuesta.id === encuestaId) {
        return { ...encuesta, respuesta };
      }
      return encuesta;
    });
    setEncuestas(nuevasEncuestas);
  };

  return (
    <div className="App">
      
      <form>
        {encuestas.map(encuesta => (
          <div key={encuesta.id}>
            <h3>{encuesta.pregunta}</h3>
            <ul>
              {encuesta.opciones.map(opcion => (
                <li key={opcion}>
                  <label>
                    <input
                      type="radio"
                      name={`encuesta${encuesta.id}`}
                      value={opcion}
                      checked={encuesta.respuesta === opcion}
                      onChange={() => handleRespuesta(encuesta.id, opcion)}
                    />
                    {opcion}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </form>
      <h2>Respuestas:</h2>
      <ul>
        {encuestas.map(encuesta => (
          <li key={encuesta.id}>
            {encuesta.pregunta}: {encuesta.respuesta || 'No respondida'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

