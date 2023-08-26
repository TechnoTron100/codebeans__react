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
          <div>
            <div className="services--text">
              <img
                src="media/icons/serv-icons/consultation-small.png"
                alt="consultation-icon"
              />
              <p>
                We offer world-className advice and expertise to our clients
                (your organisations), to help improve business performance. Our
                work focuses on operations.
                <br />
              </p>
            </div>
          </div>
          <div>
            <div className="services--text">
              <img
                src="media/icons/serv-icons/software.png"
                alt="software-icon"
              />
              <p>
                Our Software Development solutions simplify the complicated
                processes of designing an application or software in order to
                meet a particular.
              </p>
            </div>
          </div>
          <div>
            <div className="services--text">
              <img src="media/icons/serv-icons/web-lg.png" alt="web-dev-icon" />
              <p>
                We design and build cutting-edge Websites at a swift pace. We
                typically build the appearance of the site and technical
                aspects,.
              </p>
            </div>
          </div>
          <div>
            <div className="services--text">
              <img
                src="media/icons/serv-icons/maintenance-lg.png"
                alt="Maintenance-icon"
              />
              <p>
                We offer stellar Maintenance Services that include routine
                maintenance, repair and replacement of existing hardware parts
                and software systems. And much more.
              </p>
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
