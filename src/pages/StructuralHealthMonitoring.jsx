import { motion } from "framer-motion";
import { Link } from "react-router-dom";
 
import "../styles/structural-health-monitoring.css";
import warehouseImage from "../assets/products/shm/industryApplication/warehouse.jpeg";
 
 
/* =========================================================
   IMAGE ASSETS
========================================================= */
 
const heroImage =
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e874031d33_0e350112ba574460.png";
 
const roiImage =
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5f958bbf4d_a301bfd173dff889.png";
 
/* =========================================================
   INDUSTRY APPLICATIONS
========================================================= */
 
const applications = [
  {
    title: "Heavy Manufacturing & Steel Mills",
    description:
      "Monitor extreme dynamic loads, crane girders, and severe thermal cycles.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_38a6e4ccf6_fb42f263e0b220fb.png",
  },
  {
    title: "Bridges & Infrastructure",
    description:
      "Track structural deflection, fatigue cycles, and dynamic seismic responses.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9aa491e7a4_f19032f02dc0ad7e.png",
  },
  {
    title: "Warehouses & High-Bay Storage",
    description:
      "Prevent overloading failures and continuously monitor structural integrity under shifting live loads.",
    image:
      warehouseImage,
  },
  {
    title: "Energy & Offshore Facilities",
    description:
      "Detect structural fatigue, weld joint stress, and environmental corrosion in high-risk zones.",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_11fc9d739e_f2f8c8d3d8386fca.png",
  },
];
 
/* =========================================================
   VALUE PROPOSITION
========================================================= */
 
const impactCards = [
  {
    title: "Predictive Risk Elimination",
    description:
      "Transition from high-cost emergency repairs to proactive condition-based maintenance before fatigue turns into failure.",
  },
  {
    title: "24/7 Continuous Asset Integrity",
    description:
      "Agentic AI and Physics AI continuously analyze asset behavior, detect anomalies, and deliver real-time integrity intelligence to your central dashboard.",
  },
  {
    title: "Engineering Precision",
    description:
      "Drive every capital maintenance decision with Agentic AI and Physics AI, combining real-time intelligence with physics-based models for precise, evidence-driven asset assessment.",
  },
];
 
/* =========================================================
   BUSINESS ROI
========================================================= */
 
const roiItems = [
  {
    icon: "◷",
    title: "Unplanned Downtime Reduction",
    description:
      "Identify micro-defects early to align structural repairs with scheduled maintenance shutdowns.",
  },
  {
    icon: "✓",
    title: "Extended Asset Lifetime",
    description:
      "Validate structural safety margins under actual operational conditions to extend functional asset lifespan.",
  },
  {
    icon: "▣",
    title: "Compliance & Risk Mitigation",
    description:
      "Maintain automated, immutable audit logs to satisfy regulatory requirements and lower risk premiums.",
  },
];
 
/* =========================================================
   COMPONENT
========================================================= */
 
