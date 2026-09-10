import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/vibration-monitoring.css";

import compressorImage from "../assets/products/vibrtion/application/compressor.jpeg";
import fanImage from "../assets/products/vibrtion/application/fan.jpeg";
import motorImage from "../assets/products/vibrtion/application/motor.jpeg";
import generatorImage from "../assets/products/vibrtion/application/generator.jpeg";
import rotaryImage from "../assets/products/vibrtion/application/rotary.jpeg";
import heroImage from "../assets/home/hero2.jpeg";

import roiImage from "../assets/products/ROI.png";



/* =========================================================
   ROTATING EQUIPMENT APPLICATIONS
========================================================= */

const applications = [
  {
    title: "Fans",
    description:
      "Monitor vibration behaviour to detect imbalance, misalignment, bearing degradation and mechanical instability in critical fan systems.",
    image: fanImage,
  },
  {
    title: "Motors",
    description:
      "Understand changing vibration patterns and identify emerging mechanical conditions before they develop into costly failures.",
    image: motorImage,
  },
  {
    title: "Compressors",
    description:
      "Continuously analyse vibration signatures to identify developing mechanical conditions across critical compressor systems.",
    image: compressorImage,
  },
  {
    title: "Generators",
    description:
      "Track vibration behaviour and mechanical condition across generators to support reliable, proactive maintenance.",
    image: generatorImage,
  },
  // {
  //   title: "Any Rotary Equipment",
  //   description:
  //     "Apply vibration intelligence across pumps, gearboxes, turbines and other rotating equipment where mechanical condition matters.",
  //   image: rotaryImage,
  // },
];


/* =========================================================
   PLATFORM ARCHITECTURE
========================================================= */

const architecture = [
  // {
  //   title: "Furnace Instrumentation Network",
  //   label: "THE INPUT",
  //   description:
  //     "High-temperature industrial instrumentation continuously captures vibration, thermal, and operating-condition data across blowers, pumps, gearboxes, and critical furnace drives.",
  //   benefit:
  //     "Replaces manual spot checks with continuous machine health tracking.",
  //   visual: "sensors",
  // },

  // {
  //   title: "Edge Signal Processing",
  //   label: "THE SIGNAL",
  //   description:
  //     "High-frequency sampling and local FFT processing isolate mechanical frequencies while filtering ambient furnace noise.",
  //   benefit:
  //     "Separates true mechanical defects from environmental vibration.",
  //   visual: "fft",
  // },

  // {
  //   title: "AI Predictive Engine",
  //   label: "THE LOGIC",
  //   description:
  //     "AI models evaluate vibration signatures against operating baselines and recognized mechanical fault patterns.",
  //   benefit:
  //     "Detects developing bearing, alignment, and imbalance problems early.",
  //   visual: "ai",
  // },

  // {
  //   title: "Plant HMI & Alerts",
  //   label: "THE OUTPUT",
  //   description:
  //     "Real-time severity scoring, alerts, dashboards, and SCADA integration turn complex vibration data into clear actions.",
  //   benefit:
  //     "Enables maintenance teams to act before catastrophic trips occur.",
  //   visual: "dashboard",
  // },
];


/* =========================================================
   VALUE PROPOSITION
========================================================= */

const impactCards = [
  {
    icon: "◷",
    title: "Prevent Unplanned Outages",
    description:
      "Predictive maintenance allows component replacement during scheduled relining and maintenance cycles instead of emergency shutdowns.",
  },

  {
    icon: "!",
    title: "Catastrophic Failure Prevention",
    description:
      "Early detection of fan unbalance, bearing degradation, misalignment, and pump cavitation helps prevent dangerous mechanical failures.",
  },


  {
    icon: "◆",
    title: "Extended Asset Lifespan",
    description:
      "Continuous monitoring protects high-value mill drives, heavy-duty blowers, pumps, and equipment from fatigue and degradation.",
  },
];


const roiItems = [
  {
    icon: "◷",
    title: "Prevent Unplanned Outages",
    description:
      "Predictive maintenance allows component replacement during scheduled relining and maintenance cycles instead of emergency shutdowns.",
  },
  {
    icon: "!",
    title: "Catastrophic Failure Prevention",
    description:
      "Early detection of fan unbalance, bearing degradation, misalignment, and pump cavitation helps prevent dangerous mechanical failures.",
  },
  {
    icon: "◆",
    title: "Extended Asset Lifespan",
    description:
      "Continuous monitoring protects high-value mill drives, heavy-duty blowers, pumps, and equipment from fatigue and degradation.",
  },
];

const howItWorks = architecture.map((step) => ({
  title: step.title,
  label: step.label,
  description: step.description,
  benefit: step.benefit,
  visual: step.visual,
}));


