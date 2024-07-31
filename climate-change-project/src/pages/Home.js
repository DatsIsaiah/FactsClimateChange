import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="introduction">
        <h1>Climate Change and Crop Production in California</h1>
        <p>This research investigates the effects of climate change on crop production in California, focusing on specific crops, regional climate changes, and future projections.</p>
        <p>Our study covers various aspects such as the economic impacts, sustainability issues, and possible adaptation strategies for different regions.</p>
      </section>
      <section className="highlights">
        <h2>Research Highlights</h2>
        <ul>
          <li>Almonds, grapes, and other major crops are at risk due to temperature extremes.</li>
          <li>Economic impacts are significant, especially in high-value crops.</li>
          <li>Adaptation strategies include adopting heat-resistant crop varieties and improving irrigation practices.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
