/*
Name: Gavin Helboe
Date: Aug 2026

This component creates the navigation bar for the website.
It displays the title of the movie database application
at the top of the page.
*/

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow">
      <h1 className="text-3xl font-bold">
        Internet Movies Rental
      </h1>

      <p className="text-sm">
        Movie Database Management Portal
      </p>
    </nav>
  );
}