import React from "react";
import "./service.scss";
import { images } from "./../../constants/index";
function Service() {
  return (
    <div id="services" className="app__service">
      <div className="app__service-title">
        <h2>Our Company</h2>
      </div>
      <div className="app__service-line" />
      <div className="app__service-grid">
        <div className="app__service-row cards">
          <img
            src={images.ecommerce}
            alt="this sample image"
            height="250px"
            width="250px"
          />
          <h3 className="text-head">Web & eCommerce Development</h3>
          <p className="app__service-paragraph">
            Web, eCommerce & application development with insights to generate
            visitors and higher conversation with measurable results
          </p>
        </div>
        <div className="app__service-row cards">
          <img
            src={images.mobile_development}
            alt="this sample image"
            height="250px"
            width="250px"
          />
          <h3 className="text-head"> Mobile App Design & Development</h3>
          <p className="app__service-paragraph">
            Hand over your Andriod & iOS app project to us so we can support
            your company growth & enable digital transformation
          </p>
        </div>
        <div className="app__service-row cards">
          <img
            src={images.sw}
            alt="this sample image"
            height="250px"
            width="250px"
          />
          <h3 className="text-head">Software Customization & Development</h3>
          <p className="app__service-paragraph">
            Create complex enterprise software, customize ERP systems, reliable
            software integration, modernize your legacy system
          </p>
        </div>

        <div className="app__service-row cards">
          <img
            src={images.banking}
            alt="this sample image"
            height="250px"
            width="250px"
          />
          <h3 className="text-head">Mobile Banking</h3>
          <p className="app__service-paragraph">
            We’ve worked with Mobile Banking giants like Amole (Dashen Bank) &
            others to create a mobile banking solution
          </p>
        </div>
        <div className="app__service-row cards">
          <img
            src={images.erp}
            alt="this sample image"
            height="250px"
            width="250px"
          />
          <h3 className="text-head">Enterprise Resource Planning Software</h3>
          <p className="app__service-paragraph">
            ERP implementation, customizations, and integrations for robust ERP
            platforms that fit unique business requirements.
          </p>
        </div>
        <div className="app__service-row cards">
          <img
            src={images.sms}
            alt="this sample image"
            height="250px"
            width="250px"
          />
          <h3 className="text-head">SMS Gateway</h3>
          <p className="app__service-paragraph">
            Ethiotelecom complaint SMS gateway with bulk messaging, keyword
            filtering, lottery & so much more…
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
