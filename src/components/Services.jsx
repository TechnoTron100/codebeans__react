import React from "react";

function Services() {
  return (
    <section className="container" id="services">
      <div className="services">
        <h2 className="section--header">services</h2>
        <h3 className="section--subheader">
          See more of what you <br />
          love and we offer
        </h3>
        <div className="services--box">
          <div className="services--text">
            {/* <img
                src="media/icons/serv-icons/consultation-small.png"
                alt="consultation-icon"
              /> */}
            <ion-icon
              className="services--text__icon"
              name="code-outline"
            ></ion-icon>
            <p>
              We tailor web & software solutions to match your needs by
              transforming ideas into digital realities.
            </p>
          </div>

          <div className="services--text">
            {/* <img
              src="media/icons/serv-icons/software.png"
              alt="software-icon"
            /> */}
            <ion-icon name="library-outline"></ion-icon>
            <p>
              Our comprehensive enterprise-level training equips you for success
              in a rapidly evolving landscape.
            </p>
          </div>

          <div className="services--text">
            {/* <img src="media/icons/serv-icons/web-lg.png" alt="web-dev-icon" /> */}
            <ion-icon name="hammer-outline"></ion-icon>
            <p>
              Maintenance is an essential part of building anything. We take
              that seriously to ensure your systems are reliable and up to date
            </p>
          </div>

          <div className="services--text">
            {/* <img
              src="media/icons/serv-icons/maintenance-lg.png"
              alt="Maintenance-icon"
            /> */}
            <ion-icon name="person-add-outline"></ion-icon>{" "}
            <p>
              Customized programs that elevate your workforce's capabilities,
              driving your business to new heights.
            </p>
          </div>

          {/* <div>
            <div className="services--text">
              <img
                className="serv-text--img__bg"
                src="media/icons/serv-icons/seo.png"
                alt="Maintenance-icon"
                height="100"
                width="100"
              />
              <p>
                We utilize AI-based SEO tools and technics to increase
                visibility and ultimately organic search traffic to your
                websites.
              </p>
            </div>
          </div>
          <div>
            <div className="services--text">
              <img
                className="serv-text--img__bg"
                src="media/icons/serv-icons/training.png"
                alt="Maintenance-icon"
                height="100"
                width="100"
              />
              <p>
                We utilize AI-based SEO tools and technics to increase
                visibility and ultimately organic search traffic to your
                websites
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Services;
