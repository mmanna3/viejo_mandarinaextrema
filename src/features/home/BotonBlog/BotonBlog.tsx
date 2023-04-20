import "./BotonBlog.css";
import { useNavigate } from "react-router-dom";

interface Props {
	texto: string;
	url: string;
}

function BotonNavegacion(props: Props) {
	const navigate = useNavigate();

	return <button className="boton" onClick={() => navigate(props.url)}>{props.texto}</button>;
}

export default BotonNavegacion;
