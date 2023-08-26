import React, { useState } from "react";

function Courses() {
  const [isMore, setIsMore] = useState(false);

  return (
    <section className="container" id="courses">
      <div className="courses">
        <h2 className="section--header">courses</h2>
        <h3 className="section--subheader">
          Develop industry-level skills <br />
          with our outstanding courses
        </h3>
        <div className="courses--section">
          <div className="courses--section__box">
            <h3 className="courses--section__header">Front-End Development</h3>
            <p className="courses--item">
              Duration:
              <br />
              <span>6 months</span>
            </p>
            <p className="courses--item">
              Requirements:
              <br />
              <span>PC and Internet</span>
            </p>
            <p className="courses--item">
              Contents:
              <br />
              <span>ReactJs</span>
            </p>
            <p className="courses--item">
              Fee:
              <br />
              <span>N99K</span>
            </p>
            <a className="courses--btn">Enroll</a>
          </div>
          <div className="courses--section__box courses-at">
            <h3 className="courses--section__header">Full-Stack Development</h3>
            <p className="courses--item">
              Duration:
              <br />
              <span>1 year</span>
            </p>
            <p className="courses--item">
              Requirements:
              <br />
              <span>PC and Internet</span>
            </p>
            <p className="courses--item">
              Contents:
              <br />
              <span>The whole package</span>
            </p>
            <p className="courses--item">
              Fee:
              <br />
              <span>N199K</span>
            </p>
            <a className="courses--btn">Enroll</a>
          </div>
          <div className="courses--section__box">
            <h3 className="courses--section__header">Back-End Development</h3>
            <p className="courses--item">
              Duration:
              <br />
              <span>6 months</span>
            </p>
            <p className="courses--item">
              Requirements:
              <br />
              <span>PC and Internet</span>
            </p>
            <p className="courses--item">
              Contents:
              <br />
              <span>NodeJs/NestJs or C#.NET</span>
            </p>
            <p className="courses--item">
              Fee:
              <br />
              <span>N99K</span>
            </p>
            <a className="courses--btn">Enroll</a>
          </div>
          {isMore ? (
            <>
              <div
                className="courses--section__box view-animation added-course"
                id="more"
              >
                <h3 className="courses--section__header">
                  Introduction to Web Development
                </h3>
                <p className="courses--item">
                  Duration:
                  <br />
                  <span>6 months</span>
                </p>
                <p className="courses--item">
                  Requirements:
                  <br />
                  <span>PC and Internet</span>
                </p>
                <p className="courses--item">
                  Contents:
                  <br />
                  <span>HTML, CSS, and Javascript</span>
                </p>
                <p className="courses--item">
                  Fee:
                  <br />
                  <span>N89K</span>
                </p>
                <a className="courses--btn">Enroll</a>
              </div>
              <div
                className="courses--section__box view-animation added-course"
                id="more"
              >
                <h3 className="courses--section__header">
                  Introduction to Programming
                </h3>
                <p className="courses--item">
                  Duration:
                  <br />
                  <span>1 week</span>
                </p>
                <p className="courses--item">
                  Requirements:
                  <br />
                  <span>PC and Internet</span>
                </p>
                <p className="courses--item">
                  Contents:
                  <br />
                  <span>Fundamentals of Programming</span>
                </p>
                <p className="courses--item">
                  Fee:
                  <br />
                  <span>N29K</span>
                </p>
                <a className="courses--btn">Enroll</a>
              </div>
              <div
                className="courses--section__box view-animation added-course"
                id="more"
              >
                <h3 className="courses--section__header">
                  Mobile <br />
                  Development
                </h3>
                <p className="courses--item">
                  Duration:
                  <br />
                  <span>6 months</span>
                </p>
                <p className="courses--item">
                  Requirements:
                  <br />
                  <span>PC and Internet</span>
                </p>
                <p className="courses--item">
                  Contents:
                  <br />
                  <span>Flutter</span>
                </p>
                <p className="courses--item">
                  Fee:
                  <br />
                  <span>N99K</span>
                </p>
                <a className="courses--btn">Enroll</a>
              </div>
            </>
          ) : (
            ""
          )}
          <a
            href="#more"
            className="more-btn"
            onClick={() => {
              setIsMore(!isMore);
            }}
          >
            View More Courses{" "}
            {isMore ? <span>&uarr;</span> : <span>&darr;</span>}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Courses;
