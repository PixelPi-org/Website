import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function career() {
  return (
    <>
    <IndexNavbar/>
      <section className="header relative pt-24 mt-32" >
        <main> 
          <div>
            <div className="flex-auto font-bold text-center text-5xl mb-4 ">
               <h1>
              Your next career migth be with us
                </h1>
                </div>
                <p className="leading-relaxed mt-20 mb-6 text-black font-serif">
                Last uppdate 2/19/2023 18:08 UTC+1 Norway
                </p>
                </div>
        </main>
      </section>
      <main className="container mx-auto">
        <section className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-24 px-24 relative z-10">
          <div>
          <h2 className="-ml-16 font-semibold mt-16">Job name</h2>
          <p className="leading-relaxed text-black font-serif">
                This wil be the job Descripton remeber to be clear abou the job 
                </p>
          <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-amber-600 bg-yellow-500 uppercase last:mr-0 mr-1">
          amber
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-amber-600 bg-yellow-500 uppercase last:mr-0 mr-1">
          amber
          </span>
          </div>
          <p className="mt-20 mb-20"></p>
        </section>
      </main>
    </>
  );
}
