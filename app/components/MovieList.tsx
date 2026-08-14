/*
Name: Gavin Helboe
Date: Aug 2026

This component displays the list of movies.
Each movie shows its title, actors, and release year.
The movie data is imported from the movies file.
*/
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";


export default function MovieList() {
   const [movies, setMovies] = useState<any[]>([]);
   useEffect(() => {
  const getMovies = async () => {
    const { data, error } = await supabase
      .from("movies")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setMovies(data || []);
  };

  getMovies();
}, []);

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
              {movie.release_year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}