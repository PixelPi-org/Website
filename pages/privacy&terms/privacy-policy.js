import React from "react";

import IndexNavbar from "components/Navbars/PrivacyTermsNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Privacy() {
  return (
    <>
      <IndexNavbar transparent /> 
      <section className="header relative pt-15 mt-32" >
        <main> 
          <div>
            <div className="flex-auto font-bold text-center text-5xl mb-4 ">
               <h1>
              Privacy policy
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
        PixelPi is committed to protecting the privacy and security of our customers' personal information. This privacy policy explains how we collect, use, and disclose information about our customers, and the choices that our customers have with respect to their information. This policy applies to information collected through our website and software applications. 
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          Information We Collect  
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6 text-black font-serif">
          PixelPi collects both personal and non-personal information from our customers. Personal information includes any information that identifies an individual, such as name, email address, and billing information. Non-personal information includes information that does not identify an individual, such as website usage statistics and customer preferences.
          </p>          
          <p className="text-lg leading-relaxed mt-0 mb-6 text-black font-serif">
          We collect personal information when our customers create an account, purchase our software, or contact us for customer support. We may also collect non-personal information automatically through the use of cookies and other tracking technologies. 
          </p>   
          <h1 className=" font-serif font-blod text-black text-center">
          How We Use Information  
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          PixelPi uses the information we collect for a variety of purposes, including: 
          </p>
          <div className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
            <ul>
              <li>•	Providing our customers with access to our software and services.</li>
              <li>•	Processing payments and communicating with customers about billing and account issues.</li>
              <li>•	Responding to customer inquiries and providing customer support.</li>
              <li>•	Analyzing and improving our software and services.</li>
              <li>•	Communicating with our customers about updates to our software and services, as well as marketing our products and services to our customers. </li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          We may share information with third-party service providers who perform services on our behalf, such as payment processing, customer support, and marketing. We may also share information with our affiliates and business partners for marketing purposes. 
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          Information Security 
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          PixelPi takes reasonable measures to protect the security of our customers' personal information. We use industry-standard security technologies, such as SSL encryption, to protect sensitive information transmitted through our website and software. We also restrict access to personal information to authorized personnel only. 
          </p>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          However, no security system is perfect, and we cannot guarantee the security of our customers' personal information. Customers are responsible for protecting their own account passwords and should contact us immediately if they suspect unauthorized access to their account. 
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          Your Choices 
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          Customers have certain choices with respect to their personal information. Customers may choose not to provide personal information to PixelPi, although this may prevent them from using some of our services. Customers may also request that we delete their personal information by contacting us. 
          </p> 
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          Customers may opt out of receiving marketing emails from PixelPi by clicking the "unsubscribe" link in the email. However, customers may still receive transactional emails related to their account. 
          </p> 
          <h1 className=" font-serif font-blod text-black text-center">
          Changes to This Policy 
          </h1>   
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          PixelPi may update this privacy policy from time to time to reflect changes in our business practices or legal obligations. We will notify customers of any material changes to this policy by email or through our website. 
          </p>
          <h1 className=" font-serif font-blod text-black text-center">
          Contact Us 
          </h1>
          <p className="text-lg leading-relaxed mt-0 mb-6  text-black font-serif">
          If you have any questions or concerns about this privacy policy or PixelPi's data practices, please contact us at support@pixelpi.com. 
          </p>
        </section>
      </main>
    </>
  );
}
