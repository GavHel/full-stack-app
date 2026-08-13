/*
Name: Gavin Helboe
Date: Aug 2026

This component creates the footer section of the website.
It contains company information and contact details for
the Internet Movies Rental company.
*/

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-5 mt-10">
      <h3 className="font-bold">
        Internet Movies Rental Company
      </h3>

      <p>Email: support@imrmovies.com</p>
      <p>Phone: (403) 555-1234</p>
      <p>Calgary, Alberta</p>
    </footer>
  );
}