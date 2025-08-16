
import { useState } from 'react';


function App() {
  // Frase inicial sin imagen
  const fraseInicial = "¡Haz click para ver un meme!";
  const imagenInicial = "https://i.blogs.es/335b73/trolldad/1366_2000.jpeg";
  // Frases con id del 1 al 9
  const frases = [
    { id: 1, texto: "La nancy cuando el diego chambea" },
    { id: 2, texto: "El diego cuando piensa en pene" },
    { id: 3, texto: "El diego cuando tiene flaca" },
    { id: 4, texto: "La nancy cuando al diego le pagan" },
    { id: 5, texto: "El gato del diego defendiendo sus bolas" },
    { id: 6, texto: "*El diego manda mensaje*, EL GABO: " },
    { id: 7, texto: "*El diego existe*, EL CONNOR: " },
    { id: 8, texto: "*El diego nace*, LA NANCY: " },
    { id: 9, texto: "*El diego cobra quincena*, EL GABO: " }
  ];

  // null = frase inicial, si no, es el id de la frase (1-9)
  const [fraseId, setFraseId] = useState(null);

  const alerta = () => {
    let nuevo;
    do {
      nuevo = Math.floor(Math.random() * 9) + 1;
    } while (nuevo === fraseId);
    setFraseId(nuevo);
  };

  const fraseActual = fraseId ? frases.find(f => f.id === fraseId).texto : fraseInicial;

  return (
    <div className="container">
      <div className="meme-wrapper">
        <div className="meme-text">
          {fraseActual}
        </div>
        <img
          src={fraseId ? `/assets/meme-${fraseId}.jpeg` : imagenInicial}
          alt={fraseId ? `meme troll ${fraseId}` : 'meme inicial'}
          className="meme-img"
        />
      </div>
      <button className="meme-btn" onClick={alerta}>Generar Meme</button>
    </div>
  );
}

export default App;
