import estilos from './Cancion.module.css';
import spotify from '../../resources/images/spotify.png'
import youtube from '../../resources/images/youtube.png'

export interface TCancion {
    titulo: string;
    letra: string;
    linkSpotify: string;
    linkYoutube: string;
}

interface Props {
  cancion: TCancion
}

function Cancion({ cancion }: Props) {
  return (
    <div className={estilos.contenedor}>
        <div className={estilos.titulo}>
          
          <span>  
          {cancion.titulo}
          <span className={estilos.contenedorIconos}>
            <a href={cancion.linkSpotify}>
              <img className={estilos.icono} src={spotify} alt="spotify"/>
            </a>
            <a href={cancion.linkYoutube}>
              <img className={estilos.icono} src={youtube} alt="youtube"/>
            </a>
          </span> 
          </span>
        </div>
        <div className={estilos.letra}>
            {cancion.letra}
        </div>

    </div>
  );
}

export default Cancion;