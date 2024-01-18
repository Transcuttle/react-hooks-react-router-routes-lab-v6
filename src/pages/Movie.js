import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({genres: ["Loading..."]})
  const params = useParams()
  const movieID = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieID}`)
    .then(r => r.json())
    .then(r => setMovie(r))
    .catch(error => console.log(error))
  }, [movieID])

  const genreList = movie.genres.map((genre) => {
    return <span>{genre}</span>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genreList}
      </main>
    </>
  );
};

export default Movie;
