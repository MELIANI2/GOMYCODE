import { useSelector } from "react-redux";
import "swiper/css";
import "./App.css";
import MovieListe from './components/MovieList/index';
import MoviesToWatch from "./components/MoviesToWatch";

function App() {
	// const [Movies, setMovies] = useState(movies)
	const Movies = useSelector((state) => state.movies)
	console.log(Movies);
	// const handleToggle = (id) => {
	// 	const newMovies = Movies.map((movie) => {
	// 		if (movie.id === i) {
	// 			return { ...movie, watched: !movie.watched }
	// 		}
	// 		return movie
	// 	})
	// 	setMovies(newMovies)
	// }
	return (
		<div className="App">
			<h1>Redux Movie App</h1>
			<MoviesToWatch />
			<MovieListe />
		</div>
	);
}

export default App