/* =========================================================
   SPECTRAL ANALYSIS
========================================================= */

const analysisItems = [
  {
    title: "Unbalance Detection",
    description:
      "Dominant running-speed vibration patterns help identify fan and rotating equipment imbalance.",
  },

  {
    title: "Misalignment Detection",
    description:
      "Harmonic patterns reveal developing coupling and shaft alignment problems.",
  },

  {
    title: "Bearing Condition",
    description:
      "High-frequency harmonics identify developing bearing race damage and surface degradation.",
  },

  {
    title: "Severity Evaluation",
    description:
      "Vibration indicators are evaluated against operating baselines and applicable machine condition standards.",
  },
];


/* =========================================================
   TECHNICAL VISUAL
========================================================= */

function TechnicalVisual({ type }) {
  if (type === "sensors") {
    return (
      <div className="vm-tech-visual vm-tech-sensors">

        <div className="vm-fan-frame">
          <div className="vm-fan-ring" />
          <div className="vm-fan-core" />

          <div className="vm-fan-blade" />
          <div className="vm-fan-blade" />
          <div className="vm-fan-blade" />
          <div className="vm-fan-blade" />
        </div>

        <div className="vm-vibration-node vm-node-top" />
        <div className="vm-vibration-node vm-node-right" />
        <div className="vm-vibration-node vm-node-bottom" />
        <div className="vm-vibration-node vm-node-left" />

        <div className="vm-tech-caption">
          LIVE VIBRATION NETWORK
        </div>

      </div>
    );
  }


  if (type === "fft") {
    return (
      <div className="vm-tech-visual vm-tech-fft">

        <div className="vm-fft-grid" />

        <svg
          className="vm-fft-chart"
          viewBox="0 0 500 260"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0 210
              L35 208
              L50 180
              L64 205
              L85 200
              L105 195
              L120 70
              L135 200
              L160 198
              L185 194
              L205 185
              L220 120
              L235 190
              L265 198
              L290 194
              L315 188
              L335 145
              L350 192
              L375 198
              L400 195
              L420 180
              L438 95
              L455 190
              L480 198
              L500 195
            "
            fill="none"
          />
        </svg>

        <div className="vm-fft-peak" />

        <div className="vm-tech-caption">
          FFT SPECTRAL ANALYSIS
        </div>

      </div>
    );
  }


  if (type === "ai") {
    return (
      <div className="vm-tech-visual vm-tech-ai">

        <div className="vm-ai-grid">

          <span />
          <span />
          <span />
          <span />
          <span />

          <span />
          <span />
          <span />
          <span />
          <span />

          <span />
          <span />
          <span />
          <span />
          <span />

          <span />
          <span />
          <span />
          <span />
          <span />

        </div>

        <div className="vm-ai-core" />

        <div className="vm-tech-caption">
          AI FAULT DIAGNOSTICS
        </div>

      </div>
    );
  }


  return (
    <div className="vm-tech-visual vm-tech-dashboard">

      <div className="vm-dashboard-grid">

        <div className="vm-health-score">

          <small>
            MACHINE HEALTH
          </small>

          <strong>
            Stable
          </strong>

          <em>
            CONDITION MONITORING
          </em>

        </div>


        <div className="vm-dashboard-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>

      </div>


      <div className="vm-tech-caption">
        ACTIONABLE VIBRATION INTELLIGENCE
      </div>

    </div>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

function VibrationMonitoring() {
  return (
    <main className="vm-page">


      {/* =====================================================
          SUB NAVIGATION
      ===================================================== */}

      <nav className="vm-subnav">

        <div className="vm-subnav-inner">

          <div className="vm-subnav-brand">
            VIBRATION
          </div>


          <div className="vm-subnav-scroll">

            <div className="vm-subnav-links">

              <a href="#vibration-hero">
                Overview
              </a>

              <a href="#core-impact">
                Core Impact
              </a>

              <a href="#how-it-works">
                How It Works
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
            className="vm-subnav-cta"
          >
            Request Demo
            <span>↗</span>
          </Link>

        </div>

      </nav>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="vm-glow vm-glow-top" />
      <div className="vm-glow vm-glow-bottom" />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="vibration-hero"
        className="vm-hero vm-shell"
      >

        <motion.div
          className="vm-hero-copy"

          initial={{
            opacity: 0,
            y: 24,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >



          <motion.h1
            className="vm-hero-title"

            initial={{
              opacity: 0,
              y: 24,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <span className="vm-gradient-text">
              Vibration Intelligence
            </span>

          </motion.h1>


          <motion.p
            className="vm-hero-description"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >

            Continuous vibration intelligence for rotating
            equipment — helping detect imbalance, misalignment,
            bearing degradation, and emerging mechanical
            conditions before failure.

          </motion.p>


          <motion.div
            className="vm-hero-actions"

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >

            {/* <a
              href="#how-it-works"
              className="vm-button vm-button-secondary"
            >
              How It Works
              <span>↓</span>
            </a> */}

          </motion.div>

        </motion.div>


        {/* HERO IMAGE */}

        <motion.div
          className="vm-hero-visual"

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

          <div className="vm-image-glow" />

          <div className="vm-image-frame">

            <img
              src={heroImage}
              alt="Industrial rotating equipment with vibration monitoring"
            />

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          VALUE PROPOSITION
      ===================================================== */}

      <section
        id="core-impact"
        className="vm-section vm-shell"
      >

        <div className="vm-section-heading">

          <h2>
            Value Proposition &{" "}

            <span className="vm-gradient-text">
              Core Impact
            </span>

          </h2>

          <div className="vm-heading-line" />

        </div>


        <div className="vm-impact-grid">

          {impactCards.map((card, index) => (

            <motion.article
              className="vm-impact-card"
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
                delay: index * 0.08,
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
          HOW IT WORKS
      ===================================================== */}

      <section
        id="how-it-works"
        className="vm-section vm-how-section vm-shell"
      >

        <div className="vm-how-heading">

          <div>
            {/* <span className="vm-kicker vm-kicker-magenta">
              How It Works
            </span> */}

            <h2>
              How{" "}
              <span className="vm-gradient-text">
                It Works
              </span>
            </h2>
          </div>

          <p>
            Our Vibration Monitoring platform combines continuous
            vibration observations, signal processing, spectral
            analysis, engineering knowledge and AI to understand
            the physical behaviour of rotating equipment. By
            analysing vibration patterns and operating conditions,
            it identifies developing mechanical conditions early
            and enables proactive intervention before failure occurs.
          </p>

        </div>

        <div className="vm-how-list">

          {howItWorks.map((step, index) => (
            <motion.article
              className={`vm-how-card ${index % 2 !== 0 ? "vm-how-card-reverse" : ""
                }`}
              key={step.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >

              <div className="vm-how-visual-wrap">
                <div className="vm-how-image-glow" />

                <div className="vm-how-image-frame">
                  <TechnicalVisual type={step.visual} />

                  <div className="vm-how-image-overlay">
                    <span className="vm-status-dot" />
                  </div>
                </div>
              </div>

              <div className="vm-how-content">
                <span className="vm-how-index">
                  0{index + 1}
                </span>

                <h3>{step.title}</h3>
                <h4>{step.label}</h4>

                <p className="vm-how-description">
                  {step.description}
                </p>

                <div className="vm-how-point">
                  <h5>Business Impact</h5>
                  <p>{step.benefit}</p>
                </div>
              </div>

            </motion.article>
          ))}

        </div>

      </section>


      {/* =====================================================
          ROTATING EQUIPMENT APPLICATIONS
      ===================================================== */}

      <section
        id="applications"
        className="vm-section vm-shell"
      >

        <div className="vm-section-intro">

          <h2>
            Industry{" "}

            <span className="vm-gradient-text">
              Applications
            </span>
          </h2>


          {/* <p>
            Vibration intelligence for the machines that keep
            physical systems running.
          </p> */}

        </div>


        <div className="vm-applications-grid">

          {applications.map((application, index) => (

            <motion.article
              className="vm-application-card"
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


              <div className="vm-application-overlay">

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
        className="vm-section vm-shell vm-roi-section"
      >

        <motion.div
          className="vm-roi-image"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={roiImage}
            alt="Business ROI"
          />
          <div className="vm-roi-overlay" />
        </motion.div>

        <motion.div
          className="vm-roi-copy"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="vm-roi-heading">
            {/* <span className="vm-kicker vm-kicker-magenta">
              Enterprise
            </span> */}

            <h2>
              Business{" "}
              <span className="vm-gradient-text">
                ROI
              </span>
            </h2>
          </div>

          <div className="vm-roi-list">
            {roiItems.map((item) => (
              <div className="vm-roi-item" key={item.title}>
                <div className="vm-roi-icon">
                  {item.icon}
                </div>

                <div className="vm-roi-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="vm-cta vm-shell">

        <motion.div
          className="vm-cta-inner"

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

          <div className="vm-cta-pattern" />


          <div className="vm-cta-content">

            <h2>
              Start Your Journey Today
            </h2>


            <div className="vm-cta-actions">

              <Link
                to="/contact"
                className="vm-cta-light"
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


export default VibrationMonitoring;