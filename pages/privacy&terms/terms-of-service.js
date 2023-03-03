import React from "react";

import PrivacyTermsNavbar from "components/Navbars/PrivacyTermsNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function AboutUs() {
  return (
    <>
    <PrivacyTermsNavbar/>
      <section className="header relative pt-15 mt-32" >
        <main> 
          <div>
            <div className="flex-auto font-bold text-center text-5xl mb-4 ">
               <h1>
              Terms of Service
                </h1>
                </div>
                <p className="leading-relaxed mt-20 mb-6 text-black font-serif">
                Last changes 2/19/2023 18:08 UTC+1 Norway
                </p>
                </div>
        </main>
      </section>
      <main className="text-2xl lg:w-8/12 container mx-auto">
        <section className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-16 px-12 relative z-10">
        <p className="leading-relaxed mt-20 mb-6 text-black font-serif">
           Please read these Terms of Use carefully before using PixelPi's cloud services and software applications. By accessing or using our services, you agree to be bound by these Terms of Use. If you do not agree to these Terms of Use, do not use our services. 
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          1. Description of Services 
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6 text-black font-serif">
          PixelPi provides cloud-based storage and software development services to its customers. Our software applications allow customers to create, store, and share digital content. We reserve the right to modify, suspend, or discontinue our services at any time without notice. 
          </p>          
          <h1 className=" font-serif font-blod text-black text-center">
          2. User Accounts 
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6 text-black font-serif">
          To use our services, you must create a user account with PixelPi. You are responsible for maintaining the security 
          of your account and password, and for all activities that occur under your account. You agree to notify us immediately
          of any unauthorized access to your account or any other breach of security. We reserve the right to terminate your account 
          at any time for any reason.
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          3. Prohibited Conduct 
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          You agree not to use our services for any unlawful or unauthorized purpose, including but not limited to:
          </p>
          <div className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
            <ul>
              <li>•	Uploading, transmitting, or otherwise distributing any content that is illegal, fraudulent, or harmful.</li>
              <li>•	Harassing, threatening, or defaming any person or entity.</li>
              <li>•	Uploading, transmitting, or otherwise distributing any content that infringes on the intellectual property rights of others.</li>
              <li>•	Interfering with or disrupting our services, including our servers and networks.</li>
              <li>•	Using our services to send unsolicited commercial email or other types of spam.</li>
            </ul>
          </div>
          <h1 className=" font-serif font-blod text-black text-center">
          4.	Intellectual Property Rights
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          PixelPi retains all intellectual property rights in our software applications, including but not limited to copyrights,
           patents, and trademarks. You agree not to modify, copy, distribute, or create derivative works based on our software 
           applications without our express written consent.
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          5. Disclaimer of Warranties 
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          Our services are provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied.
           We do not warrant that our services will be uninterrupted, error-free, or free from viruses or other harmful components.
          </p> 
          <h1 className=" font-serif font-blod text-black text-center">
          6.	Limitation of Liability
          </h1>   
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          In no event shall PixelPi be liable for any indirect, incidental, special, or consequential damages arising out 
          of or in connection with our services, including but not limited to lost profits, lost data, or business interruption.
           Our total liability to you for any and all claims arising out of or in connection with our services shall not exceed 
           the amount paid by you for our services during the six (6) months prior to the event giving rise to the claim.
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          7.	Indemnification
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          You agree to indemnify and hold PixelPi and its affiliates, officers, agents, and employees harmless 
          from any and all claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees)
           arising out of or in connection with your use of our services, your breach of these Terms of Use, or your 
          violation of any law or the rights of any third party.
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          8.	Governing Law
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          These Terms of Use shall be governed by and construed in accordance with the laws of the State of Norway, 
          without giving effect to any principles of conflicts of law. Any legal action or proceeding arising out of or 
          in connection with these Terms of Use shall be brought exclusively in the state or federal courts located in
         oslo, Norway.
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          9.	Changes to these Terms of Use
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          PixelPi reserves the right to modify these Terms of Use at any time without notice. Your continued use of our 
          services after any such modifications shall constitute your acceptance of the modified Terms of Use.
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          10.	Contact Us 
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-20  text-black font-serif">
          If you have any questions or concerns about these Terms of Use or PixelPi's services, please contact us at 
          support@pixelpi.org.
          </p>
          <p className="mt-20 mb-20"></p>
        </section>
      </main>
    </>
  );
}
