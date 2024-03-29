import { useState, useEffect, ChangeEvent } from "react";
import estilos from "./Input.module.css";

interface Props {
  hayError: (hay: boolean) => void;
  escribioLaCorrecta: () => void;
}

function InputSecreto({ hayError, escribioLaCorrecta }: Props) {
	const [valor, setValor] = useState<string>("");
	const [mensajeDeError, setMensajeDeError] = useState<string | null>(null);
	const [mensajeDeExito, setMensajeDeExito] = useState<string | null>(null);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValor(event.target.value);
	};

	useEffect(() => {
		const errores = [
			"uhh",
			"nop",
			"casi e",
			"ni cerca",
			"la próxima capaz",
			"frío",
			"leé mejor",
			"estás viendo la respuesta",
			"próximamente: una pista",
			"pista: rima con receta"
		];  
		const numeroRandom = Math.floor(Math.random() * errores.length);

		if (valor.length === 7) {
			if (valor.toUpperCase() === "SECRETA") {
				hayError(false);
				setMensajeDeError(null);
				setMensajeDeExito("Biennnnnn. Mirá...");
				escribioLaCorrecta();        
			} else if (valor.toUpperCase() === "MANDARI") {
				hayError(true);
				setMensajeDeExito(null);
				setMensajeDeError("tan básico no");
			} else {
				hayError(true);
				setMensajeDeExito(null);
				setMensajeDeError(errores[numeroRandom]);
			}
		} else {
			hayError(false);
			setMensajeDeExito(null);
			setMensajeDeError(null);
		}

	}, [hayError, valor]);





	return (
		<div className="contenedor-input">
			<div className={estilos.texto}>Escribí la palabra secreta</div>
			<div className={estilos.cursor}>
				<input className={estilos.input} maxLength={7} onChange={onChange} value={valor} type="text"></input>
				{<i></i>}
			</div>
			{mensajeDeError && <div className={estilos.mensajeError}>{mensajeDeError}</div>}
			{mensajeDeExito && <div className={estilos.mensajeError}>{mensajeDeExito}</div>}
		</div>
	);
}

export default InputSecreto;