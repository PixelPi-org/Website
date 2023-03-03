/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Amberalert from "components/Alerts/amberalert";

export default function Index() {
  return (
    <>
      <Amberalert fixed/>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px ">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                PixelPi
              </h2>
              <div className="mt-6">
              <a className="">
                PixelPi, Cloud and software Services
              </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-auto items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="/img/pixelpi-index-techparts.jpg"
                  className=" align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Check out our Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Check out our Services and see if you find any thing 
                    that you could need for any project you have
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                    <div>
                      <img
                        alt="..."
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                        src="/img/cloud.png"
                      />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        PixelPi Cloud
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Easy to use Cloud hosting for anything, with easy to 
                        manage servers and with preformance in mind.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0 mt-24">
                    <div className="px-4 py-5 flex-auto">
                      <div>
                      <img
                        alt="..."
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                        src="/img/controller.png"
                      />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        PixelPi Game
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Set up fast and easy to use game servers for any game 
                        you want, with preformance in mind.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div>
                      <img
                        alt="https://pixelpi.edu"
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400"
                        src="/img/school_hatt.png"
                      />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        PixelPi for EDU
                        (Under dev)
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Use PixelPi for edu in your classrom to make programming 
                        and hosting fun and easy for every one. Contact us for pixelpi-EDU 
                        at edu@pixelpi.org
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div>
                      <img
                        alt="https://pixelpi.edu"
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400"
                        src="/img/hard_drive.png"
                      />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        PixelPi Drive (Under dev)
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        PixelPi Drive is a cloud storage Service for any one
                        who need some exstra storage for backups or files or
                        the family photos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <img
               alt="..."
               src="/img/cloud.png"
               />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                PixelPi Cloud
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              PixelPi Cloud is a reliable and scalable cloud hosting platform designed to optimize businesses'
              digital presence. With its high-performance computing capabilities and advanced security features,
              along with a user-friendly dashboard and 24/7 customer support, PixelPi Cloud offers fast and reliable service to businesses of all sizes.
              </p>
              <a
                href="/pixelpi-cloud"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Go to PixelPi Cloud{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/pixelpi-index-pixelpi-cloud.jpg"
                  className="w-full align-middle rounded-lg mt-48 shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
              <img
                  alt="..."
                  src="/img/pixelpi-index-VRgirl.jpg"
                  className="w-full align-middle rounded-lg mt-48 shadow-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <img
                alt="..."
                src="/img/controller.png"
                />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                PixelPi Game
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              PixelPi Game is a cloud hosting platform that provides high-performance hosting solutions for gamers. With advanced DDoS protection by Cloudflare on every server, PixelPi Game ensures secure and reliable hosting for a seamless gaming experience. Users can easily manage and deploy their favorite games using PixelPi's user-friendly dashboard.
              </p>
              <a
                href="/pixelpi-game/"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Go to pixelpi Game{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <img
                alt="..."
                src="/img/school_hatt.png"
                />
                </div>
                <h3 className="text-3xl font-semibold">
                  PixelPi for EDU (PixelPi Education editon) 
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  PixelPi for EDU is a methode to teatch programing and how programs 
                  are made, with PixelPi for EDU you can use our built in Code editor (IDE)
                  and create new things you can also conect a project to a server via 
                  PixelPi Cloud.
                </p>
                <a
                href="https://www.edu.pixelpi.org"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Go to pixelpi for EDU{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
              </div>
            </div>
            <img
                  alt="..."
                  src="/img/pixelpi-index-books.jpg"
                  className="w-full align-middle rounded-lg mt-48 shadow-lg max-w-xl"
                />
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                We are on github 😱
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                  When you have time take a look at {" "}
                <a
                  href="/aboutus"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  PixelPi
                </a>{" "}
                 on github where you can contribute and get help from our beutiful staff
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                PS: The PixelPi Github team
              </p>
              <a
                href="https://github.com/PixelPi-org"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
      </section>
      <Footer />
    </>
  );
}
