import estilos from './Cancion.module.css';

interface Props {
  titulo: String;
  letra: String;
}

function Cancion({ titulo, letra }: Props) {

  return (
    <div className={estilos.contenedor}>
        <div className={estilos.titulo}>{titulo}</div>
        <div className={estilos.letra}>
            {letra}
        </div>
    </div>
  );
}

export default Cancion;