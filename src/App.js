import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import FreeCodeCampLogo from './img/descarga.png';
import { useState } from 'react';

function App() {

  const [numClics, setNUmClics] = useState(0);

  const manejarClic = () => {
    setNUmClics(numClics+1);
  };

  const reiniciarContador = () => {
    setNUmClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={FreeCodeCampLogo}
          alt='logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics= {numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
