import { useEffect, useState } from "react";
import Estilos from "./ImagenMandarina.module.css";
import mandarina from "../../../resources/images/mandarina.png";
import mandarinaHerida from "../../../resources/images/mandarina_herida.png";

interface IProps {
  mandarinaHeridaEsVisible: boolean;
}

function ImagenMandarina({mandarinaHeridaEsVisible}: IProps) {
	const [imagen, setImagen] = useState(mandarina);

	useEffect(() => {
		if (mandarinaHeridaEsVisible)
			setImagen(mandarinaHerida);
		else
			setImagen(mandarina);

	}, [mandarinaHeridaEsVisible]);

	return (
		<img className={`${Estilos.imagen} ${mandarinaHeridaEsVisible ? Estilos.imagenAparece : ""}`} src={imagen} alt="mandarina"/>    
	);
}

export default ImagenMandarina;
