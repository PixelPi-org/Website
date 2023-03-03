import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Error404() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-15 items-center flex h-screen max-h-870-px justify-center" >
        <main> 
            <div className="flex-auto font-bold text-center text-5xl">
               <h1>
                Error 404 :(
                </h1>
                <p>
                Sorry, Page not found 
                </p>
                <a
                  href="/"
                  className="mt-15 github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Go back home
                </a>
              </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
