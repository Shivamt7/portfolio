import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Science and Artificial Intelligence</h3>
                <span className="qualification__subtitle">
                  Indian Institute of Information Technology(IIIT), Dharwad
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Jee Mains</h3>
                <span className="qualification__subtitle">
                  Maths, Physics, Chemistry
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">NWAC</h3>
                <span className="qualification__subtitle">
                  Swarajaya Senior Secondary School, Alwar
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SDE-1 Intern</h3>
                <span className="qualification__subtitle">
                  CodBEE
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  Oct 2024 - Mar 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Personal Project</h3>
                <span className="qualification__subtitle">
                Uber Clone– Ride Booking Web App
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  Feb 2025 - Mar 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Personal Project</h3>
                <span className="qualification__subtitle">
                FoodExpress
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  Jan 2024 - May 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
