import React from "react";
import "../styles/industries.css";

import industriesHero from "../assets/industries-hero-all.png";
import agentAndPhysicsAI from "../assets/agnentAndPhysicsAi.jpeg";

/* =========================================================
   INDUSTRIES DATA
========================================================= */

const industries = [
  {
    title: "Steel & Metals",
    description:
      "Structural intelligence, equipment monitoring, predictive maintenance and process optimization.",
    landingDescription:
      "Intelligent steel plants from structure to process.",
    solutions: [
      "Structural Health Monitoring",
      "Equipment Intelligence",
      "Predictive Maintenance",
      "Process Optimization",
      "Energy Optimization",
    ],
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a82cf59d81_47d6265952ba455a.png",
    slug: "steel-metals",
  },

  {
    title: "Power & Energy",
    description:
      "Critical asset monitoring, predictive analytics, digital twins and energy intelligence.",
    landingDescription:
      "Making critical energy infrastructure more intelligent.",
    solutions: [
      "Critical Asset Monitoring",
      "Predictive Analytics",
      "Digital Twins",
      "Energy Intelligence",
    ],
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7fd41568fc_f416667f68770c5c.png",
    slug: "power-energy",
  },

  {
    title: "Manufacturing",
    description:
      "Machine intelligence, process optimization, predictive maintenance and OEE improvement.",
    landingDescription:
      "From machine data to production intelligence.",
    solutions: [
      "Machine Intelligence",
      "Process Optimization",
      "Predictive Maintenance",
      "OEE Improvement",
    ],
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_701c4fe52d_7d7d77e26826bdcd.png",
    slug: "manufacturing",
  },

  {
    title: "Oil & Gas",
    description:
      "Asset integrity, equipment intelligence, predictive maintenance and process analytics.",
    landingDescription:
      "Predictive intelligence for critical assets and processes.",
    solutions: [
      "Asset Integrity",
      "Equipment Intelligence",
      "Predictive Maintenance",
      "Process Analytics",
    ],
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_920101a5b4_40475e44baf857be.png",
    slug: "oil-gas",
  },

  {
    title: "Cement",
    description:
      "Equipment health, process optimization and energy intelligence.",
    landingDescription:
      "Improve equipment reliability and energy performance.",
    solutions: [
      "Equipment Health",
      "Process Optimization",
      "Energy Intelligence",
    ],
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ac10840285_0487fcd4b47a883a.png",
    slug: "cement",
  },

  {
    title: "Mining",
    description:
      "Heavy equipment intelligence, predictive maintenance and operational optimization.",
    landingDescription:
      "Intelligence for assets operating in the toughest environments.",
    solutions: [
      "Heavy Equipment Intelligence",
      "Predictive Maintenance",
      "Operational Optimization",
    ],
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_92e077696f_ed08bb2d3271bb24.png",
    slug: "mining",
  },

  {
    title: "Infrastructure",
    description:
      "Structural health monitoring and intelligent asset lifecycle management.",
    landingDescription:
      "Make critical structures measurable, monitorable and predictable.",
    solutions: [
      "Structural Health Monitoring",
      "Asset Lifecycle Management",
    ],
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8c3466c77f_503499c7cebaa88b.png",
    slug: "infrastructure",
  },

  {
    title: "Heavy Engineering",
    description:
      "Engineering intelligence, digital twins and predictive asset analytics.",
    landingDescription:
      "Engineering intelligence for complex industrial systems.",
    solutions: [
      "Engineering Intelligence",
      "Digital Twins",
      "Predictive Asset Analytics",
    ],
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_68c32d1872_d34f8fae6217f0b0.png",
    slug: "heavy-engineering",
  },
];

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function Eyebrow({ children, centered = false }) {
  return (
    <div
      className={`industries-eyebrow ${
        centered ? "eyebrow-centered" : ""
      }`}
    >
      <span className="eyebrow-line" />

      {children}

      <span className="eyebrow-line" />
    </div>
  );
}

function SecondaryButton({
  children,
  href = "#industries",
}) {
  return (
    <a
      href={href}
      className="industry-secondary-btn"
    >
      {children}
      <span>↓</span>
    </a>
  );
}

function HowItWorksList({ items }) {
  return (
    <div className="how-it-works-list">
      {items.map((item) => (
        <div
          className="how-it-works-item"
          key={item}
        >
          <span className="how-it-works-dot" />
          <h4>{item}</h4>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   INDUSTRY CARD
========================================================= */

function IndustryCard({ industry, index }) {
  return (
    <article
      className={`industry-card industry-card-${index + 1}`}
    >
      <div className="industry-card-image">
        <img
          src={industry.image}
          alt={industry.title}
        />

        <div className="industry-card-image-overlay" />
      </div>

      <div className="industry-card-content">
        <h3>{industry.title}</h3>

        <p>
          {industry.landingDescription}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   INDUSTRIES PAGE
========================================================= */

function Industries() {
  return (
    <main className="industries-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="industries-hero"
      >
        <div
          className="industries-hero-banner"
          style={{
            backgroundImage: `url(${industriesHero})`,
          }}
        />

        <div className="industries-hero-banner-overlay" />

        <div className="industries-hero-grid" />

        <div className="industries-hero-inner">

          <div className="industries-hero-content">

            <Eyebrow>
              INDUSTRIAL INTELLIGENCE
            </Eyebrow>

            <h1>
              Intelligence for Every
              <span>
                Industrial Environment
              </span>
            </h1>

            <p>
              MeghaAI combines engineering intelligence,
              industrial data, physics, digital twins and
              AI agents to understand complex industrial
              systems, reason about what is happening and
              turn that understanding into intelligent action.
            </p>

            {/* ONLY HERO BUTTON */}

            <div className="industries-hero-actions">

              <SecondaryButton>
                Explore Industries
              </SecondaryButton>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INDUSTRIES GRID
      ===================================================== */}

      <section
        id="industries"
        className="industries-grid-section"
      >
        <div className="industries-container">

          <div className="section-heading-row">

            <div>

              <Eyebrow>
                INDUSTRIES
              </Eyebrow>

              <h2>
                Intelligence Across Industries
              </h2>

            </div>

          </div>

          <div className="industry-card-grid">

            {industries.map(
              (industry, index) => (
                <IndustryCard
                  key={industry.slug}
                  industry={industry}
                  index={index}
                />
              )
            )}

          </div>

        </div>
      </section>

     

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        id="contact"
        className="industry-final-cta"
      >

        <div className="cta-grid" />

        <div className="cta-glow" />

        <div className="industries-container">

          <div className="cta-content">

            <Eyebrow centered>
              CONTACT
            </Eyebrow>

            <h2>
              Turn Industrial Data
              <span>Into Intelligent Action</span>
            </h2>

            {/* ONLY OTHER BUTTON */}

            <a
              href="/contact"
              className="cta-button"
            >
              Talk to an Expert
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Industries;