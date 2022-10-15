import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { IEscrito } from "../../firebase";

interface IEscritoInput extends IEscrito {
	id: string;
}

const Escrito = (escrito: IEscritoInput) => {
	
	const navigate = useNavigate();
	const obtenerResumen = (texto: string) => texto.slice(0, 80) + (texto.length > 80 ? "..." : ""); 

	return <>
		<ListItem alignItems="flex-start">
			<ListItemText
				primary={escrito.titulo}
				secondary={obtenerResumen(escrito.cuerpo)}
				onClick={() => navigate(escrito.id)}
			/>
		</ListItem>
	</>;
};

export default Escrito;
