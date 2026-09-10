import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductHero() {
  const scrollToProducts = () => {
    document
      .getElementById("catalogue")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="products-hero">

      {/* =========================================
          HERO BACKGROUND GRID
      ========================================= */}

      <div
        className="products-grid-bg"
        aria-hidden="true"
      />

      {/* =========================================
          HERO ORBITS
      ========================================= */}

      <div
        className="products-hero-orbit products-hero-orbit-a"
        aria-hidden="true"
      />

      <div
        className="products-hero-orbit products-hero-orbit-b"
        aria-hidden="true"
      />


      <div className="products-container products-hero-inner">

        {/* =========================================
            HERO TITLE
        ========================================= */}

        <motion.div
          className="products-hero-title"
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span className="products-eyebrow">
          </span>

          <h1>
            Physical Intelligence,
            <span> Built Around Your Physical Systems.</span>
          </h1>

        </motion.div>


        {/* =========================================
            HERO VISUAL
        ========================================= */}

        <motion.div
          className="products-hero-visual"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
          aria-label="MeghaAI industrial intelligence visualization"
        >

          {/* =====================================
              CORE
          ===================================== */}

          <div className="hero-core">

            <span>
              PHYSICAL AI
            </span>

            <strong>
              INTELLIGENCE
            </strong>

          </div>


          {/* =====================================
              INTELLIGENCE NODES
          ===================================== */}

          <span className="hero-node hero-node-1">
            DATA
          </span>

          <span className="hero-node hero-node-2">
            ANALYSIS
          </span>

          <span className="hero-node hero-node-3">
            PHYSICS
          </span>

          <span className="hero-node hero-node-4">
            AI
          </span>

          <span className="hero-node hero-node-5">
            ENGINEERING
          </span>


          {/* =====================================
              SIGNALS
          ===================================== */}

          <span className="hero-signal signal-1" />
          <span className="hero-signal signal-2" />
          <span className="hero-signal signal-3" />
          <span className="hero-signal signal-4" />

        </motion.div>


        {/* =========================================
            HERO CONTENT
        ========================================= */}

        <motion.div
          className="products-hero-content"
          initial={{
            opacity: 0,
            y: 28,
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

          {/* =====================================
              MIDDLE HERO HEADING
          ===================================== */}

          <h2 className="products-hero-middle-heading">
            Proven Industrial AI Applications.
            <span>Powered by One Platform.</span>
          </h2>


          {/* =====================================
              HERO DESCRIPTION
          ===================================== */}

          <p>
            Connect engineering knowledge, analysis data, industrial data, physics,
            multimodal observations and AI to transform complex operational
            information into actionable physical intelligence.
          </p>


          {/* =====================================
              HERO ACTIONS
          ===================================== */}

          <div className="products-hero-actions">

            {/* Explore Products */}

            <button
              type="button"
              className="products-btn products-btn-primary"
              onClick={scrollToProducts}
            >
              Explore Products
              <span>↓</span>
            </button>


            {/* Talk to an Expert */}

            <Link
              className="products-btn products-btn-secondary"
              to="/contact"
            >
              Talk to an Expert
              <span>↗</span>
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}