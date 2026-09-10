// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "../styles/resources.css";
// import blog1 from "../assets/blog/RE.B1.avif";
// import blog2 from "../assets/blog/RE.B2.avif";
// import blog3 from "../assets/blog/RE.B3.avif";
// import blog4 from "../assets/blog/RE.B4.avif";
// import blog5 from "../assets/blog/RE.B5.avif";
// import blog6 from "../assets/blog/RE.B6.avif";
// import blog7 from "../assets/blog/RE.B7.avif";
// import blog8 from "../assets/blog/RE.B8.avif";
// import blog9 from "../assets/blog/RE.B9.avif";

// const blogs = [
//   {
//     id: 1,
//     title: "Five most dangerous trends facing manufacturers today",
//     date: "Mar 26, 2023",
//     image: blog1,
//     preview: "Explore the major risks manufacturers face including regulations, digital disruption and market shifts."
//   },
//   {
//     id: 2,
//     title: "3D Digital Twins and AI for Predictive Analytics in Industry",
//     date: "Jan 11, 2023",
//     image: blog2,
//     preview: "How digital twins and AI transform predictive maintenance and operational intelligence."
//   },
//   {
//     id: 3,
//     title: "Navigating the transition to Industry 4.0: Challenges, opportunities...",
//     date: "Dec 29, 2022",
//     image: blog3,
//     preview: "How manufacturers can successfully transition to Industry 4.0 with AI and IoT."
//   },
//   {
//     id: 4,
//     title: "Effortlessly Monitor Your Manufacturing Assets",
//     date: "Dec 29, 2022",
//     image: blog4,
//     preview: "How to monitor manufacturing assets with minimal effort using AI."
//   },
//   {
//     id: 5,
//     title: "Maximizing Efficiency and Quality in Manufacturing",
//     date: "Dec 26, 2022",
//     image: blog5,
//     preview: "How to maximize efficiency and quality in manufacturing operations."
//   },
//   {
//     id: 6,
//     title: "How Manufacturing companies can save energy using IOT data?",
//     date: "Dec 26, 2022",
//     image: blog6,
//     preview: "How to save energy in manufacturing using IoT data."
//   },
//   {
//     id: 7,
//     title: "6 Ways Anomaly Detection Can Benefit Manufacturing Operations",
//     date: "Dec 26, 2022",
//     image: blog7,
//     preview: "How anomaly detection can improve manufacturing operations."
//   },
//   {
//     id: 8,
//     title: "Monitoring Asset Health with Megha AI Solution.",
//     date: "Jul 10, 2022",
//     image: blog8,
//     preview: "How Megha AI helps monitor asset health in manufacturing."
//   },
//   {
//     id: 9,
//     title: "Megha AI as AI-ML based insights solution provider for State of Indiana.",
//     date: "Mar 3, 2022",
//     image: blog9,
//     preview: "How Megha AI provides AI-ML based insights for the State of Indiana."
//   }
// ];

// export default function ResourcesPage() {
//   return (
//     <>
//       <div className="resources-page">

//         {/* Page Title */}
//         <h1 className="resources-title">BLOGS</h1>

//         {/* Blog Grid */}
//         <div className="blog-grid">
//           {blogs.map((blog) => (
//             <Link 
//               to={`/blog/${blog.id}`} 
//               key={blog.id} 
//               className="blog-link"
//             >
//               <div className="blog-card">
//                 <div className="blog-image">
//                   <img src={blog.image} alt={blog.title} />
//                 </div>

//                 <div className="blog-content">
//                   <p className="blog-date">{blog.date}</p>
//                   <h3>{blog.title}</h3>
//                   <div className="read-more">
//                     Read More →
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/resources.css";

const insights = [
  {
    category: "Industrial AI",
    readTime: "8 min read",
    title: "What Is the Intelligence Layer for Industrial Operations?",
    description:
      "Why industrial organizations need more than disconnected dashboards, sensors and data systems to make better operational decisions.",
    author: "MeghaAI Engineering Team",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_391008c883_91228a134450805f.png",
    color: "magenta",
  },
  {
    category: "Engineering Intelligence",
    readTime: "6 min read",
    title: "Why Industrial AI Needs Physics and Engineering Context",
    description:
      "Understanding why domain knowledge, asset behaviour and physical principles are essential for reliable industrial intelligence.",
    author: "MeghaAI Engineering Team",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_6cefd61092_23b1897995bb309c.png",
    color: "orange",
  },
  {
    category: "Digital Twins",
    readTime: "10 min read",
    title: "Digital Twins: Beyond 3D Models",
    description:
      "A practical look at how live data, engineering models and AI can create continuously evolving digital representations of physical assets.",
    author: "MeghaAI Technology Team",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_97a13e72f4_56d1490a614db2cd.png",
    color: "blue",
  },
];

