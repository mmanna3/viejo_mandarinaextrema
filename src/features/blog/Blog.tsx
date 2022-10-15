import { useEffect, useState } from "react";
import { escucharEscritos, IEscrito } from "../../firebase";
import ListaDeEscritosItem from "./ListaDeEscritosItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
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


	return (
		<Grid container   
			alignItems="center"
			justifyContent="center">
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{escritos.map((escrito: IEscrito) => (
					<Grid item xs={12} key={escrito.id}>
						<ListaDeEscritosItem {...escrito} />
						<Divider variant='inset' component='li' />
					</Grid>
				))}
			</List>
		</Grid>
	);
};

export default Blog;