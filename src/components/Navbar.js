import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>

    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //   <a class="navbar-brand" href="#">
    //     Navbar
    //   </a>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-bs-toggle="collapse"
    //     data-bs-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //     <li class="nav-item">
    //       <a class="nav-link active" aria-current="page" href="#">
    //         About
    //       </a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">
    //         Portfolio
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  // );

)
}

export default Navbar;
