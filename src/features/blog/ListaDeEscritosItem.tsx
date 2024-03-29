import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IEscrito } from "../../firebase";

interface IEscritoInput extends IEscrito {
	id: string;
}

const Escrito = (escrito: IEscritoInput) => {
	
	const navigate = useNavigate();
	const obtenerResumen = (texto: string) => texto.slice(0, 20) + (texto.length > 20 ? "..." : ""); 

	const fecha = new Date(escrito.fechaHora);
	const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

	return <Grid padding="0.8rem 2rem" onClick={() => navigate(escrito.id)}>
		<Typography variant="body2" style={{fontFamily: "monospace", color: "#333", fontSize: "0.7rem"}} component="div">
			{`${fecha.getDate()} de ${meses[fecha.getMonth()]}`}
		</Typography>
		<Typography variant="body1" style={{fontFamily: "monospace", fontSize: "1rem"}} component="div">
			{escrito.titulo}
		</Typography>
		<Typography variant="body2" style={{fontFamily: "monospace", color: "#666", fontSize: "0.9rem"}} component="div">
			{obtenerResumen(escrito.cuerpo)}
		</Typography>
	</Grid>;
};

export default Escrito;
