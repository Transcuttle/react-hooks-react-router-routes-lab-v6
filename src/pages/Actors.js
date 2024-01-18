import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(r => setActors(r))
  },[])

  const actorsList = actors.map((actor) => {
    const moviesList = actor.movies.map((movie) => {
      return <li>{movie}</li>
    })

    return (
      <article id={actor.id}>
        <h2>{actor.name}</h2>
        <ul>{moviesList}</ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
