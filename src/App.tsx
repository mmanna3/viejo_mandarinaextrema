import { Routes, Route } from "react-router-dom";
import PantallaPrincipal from "./features/home/PantallaPrincipal";
import Blog from "./features/blog/Blog";

const App = () => {
    return  <Routes>
                <Route path="/" element={<PantallaPrincipal />} />
                <Route path="blog" element={<Blog />} />
            </Routes>
}

export default App;