import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(r => setMovies(r))
  }, [])

  const movieList = movies.map((movie) => {
    return <MovieCard movie={movie} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movieList}
      </main>
    </>
  );
};

export default Home;
