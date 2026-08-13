/*
Name: Gavin Helboe
Date: Aug 2026

This file stores sample movie data for the application.
The data includes the movie title, actors, and release year.
*/

export interface Movie {
  id: number;
  title: string;
  actors: string[];
  releaseYear: number;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "The Matrix",
    actors: ["Keanu Reeves", "Laurence Fishburne"],
    releaseYear: 1999,
  },
  {
    id: 2,
    title: "Inception",
    actors: ["Leonardo DiCaprio", "Tom Hardy"],
    releaseYear: 2010,
  },
  {
    id: 3,
    title: "Interstellar",
    actors: ["Matthew McConaughey", "Anne Hathaway"],
    releaseYear: 2014,
  },
];

export default movies;