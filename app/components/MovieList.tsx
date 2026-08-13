/*
Name: Gavin Helboe
Date: Aug 2026

This component displays the list of movies.
Each movie shows its title, actors, and release year.
The movie data is imported from the movies file.
*/

import movies from "../data/movies";

export default function MovieList() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">
        Available Movies
      </h2>

      <div className="grid gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border rounded-lg p-4 shadow"
          >
            <h3 className="text-xl font-semibold">
              {movie.title}
            </h3>

            <p>
              <strong>Actors:</strong>{" "}
              {movie.actors.join(", ")}
            </p>

            <p>
              <strong>Release Year:</strong>{" "}
              {movie.releaseYear}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}