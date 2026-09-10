import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/cobble-prediction.css";

import highSpeedMillImage from "../assets/products/cobble/highSpeedMill.jpeg";
import edgeProcessingImage from "../assets/products/cobble/edgeProcessing.jpeg";
import autonomousMitigationImage from "../assets/products/cobble/autonomousMitigation.jpeg";

// Industry application images
import hotStripMillsImage from "../assets/products/cobble/industryApplications/hotStripMills.jpeg";
import sectionStructuralImage from "../assets/products/cobble/industryApplications/section&Structural.jpeg";
import wireRodRebarImage from "../assets/products/cobble/industryApplications/wireRod&Rebar.jpeg";
import seamlessPipeMillsImage from "../assets/products/cobble/industryApplications/seamlessPipeMills.jpeg";
import neuralNetworkImage from "../assets/products/cobble/neuralNetwork.jpeg";
import roiImage from "../assets/products/ROI.png";
const heroImage =
  "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_25a00a26d6_3880e3bc17ec0392.png";

const CobblePrediction = () => {
  return (
    <main className="cobble-page">
      <div className="cobble-grid-bg" />

      <div className="glow-effect glow-top-right" />
      <div className="glow-effect glow-bottom-left" />
      <div className="glow-effect glow-center" />

      <nav className="cobble-subnav">
        <div className="cobble-subnav-inner">
          <div className="cobble-subnav-brand">COBBLE</div>

          <div className="cobble-subnav-scroll">
            <div className="cobble-subnav-links">
              <a href="#cobble-hero">Overview</a>
              <a href="#core-impact">Core Impact</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#applications">Applications</a>
              <a href="#business-roi">Business ROI</a>
            </div>
          </div>

          <Link to="/contact" className="cobble-subnav-cta">
            Request Demo <span>↗</span>
          </Link>
        </div>
      </nav>

      <section id="cobble-hero" className="cobble-hero cobble-shell">
        <motion.div
          className="cobble-hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <motion.h1
            className="cobble-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="cobble-gradient-text">Zero-Cobble Intelligence</span>
          </motion.h1>

          <motion.p
            className="cobble-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real-time AI intelligence that detect roll-stand anomalies,
            prevent catastrophic cobbles, and maximize rolling mill throughput.
          </motion.p>

          <motion.div
            className="cobble-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* <a
              href="#how-it-works"
              className="cobble-button cobble-button-secondary"
            >
              How it Works <span>↓</span>
            </a> */}
          </motion.div>
        </motion.div>

        <motion.div
          className="cobble-hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="cobble-image-glow" />

          <div className="cobble-image-frame">
            <img
              src={heroImage}
              alt="Hot rolling mill process with red-hot steel billet moving through heavy industrial equipment"
            />

          </div>
        </motion.div>
      </section>

      <section className="cobble-section cobble-shell" id="core-impact">
        <div className="cobble-section-heading">
          <h2>
            Value Proposition &{" "}
            <span className="cobble-gradient-text">Core Impact</span>
          </h2>
          <div className="cobble-heading-line" />
        </div>

        <div className="cobble-impact-grid">
          <motion.article
            className="cobble-impact-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="cobble-impact-icon cobble-orange">
              <i className="fa-solid fa-bolt-lightning" />
            </div>
            <h3>Instant Anomaly Detection</h3>
            <p>
              Catch sub-second load, speed, and temperature drifts before
              red-hot billets buckle out of the pass line.
            </p>
          </motion.article>

          <motion.article
            className="cobble-impact-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="cobble-impact-icon cobble-magenta">
              <i className="fa-solid fa-shield-check" />
            </div>
            <h3>Early  Cobble Prevention</h3>
            <p>
              Transition from reactive manual scrap clearing to automated
              pre-cobble shearing and speed compensation.
            </p>
          </motion.article>

          <motion.article
            className="cobble-impact-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <div className="cobble-impact-icon cobble-orange">
              <i className="fa-solid fa-chart-line" />
            </div>

            <h3>Optimize Rolling Throughput</h3>

            <p>
              Maintain stable rolling conditions, reduce unplanned stoppages, and
              keep production running closer to optimal mill speed and capacity.
            </p>
          </motion.article>

        </div>
      </section>

      <section
        className="cobble-section cobble-how-section cobble-shell"
        id="how-it-works"
      >
        <div className="cobble-how-heading">
          <div>
            {/* <span className="cobble-kicker cobble-kicker-magenta">
              How It Works
            </span> */}
            <h2>
              How{" "}
              <span className="cobble-gradient-text">
                It Works
              </span>
            </h2>
          </div>

          <p>
            Our Cobble Monitoring solution combines real-time process observations,
            engineering knowledge, physics and AI to continuously understand
            rolling-mill behaviour. By analysing process signals, operating
            conditions and emerging anomalies in real time, it identifies
            instability early and enables faster intervention before a cobble
            occurs.
          </p>
        </div>

        {/* <div className="cobble-how-list">
          <WorkflowStep
            title="High-Speed Mill Signal Ingestion"
            description="Capture multi-parameter signals from every active rolling stand through direct interfaces with mill PLCs and specialized sensor arrays."
            image={highSpeedMillImage}
            imageAlt="Digital visualization of high-speed sensor data streams from a rolling mill"
            items={[
              {
                title: "Electrical Signals",
                description:
                  "High-frequency motor current, torque and voltage fluctuations across stand drives.",
              },
              {
                title: "Optical & Thermal",
                description:
                  "Pyrometers and high-speed cameras monitor billet temperature and tracking.",
              },
              {
                title: "Kinematic Metrics",
                description:
                  "Inter-stand looper position, roll RPM and pinch-roll drive speeds.",
              },
            ]}
          />

          <WorkflowStep
            reverse
            title="Edge Signal Processing & Pattern Recognition"
            description="Real-time feature extraction at sub-millisecond rates using industrial edge computing close to the PLC layer."
            image={edgeProcessingImage}
            imageAlt="Industrial edge processing environment for rolling mill data"
            tags={[
              "Instantaneous slip-grip ratio calculation",
              "Head-end entry impact monitoring",
              "Harmonic filtering of load resistance spikes",
            ]}
          />

          <WorkflowStep
            title="Neural Network Anomaly Evaluation"
            description="Deep-learning models evaluate cobble probability continuously against recipe-specific baselines and historical cobble patterns."
            image={neuralNetworkImage}
            imageAlt="Neural network visualization for cobble anomaly evaluation"
            riskIndex
          />

          <WorkflowStep
            reverse
            title="Autonomous Mitigation & Operator Alerting"
            description="Automated action begins before the billet enters the point of no return, triggering pre-configured responses when risk exceeds safety thresholds."
            image={autonomousMitigationImage}
            imageAlt="Industrial operator interface for autonomous cobble mitigation"
            actions={[
              {
                label: "Automated Shearing",
              },
              {
                label: "Speed Ratio Adjustments",
              },
              {
                label: "Root Cause HMI Display",
              },
            ]}
          />
        </div> */}
      </section>

      <section
        className="cobble-section cobble-industries-section cobble-shell"
        id="applications"
      >
        <div className="cobble-section-heading">
          <h2>
            Industry <span className="cobble-gradient-text">Applications</span>
          </h2>
          {/* <p>
            Deployed across specialized rolling facilities for mission-critical
            protection.
          </p> */}
        </div>

        <div className="cobble-industry-grid">
          <IndustryCard
            title="Wire Rod & Rebar"
            description="Prevent high-speed cobbles in fast-finishing blocks running at speeds over 100 m/s."
            image={wireRodRebarImage}
          />

          <IndustryCard
            title="Hot Strip Mills"
            description="Detect strip tail tracking errors, inter-stand loop instabilities, and cobble risks."
            image={hotStripMillsImage}
          />

          <IndustryCard
            title="Section & Structural"
            description="Track complex structural profile deformation and guide entrance misalignments."
            image={sectionStructuralImage}
          />

          <IndustryCard
            title="Seamless Pipe Mills"
            description="Prevent billet piercing jams and shell wall thickness variations during elongation."
            image={seamlessPipeMillsImage}
          />
        </div>
      </section>

      <section
        id="business-roi"
        className="cobble-section cobble-shell cobble-roi-section"
      >
        <motion.div
          className="cobble-roi-image"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={roiImage}
            alt="Business ROI"
          />
          <div className="cobble-roi-overlay" />
        </motion.div>

        <motion.div
          className="cobble-roi-copy"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cobble-roi-heading">
            {/* <span className="cobble-kicker cobble-kicker-magenta">
              Enterprise
            </span> */}
            <h2>
              Business{" "}
              <span className="cobble-gradient-text">ROI</span>
            </h2>
          </div>

          <div className="cobble-roi-list">
            {[
              {
                icon: "◷",
                title: "Cobble & Scrap Reduction",
                description:
                  "Intercept emerging load, speed, and temperature anomalies before they develop into catastrophic cobbles and costly scrap events.",
              },
              {
                icon: "✓",
                title: "Higher Mill Throughput",
                description:
                  "Reduce disruptive cobble events and maintain stable rolling conditions to protect production continuity and mill availability.",
              },
              {
                icon: "▣",
                title: "Faster Autonomous Mitigation",
                description:
                  "Use real-time predictive intelligence to support pre-cobble shearing, speed compensation, and faster intervention at the point of risk.",
              },
            ].map((item) => (
              <div className="cobble-roi-item" key={item.title}>
                <div className="cobble-roi-icon">{item.icon}</div>
                <div className="cobble-roi-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="cobble-cta cobble-shell" id="cta">
        <motion.div
          className="cobble-cta-inner"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="cobble-cta-pattern" />

          <div className="cobble-cta-content">
            {/* <span className="cobble-kicker">Physical Intelligence</span> */}

            <h2>
              Start Your Journey Today
            </h2>

            <div className="cobble-cta-actions">
              <Link to="/contact" className="cobble-cta-primary">
                Schedule Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

const BenefitCard = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      className="cobble-benefit-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <span className="cobble-benefit-number" />
      <h4>{title}</h4>
      <p>{description}</p>
    </motion.div>
  );
};

const ArchitectureCard = ({
  title,
  subtitle,
  description,
  benefit,
}) => {
  return (
    <motion.article
      className="cobble-architecture-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cobble-architecture-number" />
      <div className="cobble-architecture-label">{title}</div>

      <div className="cobble-architecture-main">
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>

      <div className="cobble-architecture-benefit">
        <span>CORE BENEFIT</span>
        <strong>{benefit}</strong>
      </div>
    </motion.article>
  );
};

const WorkflowStep = ({
  reverse = false,
  title,
  description,
  image,
  imageAlt,
  items,
  tags,
  riskIndex = false,
  actions,
}) => {
  return (
    <motion.article
      className={`cobble-workflow-card ${reverse ? "cobble-workflow-card-reverse" : ""
        }`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="cobble-workflow-visual">
        <img src={image} alt={imageAlt} />


      </div>

      <div className="cobble-workflow-content">
        <div className="cobble-workflow-label">COBBLE PREDICTION</div>
        <h3>{title}</h3>
        <p className="cobble-workflow-description">{description}</p>

        {items && (
          <div className="cobble-workflow-items">
            {items.map((item) => (
              <div className="cobble-workflow-item" key={item.title}>
                <div className="cobble-workflow-item-icon">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tags && (
          <div className="cobble-workflow-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        {riskIndex && (
          <div className="cobble-risk-card">
            <div className="cobble-risk-header">
              <span>Cobble Risk Index</span>
              <strong>UPDATED EVERY 2ms</strong>
            </div>
            <div className="cobble-risk-bar">
              <div className="cobble-risk-progress" />
            </div>
          </div>
        )}

        {actions && (
          <div className="cobble-workflow-actions">
            {actions.map((action) => (
              <div key={action.label}>
                <span>{action.label}</span>
                {action.icon && <i className={`fa-solid ${action.icon}`} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );

};

const IndustryCard = ({ title, description, image }) => {
  return (
    <motion.article
      className="cobble-industry-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <div className="cobble-industry-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="cobble-industry-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
};

export default CobblePrediction;
