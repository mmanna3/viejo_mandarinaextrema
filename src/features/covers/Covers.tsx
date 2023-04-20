import estilos from "./Covers.module.css";

const Covers = () => {
	return <div className={estilos.contenedor}>
		<h1>Covers prácticamente no practicados</h1>
		<p>- Grabados con el celu</p>
		<p>- Con licencias en letra y en general</p>
		<p>- Ni un poquito editados</p>
		<iframe 
			width="100%" 
			height="600" 
			allow="autoplay" 
			src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1606073416&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">                
		</iframe>
		<div style={{fontSize: "10px", color: "#cccccc",lineBreak: "anywhere",wordBreak: "normal",overflow: "hidden",whiteSpace: "nowrap",textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",fontWeight: "100"}}>
			<a href="https://soundcloud.com/mandarina-extrema" title="Mandarina Extrema" target="_blank" style={{color: "#cccccc", textDecoration: "none"}} rel="noreferrer">Mandarina Extrema</a> · <a href="https://soundcloud.com/mandarina-extrema/sets/covers-practicamente-no-practicados" title="Covers grabados con el celu" target="_blank" style={{color: "#cccccc", textDecoration: "none"}} rel="noreferrer">Covers grabados con el celu</a>
		</div>
	</div>;
};

export default Covers;
