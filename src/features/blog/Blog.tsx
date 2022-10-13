import { useEffect, useState } from "react";
import { escucharEscritos, IEscrito } from "../../firebase";
import "./Blog.module.css";

const Blog = () => {

	const [escritos, setEscritos] = useState<IEscrito[]>([]);

	useEffect(() => {
		const callback = (_escritos: IEscrito[]) => {			
			console.table(_escritos);
			setEscritos(_escritos);
		};
		
		escucharEscritos(callback);
	}, []);


	return <>{escritos.map((escrito) => 
		<>
			<h2>{escrito.titulo}</h2>
			<p>{escrito.cuerpo}</p>
		</>
	)}</>;
};

export default Blog;