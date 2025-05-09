import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot__container container">
        <h1 className="footer__title">Shivam</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="" className="footer__link"></a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/tibba_dislikesyou7/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/shivammishra7/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/Shivamt7"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Shivam. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
