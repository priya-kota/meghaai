import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";

import aws from "../assets/home/aws.png";
import microsoft from "../assets/home/microsoft.png";
import base from "../assets/home/base.png";
import nvidia from "../assets/home/nvidia.png";
import thub from "../assets/home/thub.png";

import c1 from "../assets/customers/c1.png";
import c2 from "../assets/customers/c2.png";
import c3 from "../assets/customers/c3.png";
import c4 from "../assets/customers/c4.png";
import c5 from "../assets/customers/c5.png";
// import c6 from "../assets/customers/c6.png";
// import c7 from "../assets/customers/c7.png";

import factories from "../assets/home/factories.jpeg";
import plants from "../assets/home/plants.jpeg";
import machines from "../assets/home/machines.jpeg"; 
import structures from "../assets/home/structures.jpeg";
import energy from "../assets/home/energy.jpeg";
import infrastructure from "../assets/home/infrastructure.jpeg";

import demoVideo from "../assets/home/demoVideo.mp4";

function Home() {
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="home-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="home-hero reveal">
        <div
          className="home-hero-bg"
          style={{ backgroundImage: `url(${machines})` }}
          aria-hidden="true"
        ></div>

        <div
          className="home-hero-overlay"
          aria-hidden="true"
        ></div>

        <div className="home-hero-content">
          <h1 className="home-hero-title">
            Prevent Machine Failures
            <span>Before They Happen.</span>
          </h1>

          <p className="home-hero-subtitle">
            Every unplanned shutdown costs{" "}
            <strong>$125,000 per hour.</strong>{" "}
            MeghaAI stops them before they start.
          </p>

          <div className="home-hero-actions">
            <Link
              to="/contact"
              className="primary-home-button"
            >
              Get Free Demo →
            </Link>

            <button
              type="button"
              className="secondary-home-button"
              onClick={() => setShowDemoVideo(true)}
            >
              ▶ Watch 2-Min Demo
            </button>
          </div>

          <div className="home-hero-proof">
            <span>
              Trusted by Bharat Petrolum, JSW Steel, Cummins, Ion Exchange &amp; 10+ Enterprise
              Leaders
            </span>

            <div className="home-hero-proof-logos">
              <img 
              src={c1} 
              alt="Customer 1" />
              <span className="customer-logo-emphasis-card">
                <img src={c2} alt="Customer 2" />
              </span>
              <span className="customer-logo-emphasis-card customer-logo-c3-emphasis-card">
              <img 
              src={c3} 
              alt="Customer 3" 
              />
              </span>
              <span className="customer-logo-emphasis-card customer-logo-c4-emphasis-card">
                <img 
                src={c4} 
                alt="Customer 4"
                className="customer-logo-c4" />
              </span>
            <span className="customer-logo-emphasis-card customer-logo-c5-emphasis-card">
              <img 
              src={c5} 
              alt="Customer 5"
              className="customer-logo-c5" 
              />
            </span>
              {/* <img 
              src={c6} 
              alt="Customer 6"
              className="customer-logo-large customer-logo-c6"
              />
              <img 
              src={c7} 
              alt="Customer 7"
              className="customer-logo-large"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM / STATISTICS
      ===================================================== */}
      <section className="home-problem reveal">
        <div className="home-problem-content">
          <div className="section-eyebrow">
            THE COST OF DOWNTIME
          </div>

          <h2>
            Every Hour of Downtime Hits Your Bottom Line
          </h2>

          <p className="home-problem-lead">
            Unplanned machine failures don't just disrupt production. They
            drain cash, risk worker safety, and destroy schedules — and
            they're happening more often than you think.
          </p>

          <div className="home-problem-stats">
            <div className="problem-stat-box">
              <strong>$125,000</strong>
              <span>
                Average industrial downtime cost per hour
              </span>
            </div>

            <div className="problem-stat-box">
              <strong>$2.3 Million</strong>
              <span>
                Cost per hour in automotive manufacturing — that's $600 every
                second
              </span>
            </div>

            <div className="problem-stat-box">
              <strong>69%</strong>
              <span>
                of plants experience unplanned failures every month
              </span>
            </div>
          </div>

          <div className="home-problem-list">
            <p>
              These failures hit your operation from multiple angles:
            </p>

            <ul>
              <li>Quality issues &amp; defects</li>
              <li>Unexpected production halts</li>
              <li>Low equipment effectiveness (OEE)</li>
              <li>
                Worker safety risks during emergency repairs
              </li>
              <li>
                Missed sustainability &amp; carbon goals
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* =====================================================
          PHYSICAL WORLD INTELLIGENCE
      ===================================================== */}
      <section className="physical-intelligence-section reveal">
        <div className="physical-intelligence-content">

          <div className="physical-intelligence-heading">
            <div className="physical-intelligence-eyebrow">
              PHYSICAL WORLD INTELLIGENCE
            </div>

            <h2>
              Making the Physical World Intelligent.
            </h2>
          </div>

          <div
            className="physical-intelligence-visual"
            aria-hidden="true"
          >
            <div className="physical-visual-grid"></div>

            <div className="physical-orbit physical-orbit-one">
              <span className="orbit-dot"></span>

              <span className="orbit-dot-slot orbit-dot-slot-two">
                <span className="orbit-dot"></span>
              </span>
            </div>

            <div className="physical-orbit physical-orbit-two">
              <span className="orbit-dot"></span>

              <span className="orbit-dot-slot physical-dot-slot-three">
                <span className="orbit-dot"></span>
              </span>
            </div>

            <div className="physical-orbit physical-orbit-three">
              <span className="orbit-dot"></span>
            </div>

            <div className="physical-node physical-node-data">
              DATA
            </div>

            <div className="physical-node physical-node-physics">
              PHYSICS
            </div>

            <div className="physical-node physical-node-ai">
              AI
            </div>

            <div className="physical-node physical-node-engineering">
              ENGINEERING
            </div>

            <div className="physical-node physical-node-analysis">
              ANALYSIS
            </div>

            <div className="physical-core">
              <span>PHYSICAL AI</span>
              <small>INTELLIGENCE</small>
            </div>

            <div className="physical-signal signal-one"></div>
            <div className="physical-signal signal-two"></div>
            <div className="physical-signal signal-three"></div>
          </div>

          <div className="physical-intelligence-copy">

            <p className="physical-intelligence-subtitle">
              Physics. Data. AI. One Industrial Intelligence Platform.
            </p>

            <div className="physical-intelligence-signature">
              <span>One platform.</span>
              <span>Multiple industries.</span>
              <span>Real-time intelligence.</span>
            </div>

            <p className="physical-intelligence-lead">
              The world's most critical systems operate in the physical world.
            </p>

            <div className="physical-world-list">

              <div className="physical-world-card">
                <img
                  src={factories}
                  alt="Factories"
                />
                <span>Factories</span>
              </div>

              <div className="physical-world-card">
                <img
                  src={plants}
                  alt="Plants"
                />
                <span>Plants</span>
              </div>

              <div className="physical-world-card">
                <img
                  src={machines}
                  alt="Machines"
                />
                <span>Machines</span>
              </div>

              <div className="physical-world-card">
                <img
                  src={structures}
                  alt="Structures"
                />
                <span>Structures</span>
              </div>

              <div className="physical-world-card">
                <img
                  src={energy}
                  alt="Energy"
                />
                <span>Energy</span>
              </div>

              <div className="physical-world-card">
                <img
                  src={infrastructure}
                  alt="Infrastructure"
                />
                <span>Infrastructure</span>
              </div>

            </div>

            <p className="physical-intelligence-problem">
              Yet much of the intelligence around them remains fragmented
              across sensors, engineering models, control systems and human
              expertise.
            </p>

            <p className="physical-intelligence-body">
              We make physical systems understandable, actionable and
              intelligent through AI that can:
            </p>

            <div className="intelligence-actions">

              <div className="intelligence-step">
                <div className="intelligence-icon">
                  <svg
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path d="M8 32s9-16 24-16 24 16 24 16-9 16-24 16S8 32 8 32Z" />
                    <circle
                      cx="32"
                      cy="32"
                      r="7"
                    />
                  </svg>
                </div>

                <strong>Observe</strong>
              </div>

              <span className="intelligence-arrow">
                →
              </span>

              <div className="intelligence-step">
                <div className="intelligence-icon">
                  <svg
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path d="M23 39h18" />
                    <path d="M25 46h14" />
                    <path d="M27 53h10" />
                    <path d="M20 27a12 12 0 1 1 24 0c0 5-3 8-6 11H26c-3-3-6-6-6-11Z" />
                  </svg>
                </div>

                <strong>Understand</strong>
              </div>

              <span className="intelligence-arrow">
                →
              </span>

              <div className="intelligence-step">
                <div className="intelligence-icon">
                  <svg
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="8"
                    />
                    <circle
                      cx="32"
                      cy="12"
                      r="5"
                    />
                    <circle
                      cx="49"
                      cy="22"
                      r="5"
                    />
                    <circle
                      cx="49"
                      cy="42"
                      r="5"
                    />
                    <circle
                      cx="32"
                      cy="52"
                      r="5"
                    />
                    <circle
                      cx="15"
                      cy="42"
                      r="5"
                    />
                    <circle
                      cx="15"
                      cy="22"
                      r="5"
                    />

                    <path d="M32 20v4M39 24l6-3M40 36l6 3M32 40v7M24 36l-6 3M24 24l-6-3" />
                  </svg>
                </div>

                <strong>Reason</strong>
              </div>

              <span className="intelligence-arrow">
                →
              </span>

              <div className="intelligence-step">
                <div className="intelligence-icon">
                  <svg
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path d="M12 52h40" />
                    <rect
                      x="16"
                      y="34"
                      width="7"
                      height="18"
                      rx="1"
                    />
                    <rect
                      x="29"
                      y="25"
                      width="7"
                      height="27"
                      rx="1"
                    />
                    <rect
                      x="42"
                      y="14"
                      width="7"
                      height="38"
                      rx="1"
                    />
                  </svg>
                </div>

                <strong>Predict</strong>
              </div>

              <span className="intelligence-arrow">
                →
              </span>

              <div className="intelligence-step">
                <div className="intelligence-icon">
                  <svg
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                  >
                    <path d="M26 10h12l2 6a18 18 0 0 1 6 4l6-1 6 10-5 4a18 18 0 0 1 0 8l5 4-6 10-6-1a18 18 0 0 1-6 4l-2 6H26l-2-6a18 18 0 0 1-6-4l-6 1-6-10 5-4a18 18 0 0 1 0-8l-5-4 6-10 6 1a18 18 0 0 1 6-4l2-6Z" />

                    <circle
                      cx="32"
                      cy="37"
                      r="7"
                    />
                  </svg>
                </div>

                <strong>Act</strong>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE IP
          ===================================================== */}
      <section className="home-core-ip reveal">

        <p>

          Our core IP combines{" "}

          <span className="core-ip-highlight">
            engineering knowledge, analysis data,
            industrial data, physics, multimodal observations
            and AI
          </span>{" "}

          to infer the hidden state of physical systems,
          understand how that state evolves and predict failure,
          degradation or instability.

        </p>

      </section>
      {/* =====================================================
          WHY MEGHAAI
      ===================================================== */}
      <section className="home-why reveal">
        <div className="home-why-content">

          <div className="section-eyebrow home-why-eyebrow">
            WHY MEGHAAI
          </div>

          <h2>
            Results That Matter to Your Bottom Line
          </h2>

          <p className="home-why-lead">
           Most industrial platforms stop at monitoring and dashboards. MeghaAI goes further with Physical Intelligence powered by Physics AI, 
           transforming engineering data into predictive insights for real-world industrial operations.
          </p>

          <div className="home-why-grid">

            <div className="why-card">
              <span className="why-icon">⏱️</span>

              <h3>
                Reduce Downtime
              </h3>

              <p>
                Analyze engineering data to detect early failure signals and enable proactive maintenance.
              </p>
            </div>

            <div className="why-card">
              <span className="why-icon">🔧</span>

              <h3>
                Extend Asset Life
              </h3>

              <p>
               Use Physics AI to monitor equipment health and prevent critical failures.
              </p>
            </div>

            <div className="why-card">
              <span className="why-icon">🛡️</span>

              <h3>
                Improve Safety
              </h3>

              <p>
                Detect abnormal conditions early and help operators respond before risks escalate.
              </p>
            </div>

            <div className="why-card">
              <span className="why-icon">📊</span>

              <h3>
                Boost Efficiency
              </h3>

              <p>
                Turn engineering data into actionable insights, reduce interruptions, and improve OEE.
              </p>
            </div>

            <div className="why-card">
              <span className="why-icon">🌱</span>

              <h3>
                Enable Sustainability
              </h3>

              <p>
                Reduce failures, resource waste, and environmental impact through efficient operations.
              </p>
            </div>

            <div className="why-card">
              <span className="why-icon">🌍</span>

              <h3>
                Scale Globally
              </h3>

              <p>
                Deploy Physical Intelligence and Physics AI across facilities and industrial assets worldwide.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* =====================================================
          CORE IP
          ===================================================== */}
      <section className="home-core-ip reveal">

        <p>

          Our core IP combines{" "}

          <span className="core-ip-highlight">
            engineering knowledge, analysis data,
            industrial data, physics, multimodal observations
            and AI
          </span>{" "}

          to infer the hidden state of physical systems,
          understand how that state evolves and predict failure,
          degradation or instability.

        </p>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="home-cta reveal">

        <div>
          <div className="section-eyebrow">
            READY TO MOVE FORWARD?
          </div>

          <h2>
            MAKE YOUR ENGINEERING AND INDUSTRIAL DATA WORK HARDER.
          </h2>
        </div>

        <Link
          to="/contact"
          className="primary-home-button"
        >
          Start a Conversation
        </Link>

      </section>



      {/* =====================================================
          PARTNERS
      ===================================================== */}
      <section className="partners reveal">

        <div className="section-eyebrow">
          OUR TECHNOLOGY ECOSYSTEM
        </div>

        <h2>
          PARTNERSHIPS AND COLLABORATIONS
        </h2>

        <div className="partner-grid">

          <img
            src={aws}
            alt="Amazon Web Services"
          />

          <img
            src={microsoft}
            alt="Microsoft"
          />

          <img
            src={nvidia}
            alt="NVIDIA"
          />

          <img
            src={base}
            alt="Base Automation"
          />

          <img
            src={thub}
            alt="T-Hub"
          />

        </div>
      </section>

      {/* =====================================================
          DEMO VIDEO MODAL
      ===================================================== */}
      {showDemoVideo && (
        <div
          className="demo-video-modal"
          onClick={() => setShowDemoVideo(false)}
        >
          <div
            className="demo-video-container"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="demo-video-close"
              onClick={() => setShowDemoVideo(false)}
              aria-label="Close demo video"
            >
              ×
            </button>

            <video
              className="demo-video"
              controls
              controlsList="nodownload"
              disablePictureInPicture
              autoPlay
              playsInline
              onContextMenu={(e) => e.preventDefault()}
            >
              <source
                src={demoVideo}
                type="video/mp4"
              />

              Your browser does not support the video element.
            </video>

          </div>
        </div>
      )}

    </main>
  );
}

export default Home;