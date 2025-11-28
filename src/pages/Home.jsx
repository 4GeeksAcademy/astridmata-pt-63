import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	async function getPeople() {
		try {
			const response = await fetch("https://www.swapi.tech/api/people/")
			if (!response.ok) {
				throw new Error(`Error al obtener personaje ${response.statusText}`)
			}
			const data = await response.json();
			const personajesPeliculas = data.results;
			dispatch({
				type: "get_personajes",
				payload: { personajes: personajesPeliculas }
			})

		} catch (error) {
			console.error("Error al encontarr los personajes:", error)
		}

		// fetch("https://www.swapi.tech/api/people/")
		// 	.then(res => res.json())
		// 	.then(data => console.log(data.results))
		// 	.catch(err => console.error(err))


	}

	useEffect(() => {
		getPeople()
	}, [])


	console.log(store.character);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>


				
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 