function Resources() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  }

  return (
    <main className="resources-page">
      <div className="resources-glow resources-glow-top" />
      <div className="resources-glow resources-glow-bottom" />

      {/* Header */}
      <section className="resources-header">
        <span className="resources-eyebrow">INDUSTRIAL INTELLIGENCE</span>

        <h1>
          Ideas for a More{" "}
          <span>Intelligent Industrial World</span>
        </h1>

        <p>
          Explore perspectives, technical deep-dives and practical insights
          from the intersection of engineering, industrial data, physics and
          AI.
        </p>
      </section>

      {/* Featured insight */}
      <section className="featured-resource">
        <div className="featured-image">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5a7f0b50db_b4af0a0cd46b7f98.png"
            alt="Industrial facility with digital intelligence visualisation"
          />
          <div className="image-overlay" />
        </div>

        <div className="featured-content">
          <div className="resource-meta">
            <span className="resource-tag orange-tag">Featured Insight</span>
            <span>Industrial Intelligence</span>
          </div>

          <h2>
            From Industrial Data to{" "}
            <span>Actionable Intelligence</span>
          </h2>

          <p>
            Industrial organizations already have machines, sensors,
            engineering data and operational systems. The opportunity is to
            connect these signals into a layer that can understand, predict,
            reason and support action.
          </p>

          {/* Technology page removed */}
        </div>
      </section>

      {/* Resource categories */}
      <section className="resource-categories">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE OUR THINKING</span>
            <h2>
              Knowledge for the{" "}
              <span>physical industrial world.</span>
            </h2>
          </div>

          <p>
            Browse our latest articles, technical perspectives and industrial
            intelligence resources.
          </p>
        </div>

        <div className="category-list">
          <Link to="/insights?category=industrial-ai">
            Industrial AI <span>→</span>
          </Link>

          <Link to="/insights?category=predictive-maintenance">
            Predictive Maintenance <span>→</span>
          </Link>

          <Link to="/insights?category=digital-twins">
            Digital Twins <span>→</span>
          </Link>

          <Link to="/insights?category=engineering-intelligence">
            Engineering Intelligence <span>→</span>
          </Link>

          <Link to="/insights?category=ai-agents">
            AI Agents <span>→</span>
          </Link>

          <Link to="/insights?category=energy">
            Energy & Sustainability <span>→</span>
          </Link>
        </div>
      </section>

      {/* Articles */}
      <section className="insights-section">
        <div className="section-heading compact-heading">
          <div>
            <span className="section-label">LATEST INSIGHTS</span>
            <h2>
              Thinking beyond the{" "}
              <span>dashboard.</span>
            </h2>
          </div>

          <Link to="/insights" className="view-all-link">
            View All Insights <span>→</span>
          </Link>
        </div>

        <div className="insights-grid">
          {insights.map((insight) => (
            <article
              className={`insight-card insight-${insight.color}`}
              key={insight.title}
            >
              <div className="insight-image">
                <img src={insight.image} alt={insight.title} />
              </div>

              <div className="insight-card-content">
                <div className="insight-meta">
                  <span>{insight.category}</span>
                  <small>{insight.readTime}</small>
                </div>

                <h3>{insight.title}</h3>

                <p>{insight.description}</p>

                <div className="insight-footer">
                  <span>{insight.author}</span>

                  <Link to="/insights" aria-label={`Read ${insight.title}`}>
                    +
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Resource library */}
      <section className="resource-library">
        <div className="library-content">
          <span className="section-label">RESOURCE LIBRARY</span>

          <h2>
            Practical knowledge for{" "}
            <span>industrial teams.</span>
          </h2>

          <p>
            Access technical papers, solution briefs, case studies and other
            resources designed to help engineering, maintenance and operations
            teams make better decisions.
          </p>

          <Link to="/contact" className="library-button">
            Request a Resource <span>→</span>
          </Link>
        </div>

        <div className="library-items">
          <div>
            <span>01</span>
            Solution Briefs
          </div>
          <div>
            <span>02</span>
            Technical Papers
          </div>
          <div>
            <span>03</span>
            Case Studies
          </div>
          <div>
            <span>04</span>
            Product Resources
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-icon">✦</div>

        <h2>
          Stay ahead of the{" "}
          <span>industrial intelligence curve.</span>
        </h2>

        <p>
          Receive occasional updates on industrial AI, predictive maintenance,
          engineering intelligence and MeghaAI developments.
        </p>

        {subscribed? (
          <div className="subscription-success">
            Thank you. You have been added to the MeghaAI insights list.
          </div>
        ): (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />

            <button type="submit">Subscribe</button>
          </form>
        )}

        <small>
          We respect your inbox. You can unsubscribe at any time.
        </small>
      </section>
    </main>
  );
}

export default Resources;