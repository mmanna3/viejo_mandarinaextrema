import { useState, useEffect } from 'react';
import estilos from './Input.module.css';

interface Props {
  hayError: Function;
}

function InputSecreto({ hayError }: Props) {
  const [valor, setValor] = useState<string>('');

  const onChange = (event: any) => {
    setValor(event.target.value);
  };

  useEffect(() => {
    if (valor.length === 7) {
      if (valor.toUpperCase() === 'SECRETA') {
        hayError(false);
      }        
      else {
        hayError(true);
      }
    } else {
      hayError(false);
    }

  }, [hayError, valor])


  return (
    <div className="contenedor-input">
        <div className={estilos.texto}>Escribí la palabra secreta</div>
        <div className={estilos.cursor}>
            <input className={estilos.input} maxLength={7} onChange={onChange} autoFocus value={valor} type="text"></input>
            {<i></i>}
        </div>        
    </div>
  );
}

export default InputSecreto;