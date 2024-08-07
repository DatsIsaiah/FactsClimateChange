// src/pages/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
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
        <p>Hello! I'm Isaiah Ramos, a dedicated researcher at the University of California, working with FACTS to explore the effects of climate change on California's agricultural sector. My research focuses on understanding how changing weather patterns impact key crops like almonds, grapes, strawberries, and lettuce, and what this means for the future of farming in the state.</p>
      </section>

      <section id="climate-change" className="content-section">
        <h2>Understanding Climate Change</h2>
        <p>Climate change refers to long-term shifts in temperatures and weather patterns, primarily due to human activities like burning fossil fuels, deforestation, and industrial processes. These actions increase greenhouse gases in the atmosphere, leading to global warming and altered weather patterns. In California, this manifests as more frequent heatwaves, changing precipitation patterns, and other extreme weather events.</p>
      </section>

      <section id="top-crops" className="content-section">
        <h2>Top Crops in California</h2>
        <ul>
          <li><strong>Almonds:</strong> A major export, bringing in $3.52 billion annually. They thrive in temperatures between 55-80°F.</li>
          <li><strong>Grapes:</strong> Essential for wine production, this crop generates $5.54 billion annually and grows best in temperatures ranging from 50-90°F.</li>
          <li><strong>Strawberries:</strong> With an annual value of $2.68 billion, strawberries are sensitive to temperatures above 80°F.</li>
          <li><strong>Lettuce:</strong> A staple crop, especially in coastal areas, with optimal growth at 60-70°F.</li>
        </ul>
      </section>

      <section id="impact" className="content-section">
        <h2>Impact of Climate Change on Crops</h2>
        <p>Climate change poses significant threats to agriculture in California:</p>
        <ul>
          <li><strong>Temperature Stress:</strong> Higher temperatures can exceed the optimal growing conditions for many crops, leading to reduced yields and quality. For example, almonds require specific chill hours during winter, which are decreasing due to warmer winters.</li>
          <li><strong>Water Scarcity:</strong> Changes in precipitation patterns and increased evaporation rates can lead to water shortages, affecting irrigation and overall crop health.</li>
          <li><strong>Pest and Disease Proliferation:</strong> Warmer climates can lead to the spread of pests and diseases that were previously controlled by colder temperatures.</li>
        </ul>
        <p>These challenges can result in lower production volumes, increased costs for farmers, and higher prices for consumers.</p>
      </section>

      <section id="conclusion" className="content-section">
        <h2>Conclusion</h2>
        <p>The effects of climate change are already being felt across California's agricultural sector, impacting the viability and profitability of its key crops. As we continue to study these changes, it becomes increasingly important to raise awareness and understand the potential future impacts. By staying informed and prepared, we can work towards securing a sustainable future for California's agriculture and ensure that this vital industry can continue to thrive despite the challenges posed by a changing climate.</p>
      </section>

      <section id="how-to-use" className="content-section">
        <h2>How to Use Our Platform</h2>
        <p><strong>Search by County:</strong> Enter your county to see detailed climate and agricultural data specific to your area. Disclaimer: Ventura and Tulare are unable to display their crop charts as there is an error and not enough time to fix.</p>
        <Link to="/counties" className="explore-button">Search by County</Link> {/* Link to Counties page */}
        <p><strong>Search by Crop:</strong> Look up specific crops to understand their growing conditions and how they are affected by climate change in different regions.</p>
        <Link to="/crops" className="explore-button">Search by Crop</Link> {/* Link to Crops page */}
      </section>
    </div>
  );
}

export default Home;
