import { Link } from "react-router-dom";
import "../styles/solutions.css";

import Solution1 from "../assets/solutions/Solution_1.png";
import Solution2 from "../assets/solutions/Solution_2.png";
import Solution3 from "../assets/solutions/Solution_3.png";
import Solution4 from "../assets/solutions/Solution_4.png";
import Solution5 from "../assets/solutions/Solution_5.png";
import Solution6 from "../assets/solutions/Solution_6.jpeg";
import Solution7 from "../assets/solutions/Solution_7.jpeg";
import Solution8 from "../assets/solutions/Solution_8.jpeg";

import agentAndPhysicsAI from "../assets/agnentAndPhysicsAi.jpeg";

const contactDetails = [];

const modules = [
  {
    type: "data-lake",
    eyebrow: "",
    title: "Intelligence Data Lake",
    description: [
      "Brings together engineering data, analysis results, machine and PLC data, maintenance records, quality data, documents, and business information into one connected intelligence layer. This allows MeghaAI to understand the relationships between machines, components, processes, and events so AI can identify changes, understand why they are happening, and recommend what to do next.",
    ],
    image: Solution7,
    imageAlt: "Industrial data infrastructure connecting machines, systems and sensors",
    reverse: false,
  },

  {
    type: "core",
    eyebrow: "",
    title: "Condition-Based Monitoring",
    description: [
      "Continuously monitors the health and behaviour of machines and physical systems using signals such as vibration, temperature, pressure, strain, displacement, and tilt. It identifies abnormal behaviour and deviations from normal operating conditions so teams can detect potential problems earlier and understand machine health more clearly.",
    ],
    image: Solution1,
    imageAlt: "Industrial turbine with AI predictive maintenance visualization",
    reverse: true,
  },

  {
    type: "root-cause",
    eyebrow: "",
    title: "Root Cause Analysis",
    description: [
      "Identifies the underlying reason behind equipment failures, abnormal behaviour, or process problems by connecting machine signals, events, historical data, engineering information, and operating conditions. Instead of only showing that a problem occurred, MeghaAI helps teams understand why it happened and where to investigate.",
    ],
    image: Solution8,
    imageAlt: "Industrial root cause analysis using connected operational data",
    reverse: false,
  },

  {
    type: "optimization",
    eyebrow: "",
    title: "Predictive Maintenance",
    description: [
      "Moves beyond detecting abnormalities to anticipating what may happen next. By combining historical behaviour, real-time physical signals, operating conditions, and degradation patterns, it helps teams identify emerging risks and schedule action before failures disrupt operations.",
    ],
    image: Solution2,
    imageAlt: "AI dashboard showing industrial process optimization charts",
    stats: [],
    reverse: true,
  },

  {
    type: "logistics",
    eyebrow: "",
    title: "Process Optimization",
    description: [
      "Connects physical behaviour with operating conditions and system variables to show what is driving performance. It helps teams identify relationships, evaluate trade-offs, and uncover opportunities to improve efficiency, stability, output, and utilization with more informed decisions.",
    ],
    image: Solution3,
    imageAlt: "Global logistics network with connected supply chain routes",
    features: [],
    reverse: false,
  },

  {
    type: "pharma",
    eyebrow: "",
    title: "3D Digital Twin",
    description: [
      "Builds a dynamic digital representation of a physical system using real-world observations, asset information, engineering knowledge, and models. It helps teams explore system behaviour, investigate conditions, and test scenarios virtually before making decisions in the real world.",
    ],
    image: Solution4,
    imageAlt: "Pharmaceutical manufacturing process with AI quality monitoring",
    reverse: true,
  },

  {
    type: "automotive",
    eyebrow: "",
    title: "Engineering Intelligence",
    description: [
      "Connects engineering knowledge with the conditions seen in real systems. By bringing together technical documents, specifications, calculations, standards, models, and domain expertise, it helps AI interpret physical behaviour in the right technical context and support better engineering decisions.",
    ],
    image: Solution5,
    imageAlt: "Automotive production line with AI monitoring and optimization",
    reverse: false,
  },

  {
    type: "ai-agents",
    eyebrow: "",
    title: "AI Agents & Core AI Models",
    description: [
      "Creates no-code AI models and task-oriented agents designed for complex physical-system problems. These systems can interpret signals, reason across multiple information sources, investigate likely causes, predict what may happen next, and recommend actions that help teams move from manual analysis to proactive decision-making.",
    ],
    image: Solution6,
    imageAlt: "AI agents and core AI models for physical intelligence",
    reverse: true,
  },
];

