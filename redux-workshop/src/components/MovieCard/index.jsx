import { useDispatch } from "react-redux";
import { Togglewatched } from "../../apps/Slices/movieSlice";
import classes from "./style.module.css";

const MovieCard = ({ image, title, rating, type, id }) => {
	const Dispatch = useDispatch();
	return (
		<div className={classes.container}>
			<img src={image} alt={title} />
			<button onClick={() => Dispatch(Togglewatched(id))}>
				{type === "mylist" ? "-" : "+"}
			</button>

			<div className={classes.lower}>
				<div>{title}</div>
				<div>{rating}</div>
			</div>
		</div>
	)
}

export default MovieCard
