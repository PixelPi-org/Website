import React from "react";
import Link from "next/link";

// components

import IndexNavbar from "components/Navbars/PixelPiCloudNavbar";
import Footer from "components/Footers/Footer.js";

export default function PixelPiCloud() {
  return (
    <>    
      <IndexNavbar transparent />
      <main>
         <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560732488-6b0df240254a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    PixelPi Cloud
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Welcome to PixelPi Cloud 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </section>
          {/* Plans and Pricing */}
        <section className="">
          <body class="font-sans bg-blueGray-200 pb-20">
            <div class="min-h-screen flex justify-center items-center">
              <div>
                <div class="text-center">
                  <h1 class="text-5xl">
                    <span class="text-3xl mb-2 font-semibold leading-normal text-blueGray-900"> Plans and Pricing </span>
                  </h1>
                  <p
                    class="mt-2 mb-4 text-blueGray-400"
                  >
                    Choose a plan that works best for you and <br />your next project.
                  </p>
                </div>
                <div class=" pt-17 flex flex-row">
                  {/* <!-- Basic Card --> */}
                  <div
                    class="w-96 p-8 bg-white text-center pr-16 shadow-xl rounded-lg mr-3"
                  >
                    <h1 class="text-black font-semibold text-2xl">Basic</h1>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">8,99</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >Unlimited*<span class="text-black"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-black"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >5TB<span class="text-black"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-black">12 Cores </span>Intel CPU's</span>
                      </p>
                      <button class="mt-12 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      By Now
                      </button>
                    </div>
                  </div>
                  {/* <!-- Startup card  --> */}
                  <div
                    class="w-80 p-8 bg-indigo-500 text-center text-white border-4 shadow-xl border-white transform scale-125 rounded-lg mr-3"
                  >
                    <h1 class="text-white font-semibold text-2xl">Startup</h1>
                    <a>*most popular</a>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">24</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1 border-gray-600" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >Unlimited*<span class="text-white"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-w"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >5TB<span class="text-white"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-white">12 Cores </span>Intel CPU's</span>
                      </p>
                      <button class="mt-12 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      By Now
                      </button>
                    </div>
                  </div>
                  {/* <!-- Enterprise card --> */}

                  <div class="w-96 p-8 bg-white text-center pl16 shadow-xl rounded-lg mr-3">
                    <h1 class="text-black font-semibold text-2xl">Enterprise</h1>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">99</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >Unlimited*<span class="text-black"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-black"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >5TB<span class="text-black"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-black">12 Cores </span>Intel CPU's</span>
                      </p>
                      <button class="mt-12 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      By Now
                      </button>
                    </div>
                  </div>

                  {/* Coustom */}
                  <div
                    class="w-80 p-8 bg-indigo-500 text-center text-white border-4 shadow-xl border-white transform scale-125 rounded-lg mr-3"
                  >
                    <h1 class="text-white font-semibold text-2xl">Custom</h1>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">299</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1 border-gray-600" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >Unlimited*<span class="text-white"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-w"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >5TB<span class="text-white"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-white">12 Cores </span>Intel CPU's</span>
                      </p>
                      <button class="mt-12 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      By Now
                      </button>
                    </div>
                  </div>

                    {/* <!-- Dedicated card --> */}

                    <div class="w-96 p-8 bg-white text-center pl16 shadow-xl rounded-lg">
                    <h1 class="text-black font-semibold text-2xl">Dedicated servers</h1>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">99</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >Unlimited*<span class="text-black"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-black"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >5TB<span class="text-black"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-black">12 Cores </span>Intel CPU's</span>
                      </p>
                      <button class="mt-12 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      By Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </section>
        <section class="mt-24 pb-20">
        <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
