import React from "react";
import Link from "next/link";

// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <h1 className="text-blueGray-700 mr-4 ">
                PixelPi 
                <b> Privacy & Terms center</b>
              </h1>
            <div className="mt-4">
            <ui className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <Link href="/privacy&terms/privacy&terms-center">
            <li className="flex items-center">
                <button
                  href="/privacy&terms/privacy&terms-center"
                  className="-ml-8 mr-4 font-bold"
                  type="button"
                >
                  <i></i> Home
                </button>
              </li>  
              </Link>
              <Link href="/privacy&terms/terms-of-service">
              <li className="flex items-center">
                <button
                  href="/privacy&terms/terms-of-service"
                  className="mr-4 font-bold"
                  type="button"
                >
                  <i></i> Terms of Conditions
                </button>
              </li>  
              </Link>
              <Link href="/privacy&terms/privacy-policy">
              <li className="flex items-center">
                <button
                  href="/privacy&terms/privacy-policy"
                  className="mr-4 font-bold"
                  type="button"
                >
                  <i></i> Privacy Policy
                </button>
              </li>  
              </Link>
              <Link href = "mailto: privacy@pixelpi.org">
              <li className="flex items-center">
                <button
                  href = "mailto: privacy@pixelpi.org"
                  className="mr-4 font-bold"
                  type="button"
                >
                  <i></i> Contact us
                </button>
              </li>  
              </Link>
            </ui>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
