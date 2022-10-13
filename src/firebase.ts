import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import { child, DataSnapshot, get, getDatabase, onValue, ref } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBQ2dWi6V3z16oNPiCOyq1Yh55P_R1wWWk",
	authDomain: "backend-mandarina.firebaseapp.com",
	databaseURL: "https://backend-mandarina-default-rtdb.firebaseio.com",
	projectId: "backend-mandarina",
	storageBucket: "backend-mandarina.appspot.com",
	messagingSenderId: "928506352172",
	appId: "1:928506352172:web:c21a80e46354d27aab7789",
	measurementId: "G-BGBTGH5FQR",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const auth = getAuth(app);

export interface IEscrito {
	id: string;
	titulo: string;
	cuerpo: string;
	fechaHora: string;
}

function compararFechas(a: IEscrito, b: IEscrito) {
	const fechaHoraA = new Date(a.fechaHora);
	const fechaHoraB = new Date(b.fechaHora);

	if (fechaHoraA < fechaHoraB) return 1;
	if (fechaHoraA > fechaHoraB) return -1;
	return 0;
}

export const escucharEscritos = (callback: (data: IEscrito[]) => void) => {	
	const dbRef = ref(db, "blog");
	onValue(dbRef, (snapshot: DataSnapshot) => {
		console.log(snapshot);
		const resultado: IEscrito[] = [];
		
		snapshot.forEach((child: DataSnapshot) => {
			resultado.push({...child.val(), id: child.key} as unknown as IEscrito);
		});
		
		resultado.sort(compararFechas);

		callback(resultado);
	});
};

export const obtenerEscrito = (id: string, callback: (data: IEscrito) => void) => {
	const dbRef = ref(db, "blog");
	get(child(dbRef, id)).then((snapshot: DataSnapshot) => {
		if (snapshot.exists()) {
		  console.log(snapshot.val());
		  callback(snapshot.val());
		} else {
		  console.log("No se encontró el escrito");
		}
	  }).catch((error: unknown) => {
		console.error(error);
	  });
};