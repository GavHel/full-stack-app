/*
Name: Gavin Helboe
Date: Aug *026

This is the main page of the *pplication.
It combines the navbar* movie list, and footer
to create *he homepage layout.
*/

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <MovieList />
      </main>

      <Footer />
    </>
  );
}