function Solutions() {
  return (
    <main className="solutions-page">

      {/* =====================================================
          PLATFORM PAGE GLOWS
      ===================================================== */}

      <div className="solutions-glow solutions-glow-right" />
      <div className="solutions-glow solutions-glow-left" />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="solutions-hero">

        <h1>
          Physical{" "}
          <span className="solutions-gradient-text">
            Intelligence Platform
          </span>
        </h1>

        <p>
          A unified foundation that connects engineering knowledge, analysis data, industrial data, physics, multimodal observations and AI—turning complex operational information into a shared understanding of physical systems and enabling faster, more informed decisions across the enterprise.
        </p>

      </section>

      {/* =====================================================
          PLATFORM MODULES
      ===================================================== */}

      <section className="solutions-modules">

        {modules.map((module) => (
          <article
            className={`solution-module solution-module-${module.type} ${module.reverse ? "solution-module-reverse" : ""
              }`}
            key={module.title}
          >

            <div className="solution-module-glow" />

            <div className="solution-module-content">

              {module.eyebrow && (
                <div className="solution-module-eyebrow">
                  {module.eyebrow}
                </div>
              )}

              <h2>{module.title}</h2>

              {/* <div className="solution-module-meaning-label">
                {module.meaningLabel || "What it means"}
              </div> */}

              {Array.isArray(module.description) ? (
                <div className="solution-module-description">

                  {module.description.map((paragraph, idx) => (
                    <p key={`${module.title}-paragraph-${idx}`}>
                      {paragraph}
                    </p>
                  ))}

                </div>
              ) : (
                <p className="solution-module-description">
                  {module.description}
                </p>
              )}

              {/* FEATURES */}

              {module.features &&
                module.type !== "logistics" &&
                module.features.length > 0 && (
                  <div className="solution-features">

                    {module.features.map((feature) => (
                      <div
                        className="solution-feature"
                        key={feature.title}
                      >

                        <div className="solution-feature-icon">
                          {feature.icon}
                        </div>

                        <div>
                          <h3>{feature.title}</h3>
                          <p>{feature.text}</p>
                        </div>

                      </div>
                    ))}

                  </div>
                )}

              {/* STATS */}

              {module.stats && module.stats.length > 0 && (
                <div className="solution-stats">

                  {module.stats.map((stat) => (
                    <div
                      className="solution-stat"
                      key={stat.label}
                    >
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}

                </div>
              )}

              {/* CHECK LIST */}

              {module.type === "logistics" &&
                module.features &&
                module.features.length > 0 && (
                  <ul className="solution-check-list">

                    {module.features.map((feature) => (
                      <li key={feature}>
                        <span className="solution-check">
                          ✓
                        </span>

                        {feature}
                      </li>
                    ))}

                  </ul>
                )}

              {/* LINK */}

              {module.linkText && (
                <Link
                  to="/contact"
                  className="solution-module-link"
                >
                  {module.linkText}
                  <span>→</span>
                </Link>
              )}

            </div>

            <div className="solution-module-visual">

              <img
                src={module.image}
                alt={module.imageAlt}
              />

            </div>

          </article>
        ))}

      </section>

      {/* =====================================================
          AGENTIC AI + PHYSICAL AI
      ===================================================== */}

      <section
        id="agentic-physical-ai"
        className="solutions-agentic-section"
      >
        <div className="solutions-agentic-container">

          <div className="solutions-agentic-layout">

            {/* =====================================================
          MOBILE + TABLET HEADING
          AGENTIC EYEBROW → H2
          ===================================================== */}

            <div className="solutions-agentic-mobile-heading">

              <div className="solutions-agentic-mobile-eyebrow">
                <span className="solutions-agentic-eyebrow-line" />
                AGENTIC AI + PHYSICAL AI
              </div>

              <h2>
                AI that acts,{" "}
                <span>not just answers.</span>
              </h2>

            </div>


            {/* =====================================================
          IMAGE
          ===================================================== */}

            <div className="solutions-agentic-visual">

              <img
                src={agentAndPhysicsAI}
                alt="MeghaAI Agentic AI and Physical AI intelligence"
              />

            </div>


            {/* =====================================================
          CONTENT
          DESKTOP:
          EYEBROW → H2 → DESCRIPTION

          TABLET / MOBILE:
          DESCRIPTION ONLY
          ===================================================== */}

            <div className="solutions-agentic-content">

              <div className="solutions-agentic-eyebrow">
                <span className="solutions-agentic-eyebrow-line" />
                AGENTIC AI + PHYSICAL AI
              </div>

              <h2 className="solutions-agentic-desktop-heading">
                AI that acts,{" "}
                <span>not just answers.</span>
              </h2>

              <p className="solutions-agentic-intro">
                Intelligence is moving beyond dashboards, alerts and isolated predictions. We combine Agentic AI with Physical AI to connect perception, reasoning and action—enabling intelligent systems to understand physical conditions, reason across operational and engineering context, determine what needs to happen next, and support action in the real industrial environment.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="solutions-bottom-cta">

        <div className="solutions-cta-copy">

          <span>
            BUILD WITH US
          </span>

          <h3>
            Bring physical intelligence into the way your teams operate,
            maintain and engineer physical systems.
          </h3>

          <div className="solutions-cta-contact">

            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="solutions-cta-contact-item"
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >

                <span>{item.label}</span>

                <strong>{item.value}</strong>

              </a>
            ))}

          </div>

        </div>

        <Link
          to="/contact"
          className="solutions-cta-button"
        >
          Talk to an Expert →
        </Link>

      </section>

    </main>
  );
}

export default Solutions;