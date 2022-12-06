import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Mathéo</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#project" className="footer_link">Projects</a>
                </li>

            </ul>

            <div className="footer_social">
            <a href="https://www.instagram.com/matsuel_" className="footer_social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://github.com/Matsuel" className="footer_social-link" target="_blank">
            <i class="bx bxl-github"></i>
            </a>
            </div>

            <span className="footer_copy">&#169; Matsuel. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer