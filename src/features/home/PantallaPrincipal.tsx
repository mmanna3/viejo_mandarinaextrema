import { useState } from 'react';
import instagram from '../../resources/images/instagram.png';
import spotify from '../../resources/images/spotify.png';
import youtube from '../../resources/images/youtube.png';
import MazoDeCanciones from '../mazoDeCanciones/MazoDeCanciones';
import ImagenMandarina from './imagenMandarina/ImagenMandarina';
import InputSecreto from './input/Input';
import './PantallaPrincipal.css';

function App() {

  const [mandarinaHeridaEsVisible, mostrarMandarinaHerida] = useState(false);
  const [mazoEsVisible, mostrarMazo] = useState(false);

  const hayError = (hay: boolean) => mostrarMandarinaHerida(hay);

  const escribioLaCorrecta = () => {
      mostrarMazo(true)
  };

  return (
    <div className="contenedor-principal"> 
    {!mazoEsVisible ? 
    <>
      <ImagenMandarina mandarinaHeridaEsVisible={mandarinaHeridaEsVisible}/>
      <InputSecreto hayError={hayError} escribioLaCorrecta={escribioLaCorrecta}/>
    </> : 
      <MazoDeCanciones/>
    }    
    
    {/* <div className="youtube-video-contenedor">
      <iframe height="250" width="320" title="cancion-para-desayunar" 
        src="https://www.youtube.com/embed/wAl7HHFWCIg">
      </iframe>  
    </div> */}
    <div className="iconos-redes-contenedor">
      <a href="https://instagram.com/mandarina.extrema">
        <img className="icono-red" src={instagram} alt="instagram"/>
      </a>
      <a href="https://open.spotify.com/artist/7lo1iNrrVW77oauQUED0tF">
        <img className="icono-red spotify" src={spotify} alt="spotify"/>
      </a>
      <a href="https://www.youtube.com/channel/UC1YAsQ6YbvE4lXEKux-U3Yg/featured">
        <img className="icono-red" src={youtube} alt="youtube"/>
      </a>
    </div>      
  </div>
  );
}

export default App;
