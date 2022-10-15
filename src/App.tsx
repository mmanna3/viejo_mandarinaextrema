import { Routes, Route } from "react-router-dom";
import PantallaPrincipal from "./features/home/PantallaPrincipal";
import Blog from "./features/blog/Blog";
import VerEscrito from "./features/blog/VerEscrito";

const App = () => {
	return <Routes>
		<Route path="/" element={<PantallaPrincipal />} />
		<Route path="/blog" element={<Blog />} />
		<Route path="/blog/:escritoId" element={<VerEscrito />} />
	</Routes>;
};

export default App;