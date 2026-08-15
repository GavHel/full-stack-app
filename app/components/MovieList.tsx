/*
Name: Gavin Helboe
Date: Aug 2026

This component displays the list of movies.
Users can add, edit, and delete movies from
the database.
*/

"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function MovieList() {
  const [movies, setMovies] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const getMovies = async () => {
    const { data, error } = await supabase.from("movies").select("*");

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    setMovies(data || []);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const addMovie = async () => {
    if (!title.trim() || !actors.trim() || !releaseYear.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const { error } = await supabase.from("movies").insert([
      {
        title,
        actors: actors.split(",").map((actor) => actor.trim()),
        release_year: Number(releaseYear),
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    setTitle("");
    setActors("");
    setReleaseYear("");

    getMovies();
  };

  const deleteMovie = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this movie?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("movies").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    getMovies();
  };

  const startEdit = (movie: any) => {
    setEditingId(movie.id);
    setTitle(movie.title);
    setActors(movie.actors.join(", "));
    setReleaseYear(movie.release_year.toString());
  };

  const updateMovie = async () => {
    if (editingId === null) return;

    const { error } = await supabase
      .from("movies")
      .update({
        title,
        actors: actors.split(",").map((actor) => actor.trim()),
        release_year: Number(releaseYear),
      })
      .eq("id", editingId);

    if (error) {
      alert(error.message);
      return;
    }

    setEditingId(null);
    setTitle("");
    setActors("");
    setReleaseYear("");

    getMovies();
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Movie Database</h2>

      <div className="border rounded-lg p-4 mb-6 bg-white shadow">
        <h3 className="text-lg font-bold mb-3 text-black">
          {editingId ? "Edit Movie" : "Add Movie"}
        </h3>

        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2 bg-white text-black"
        />

        <input
          type="text"
          placeholder="Actors (ex: Tom Hanks, Tim Allen)"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
          className="border p-2 w-full mb-2 bg-white text-black"
        />

        <input
          type="number"
          placeholder="Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          className="border p-2 w-full mb-2 bg-white text-black"
        />

        <div className="flex gap-2">
          {editingId ? (
            <>
              <button
                onClick={updateMovie}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Update Movie
              </button>

              <button
                onClick={() => {
                  setEditingId(null);
                  setTitle("");
                  setActors("");
                  setReleaseYear("");
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={addMovie}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Movie
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border rounded-lg p-4 shadow bg-white text-black"
          >
            <h3 className="text-xl font-semibold">{movie.title}</h3>

            <p>
              <strong>Actors:</strong>{" "}
              {Array.isArray(movie.actors)
                ? movie.actors.join(", ")
                : movie.actors}
            </p>

            <p>
              <strong>Release Year:</strong> {movie.release_year}
            </p>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => startEdit(movie)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteMovie(movie.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
