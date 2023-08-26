import React from "react";

function Partners() {
  return (
    <section className="container">
      <div className="partners">
        <h3 className="partners--header">
          The Smart ones trust us... <br />
          and you are <span>very</span> smart
        </h3>
        <div className="partners--imgs">
          <a href="https://knowmynetwork.ng/" target="_blank">
            <img src="media/images/partners/kmn.png" className="kmn" alt="KMN" />
          </a>
          <a href="#" target="_blank">
            <img
              src="media/images/partners/intellisys1.png"
              alt="intellisys logo"
            />
          </a>
          <a href="#" target="_blank">
            <img src="media/images/partners/opolo.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Partners;
