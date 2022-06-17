import { useState, useEffect } from 'react';
import estilos from './Input.module.css';

function InputSecreto() {

  const [valor, setValor] = useState<string>('');

  const onChange = (event: any) => {
    setValor(event.target.value);
  };

  useEffect(() => {
    if (valor.length === 7) {
      if (valor.toUpperCase() === 'SECRETA')      
        alert('sos bueno e');
      else
        alert('nop');
    }

  }, [valor])


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