import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume/Resume";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContentContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default ContentContainer;