function StructuralHealthMonitoring() {
  return (
    <main className="shm-page">
 
      {/* =====================================================
          SHM SUB NAVIGATION
      ===================================================== */}
 
      <nav className="shm-subnav">
 
        <div className="shm-subnav-inner">
 
          <div className="shm-subnav-brand">
            SHM
          </div>
 
          <div className="shm-subnav-scroll">
 
            <div className="shm-subnav-links">
 
              <a href="#shm-hero">
                Overview
              </a>
 
              <a href="#core-impact">
                Core Impact
              </a>
<a href="#applications">
                Applications
              </a>
 
              <a href="#business-roi">
                Business ROI
              </a>
</div>
 
          </div>
 
          <Link
            to="/contact"
            className="shm-subnav-cta"
          >
            Request Demo
            <span>↗</span>
          </Link>
 
        </div>
 
      </nav>
 
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
 
      <div className="shm-glow shm-glow-top" />
      <div className="shm-glow shm-glow-bottom" />
 
      {/* =====================================================
          HERO
      ===================================================== */}
 
      <section
        id="shm-hero"
        className="shm-hero shm-shell"
      >
 
        <motion.div
          className="shm-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
 

 
          <motion.h1
            className="shm-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <span className="shm-gradient-text">
              Real-Time Structural Intelligence
            </span>
          </motion.h1>
 
          <motion.p
            className="shm-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            Continuous, sensor-driven Structural Health Monitoring (SHM)
            engineered to prevent catastrophic failure, optimize maintenance
            overhead, and maximize asset lifespan.
          </motion.p>
 
          <motion.div
            className="shm-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
 
            {/* <a
              href="#how-it-works"
              className="shm-button shm-button-secondary"
            >
              How it Works
              <span>↓</span>
            </a>
  */}
          </motion.div>
 
        </motion.div>
 
        {/* HERO IMAGE */}
 
        <motion.div
          className="shm-hero-visual"
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
 
          <div className="shm-image-glow" />
 
          <div className="shm-image-frame">
 
            <img
              src={heroImage}
              alt="Steel structure equipped with structural health monitoring sensors"
            />
 

 
          </div>
 
        </motion.div>
 
      </section>
 
      {/* =====================================================
          VALUE PROPOSITION
      ===================================================== */}
 
      <section
        id="core-impact"
        className="shm-section shm-shell"
      >
 
        <div className="shm-section-heading">
 
          <h2>
            Value Proposition &{" "}
            <span className="shm-gradient-text">
              Core Impact
            </span>
          </h2>
 
          <div className="shm-heading-line" />
 
        </div>
 
        <div className="shm-impact-grid">
 
          {impactCards.map((card, index) => (
 
            <motion.article
              className="shm-impact-card"
              key={card.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
 
              <h3>
                {card.title}
              </h3>
 
              <p>
                {card.description}
              </p>
 
            </motion.article>
 
          ))}
 
        </div>
 
      </section>

{/* =====================================================
    HOW IT WORKS INTRO
===================================================== */}

<section
  id="how-it-works"
  className="shm-section shm-how-section shm-shell"
>
  <div className="shm-how-heading">

    <div>

      <h2>
        How{" "}
        <span className="shm-gradient-text">
          It Works
        </span>
      </h2>
    </div>

    <p>
      Our Structural Health Monitoring (SHM) platform converts static
      steel infrastructure into a continuous stream of real-time
      operational data. By integrating ruggedized sensor hardware with
      edge computing and predictive analytics, we eliminate the blind
      spots of traditional inspections.
    </p>

  </div>
</section>

      {/* =====================================================
          INDUSTRY APPLICATIONS
      ===================================================== */}

 
      <section
        id="applications"
        className="shm-section shm-shell"
      >
 
        <div className="shm-section-intro">
 
          <div className="shm-section-intro-copy">
 
            <h2>
              Industry{" "}
              <span className="shm-gradient-text">
                Applications
              </span>
            </h2>
 
          </div>
 
        </div>
 
        <div className="shm-applications-grid">
 
          {applications.map((application, index) => (
 
            <motion.article
              className="shm-application-card"
              key={application.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
 
              <img
                src={application.image}
                alt={application.title}
              />
 
              <div className="shm-application-overlay">
 
                <h3>
                  {application.title}
                </h3>
 
                <p>
                  {application.description}
                </p>
 
              </div>
 
            </motion.article>
 
          ))}
 
        </div>
 
      </section>
 
      {/* =====================================================
          BUSINESS ROI
      ===================================================== */}
 
      <section
        id="business-roi"
        className="shm-section shm-shell shm-roi-section"
      >
 
        <motion.div
          className="shm-roi-image"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
 
          <img
            src={roiImage}
            alt="Industrial manager reviewing structural monitoring data"
          />
 
          <div className="shm-roi-overlay" />
 
        </motion.div>
 
        <motion.div
          className="shm-roi-copy"
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
 
          <div className="shm-roi-heading">
 
            {/* <span className="shm-kicker shm-kicker-magenta">
              Enterprise
            </span> */}
 
            <h2>
              Business{" "}
              <span className="shm-gradient-text">
                ROI
              </span>
            </h2>
 
          </div>
 
          <div className="shm-roi-list">
 
            {roiItems.map((item) => (
 
              <div
                className="shm-roi-item"
                key={item.title}
              >
 
                <div className="shm-roi-icon">
                  {item.icon}
                </div>
 
                <div className="shm-roi-content">
 
                  <h3>
                    {item.title}
                  </h3>
 
                  <p>
                    {item.description}
                  </p>
 
                </div>
 
              </div>
 
            ))}
 
          </div>
 
        </motion.div>
 
      </section>
{/* =====================================================
          FINAL CTA
      ===================================================== */}
 
      <section className="shm-cta shm-shell">
 
        <motion.div
          className="shm-cta-inner"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
 
          <div className="shm-cta-pattern" />
 
          <div className="shm-cta-content">
 
            <h2>
              Start Your
              Journey Today
            </h2>
 
 
            <div className="shm-cta-actions">
 
              <Link
                to="/contact"
                className="shm-cta-light"
              >
                Schedule Demo
              </Link>
 
            </div>
 
          </div>
 
        </motion.div>
 
      </section>
 
    </main>
  );
}
 
export default StructuralHealthMonitoring;