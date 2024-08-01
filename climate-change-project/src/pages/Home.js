import React, { useEffect } from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar component
import './Home.css';

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > window.innerHeight - 50) {
          navbar.classList.add('navbar-visible');
        } else {
          navbar.classList.remove('navbar-visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <NavBar /> {/* Ensure NavBar is included only once */}

      <section id="home" className="intro-section">
        <div className="intro-content">
          <h1>Climate Change and the Effects on Crops in California</h1>
          <p>An in-depth research study on the impact of climate change on California's agriculture.</p>
          <a href="#about" className="explore-button">Explore More</a>
        </div>
      </section>

      <section id="about" className="content-section">
        <h2>About the Project</h2>
        <p>This research investigates the effects of climate change on crop production in California, focusing on specific crops, regional climate changes, and future projections. Our study covers various aspects such as the economic impacts, sustainability issues, and possible adaptation strategies for different regions.</p>
      </section>

      <section id="how-to-use" className="content-section">
        <h2>How to Use</h2>
        <p>Guidance on how to use the website and interpret the data provided. This section will help users navigate through the site and understand the findings and recommendations presented.</p>
      </section>

      <section id="contact" className="content-section">
        <h2>Contact</h2>
        <p>Contact information for further inquiries and collaboration opportunities. Reach out to us for more details about our research and how you can contribute.</p>
      </section>
    </div>
  );
}

export default Home;
