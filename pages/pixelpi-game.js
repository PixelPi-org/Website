import React from "react";
import Link from "next/link";

// components

import IndexNavbar from "components/Navbars/PixelpiGameNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PixelPiGame() {
  return (
    <>    
      <IndexNavbar transparent />
      <main>
         <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
                    PixelPi GAME
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200 font-bold">
                    GAME ON
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
                className="text-blueGray-700 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>


        <section className="pb-20 bg-blueGray-700 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <div>
                      <img
                        alt="..."
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500"
                        src="/img/pixelpi-game-electricbolt.png"
                      />
                      </div>
                    <h6 className="text-xl font-semibold">Preformance</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    PixelPi offers high-performance game hosting for an optimal gaming experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <div>
                      <img
                        alt="..."
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-500"
                        src="/img/cloud.png"
                      />
                      </div>
                    <h6 className="text-xl font-semibold">Keep every thing in the cloud</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep all your Game, Web, Documents in the Cloud.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center mt-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <div>
                      <img
                        alt="..."
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                        src="/img/pixelpi-game-security.png"
                      />
                      </div>
                    <h6 className="text-xl font-semibold">Security</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    PixelPi ensures secure hosting with DDoS protection by Cloudflare on every server.
                    </p>
                  </div>
                </div>
              </div>
            </div>¨

            <section>
            <polygon
                className="text-blueGray-700 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </section>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                  Supported games
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                PixelPi's cloud hosting platform supports an extensive list of games through Pterodactyl and Kubernetes technologies. This ensures that users can enjoy a seamless deployment and management process of their favorite games, leading to a smooth and uninterrupted gaming experience. With PixelPi, gamers can easily host and manage their favorite games with ease.
                </p>  
                <a
                        href="https://pterodactyl.io/project/introduction.html#supported-games"
                        target="_blank"
                        className="font-bold text-white hover:text-blueGray-500 ease-linear transition-all duration-150 -ml-4 "
                      >Go to supported games{" "}
                        <i className="fa fa-angle-double-right leading-relaxed"></i>
                      </a>  
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                  <img
                    alt="..."
                    src="/img/pixelpi-game-support.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-white fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-blueGray-700">
                      24/7 Support 
                    </h4>
                    <p className="text-md font-light mt-2 text-blueGray-700">
                      Get support from any where and any time. We wil respond in 1 - 2 days
                    </p>
                  </blockquote>
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
                    Choose a plan for your game <br />
                  </p>
                </div>
                <div class=" pt-17 flex flex-row">
                  {/* <!-- Minecraft Card --> */}
                  <div
                    class="w-96 p-8 bg-white text-center pr-16 shadow-xl rounded-lg mr-3"
                  >
                    <h1 class="text-black font-semibold text-2xl">Vanila Minecraft Servers</h1>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">0,99</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >2Gb<span class="text-black"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-black"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >20Gb<span class="text-black"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-black">2 CPU  </span>Cores</span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-gray-400">Supports: </span>Vanila, Bukit, Spigot etc</span>
                      </p>
                      <button class="mt-16 bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      By Now
                      </button>
                    </div>
                  </div>
                  {/* <!-- Coustom minecraft card  --> */}
                  <div
                    class="w-80 p-8 bg-orange-500 text-center text-white border-4 shadow-xl border-white transform scale-125 rounded-lg mr-3"
                  >
                    <h1 class="text-white font-semibold text-2xl">Custom Minecraft servers</h1>
                    <a>*most popular</a>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">1,98</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1 border-gray-600" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >16<span class="text-white"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-w"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >120Gb<span class="text-white"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-white">4 CPU </span>Cores</span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-white">Supports: </span>Bungeecord, Waterfall, etc</span>
                      </p>
                      <button class="mt-12 bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      By Now
                      </button>
                    </div>
                  </div>
                  {/* <!-- Game card --> */}

                  <div class="w-96 p-8 bg-white text-center pl16 shadow-xl rounded-lg mr-3">
                    <h1 class="text-black font-semibold text-2xl">Game servers</h1>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">9,89</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >Depends<span class="text-black"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-black"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >500Gb<span class="text-black"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-black">12 Cores </span>Intel CPU's</span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                          <span class="text-black">Check out supported games </span>
                      </p>
                      <button class="mt-24 bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      By Now
                      </button>
                    </div>
                  </div>

                  {/* Coustom */}
                  <div
                    class="w-80 p-8 bg-orange-500 text-center text-white border-4 shadow-xl border-white transform scale-125 rounded-lg mr-3"
                  >
                    <h1 class="text-white font-semibold text-2xl">Custom</h1>
                    <p class="pt-2 tracking-wide">
                      <span class="text-3xl font-semibold">Depends</span>
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
                          >Custom TB/Gb<span class="text-white"> SSD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-white"> 1-24 </span> cores Intel/AMD CPU's</span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                          <span class="text-gray-400">Check out supported games </span>
                      </p>
                      <button class="mt-24 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Contact us
                      </button>
                    </div>
                  </div>

                    {/* <!--Dedicated Servers card --> */}

                    <div class="w-96 p-8 bg-white text-center pl16 shadow-xl rounded-lg">
                    <h1 class="text-black font-semibold text-2xl">Dedicated game Servers</h1>
                    <p class="pt-2 tracking-wide">
                      <span class="text-gray-400 align-top">$</span>
                      <span class="text-3xl font-semibold">18,99</span>
                      <span class="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr class="mt-4 border-1" />
                    <div class="pt-8">
                      <p class="font-semibold text-gray-400 text-left">
                        <span class="pl-2"
                          >Depends<span class="text-black"> DDR4 ECC memory</span></span
                        >
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >1 <span class="text-black"> Gigabit/s nettwork </span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          >Depends<span class="text-black"> SSD/HDD Storage</span></span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                        <span class="pl-2"
                          ><span class="text-black">Depends </span>Intel/AMD CPU's</span>
                      </p>
                      <p class="font-semibold text-gray-400 text-left pt-5">
                          <span class="text-black">Check out supported games </span>
                      </p>
                      <button class="mt-16 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </section>
        <section class=" pt-6 pb-20 bg-blueGray-700">
        <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/img/pixelpi-game-minecrafthouse.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-white text-3xl font-semibold">Take a look at our Minecraft Server (play.pixelpi.org)</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white mb-24">
                  Join our Minecraft server (version 1.19 +) and see what you can do with a little bit of creativity with PixelPi on your side.
                  </p>
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
