import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEscrito, obtenerEscrito } from "../../firebase";

const VerEscrito = () => {
	const {escritoId} = useParams();

	const [titulo, setTitulo] = useState("");
	const [cuerpo, setCuerpo] = useState("");

	useEffect(() => {
		const callback = (_escrito: IEscrito) => {
			setTitulo(_escrito.titulo);
			setCuerpo(_escrito.cuerpo);
		};

		if (escritoId)
			obtenerEscrito(escritoId, callback);
			
	}, [escritoId]);

	return <Grid paddingLeft="2em">
		<Typography variant="h5" gutterBottom>
			<pre>{titulo}</pre>
		</Typography>
		<Typography variant="body1" gutterBottom>
			<pre>{cuerpo}</pre>
		</Typography>
	</Grid>;
};

export default VerEscrito;