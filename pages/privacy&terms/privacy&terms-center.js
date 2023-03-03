import React from "react";

import PrivacyTermsNavbar from "components/Navbars/PrivacyTermsNavbar.js";
import Footer from "components/Footers/Footer.js";


export default function PrivacyTerms() {
  return (
    <>
      <PrivacyTermsNavbar/>
      <section className="header relative pt-15 items-center flex h-screen max-h-870-px justify-center" >
        <main> 
            <div className="flex-auto font-bold text-center text-5xl">
               <h1>
                Welcome to pixelpi Privacy & Terms center 📃
                </h1>
                <p className="text-lg font-light leading-relaxed mt-4 text-blueGray-600">
                Feel free to ask if you have any questions, Ask us at support@pixelpi.org 
                </p>
                <a
                  href="/"
                  className="mt-15 github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Go back to main page
                </a>
              </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
