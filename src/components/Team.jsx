import React from "react";

function Team() {
  return (
    <section className="container" id="team">
      <div className="team">
        <h2 className="section--header">Our Team</h2>
        <h3 className="section--subheader">
          The Brains behind all the magic and success
        </h3>
        <div className="team--section">
          <div className="team--member">
            <div className="team--member__background">
              <figure className="team--member__figure">
                <img
                  src="media/images/team/umar.jpg"
                  alt="CEO"
                  className="team--member__img"
                />
                <figcaption className="team--member__caption">
                  Umar Ahmad
                  <br />
                  <span>Founder and CEO</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="team--member">
            <div className="team--member__background">
              <figure className="team--member__figure">
                <img
                  src="media/images/team/muslim.jpg"
                  alt="CEO"
                  className="team--member__img"
                />
                <figcaption className="team--member__caption">
                  Muslim Shehu
                  <br />
                  <span>Financial Secretary</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="team--member">
            <div className="team--member__background">
              <figure className="team--member__figure">
                <img
                  src="media/images/team/saif.jpg"
                  alt="CEO"
                  className="team--member__img"
                />
                <figcaption className="team--member__caption">
                  Musa Abdulqadir
                  <br />
                  <span>Product Manager</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="team--member">
            <div className="team--member__background">
              <figure className="team--member__figure">
                <img
                  src="media/images/team/babilo.jpg"
                  alt="CEO"
                  className="team--member__img"
                />
                <figcaption className="team--member__caption">
                  Maryam Dalhatu
                  <br />
                  <span>Social Media Manager</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="team--member">
            <div className="team--member__background">
              <figure className="team--member__figure">
                <img
                  src="media/images/team/maimuna.jpg"
                  alt="CEO"
                  className="team--member__img"
                />
                <figcaption className="team--member__caption">
                  Maimuna Isah Ibrahim
                  <br />
                  <span>Brand Ambassador</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
