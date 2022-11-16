import "./BotonBlog.css";
import { useNavigate } from "react-router-dom";

function BotonBlog() {
	const navigate = useNavigate();

	return <button className="boton" onClick={() => navigate("/blog")}>Blog</button>;
}

export default BotonBlog;
