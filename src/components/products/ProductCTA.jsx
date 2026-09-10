import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCTA() {
  return (
    <>
      {/* BUILT ON MEGHAAI PLATFORM */}
      <section className="platform-banner">
        <div className="platform-banner-icon">
          <div className="platform-layers">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="platform-banner-content">
          <h3>Built on the MeghaAI Platform</h3>
          <p>
            Our applications run on a common industrial AI platform that
            connects your data, engineering knowledge and AI — designed to
            scale across more assets, processes and industries.
          </p>
        </div>

        <Link to="/solutions" className="platform-banner-btn">
          Explore the Platform
          <span>→</span>
        </Link>
      </section>

      {/* EXISTING PRODUCT CTA */}
      <section className="products-final-cta">
        <div
          className="products-cta-glow"
          aria-hidden="true"
        />

        <div className="products-container">
          <motion.div
            className="products-cta-inner"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="products-eyebrow">
              PHYSICAL INTELLIGENCE
            </span>

            <h2>
              Ready to see in action ?
              
            </h2>

            <p>
              Discover how MeghaAI can deliver real outcomes for your critical
            operations.
            </p>

            <Link
              to="/contact"
              className="products-btn products-btn-primary"
            >
              Get Started
              <span>↗</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}