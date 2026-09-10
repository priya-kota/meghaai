import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { products } from "../../data/products";

import "../../styles/products-catalogue.css";


/* =========================================================
   PRODUCT CATALOGUE CONTENT
========================================================= */

const catalogueContent = {

  /* =======================================================
     STRUCTURAL HEALTH MONITORING
  ======================================================= */

  "structural-health-monitoring": {

    category:
      "STRUCTURAL INTELLIGENCE",

    description:
      "Continuous structural intelligence using real-time sensing and predictive analytics to detect stress, deformation and emerging structural risks before they become failures.",

  },


  /* =======================================================
     COBBLE MONITORING
  ======================================================= */

  "cobble-monitoring": {

    category:
      "PROCESS INTELLIGENCE",

    description:
      "Real-time AI prediction for hot rolling mills that detects load, speed, temperature and process anomalies before they develop into a cobble.",

  },


  /* =======================================================
     VIBRATION MONITORING
  ======================================================= */

  "vibration-monitoring": {

    category:
      "SYSTEM INTELLIGENCE",

    description:
      "Continuous vibration intelligence for critical industrial equipment, using high-frequency sensing and FFT analysis to detect imbalance, bearing wear and shaft misalignment.",

  },

};


/* =========================================================
   PRODUCT CATALOGUE
========================================================= */

export default function ProductCatalogue() {

  return (

    <section
      className="products-catalogue"
      id="catalogue"
    >

      <div className="products-container">


        {/* =================================================
            CATALOGUE HEADING
        ================================================= */}

        <div className="catalogue-heading">

          <div className="catalogue-heading-left">

<h2 className="industrial-applications-heading">
  <span>Our Industrial AI Applications</span>
  <i></i>
  <small>Real outcomes. Today.</small>
</h2>

          </div>

        </div>


        {/* =================================================
            PRODUCT GRID
        ================================================= */}

        <div className="products-card-grid">

          {products.map((product, index) => {

            const content =
              catalogueContent[product.id];


            return (

              <motion.article

                key={product.id}

                className={
                  `product-card product-card-${product.accent}`
                }

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
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}

              >

                <Link

                  to={`/products/${product.id}`}

                  className="product-card-click"

                >


                  {/* =========================================
                      PRODUCT IMAGE
                  ========================================= */}

                  <div className="product-card-visual">

                    <img

                      src={product.image}

                      alt={product.name}

                      className="product-card-image"

                    />

                    <div
                      className="product-card-overlay"
                    />

                  </div>


                  {/* =========================================
                      PRODUCT CONTENT
                  ========================================= */}

                  <div className="product-card-content">


                    {/* =======================================
                        CATEGORY
                    ======================================= */}

                    <span
                      className="product-card-category"
                    >

                      {
                        content?.category ||
                        product.category
                      }

                    </span>


                    {/* =======================================
                        PRODUCT NAME
                    ======================================= */}

                    <h3>
                      {product.name}
                    </h3>


                    {/* =======================================
                        PRODUCT DESCRIPTION
                    ======================================= */}

                    <p>
                      {
                        content?.description ||
                        product.shortDescription
                      }
                    </p>


                    {/* =======================================
                        PRODUCT LINK
                    ======================================= */}

                    <span
                      className="product-card-link"
                    >

                      Explore Product

                      <b>
                        ↗
                      </b>

                    </span>


                  </div>

                </Link>

              </motion.article>

            );

          })}

        </div>

                {/* =================================================
            MANY MORE POSSIBILITIES
        ================================================= */}

        <div className="more-possibilities">

          {/* HEADING ROW */}
          <div className="more-possibilities-heading">

            <h2>
              Many more possibilities
            </h2>

            <span className="more-possibilities-line"></span>

            <p>
              The same platform can power a wide range of industrial AI
              applications across assets, processes and industries.
            </p>

          </div>


          {/* APPLICATION CARDS */}
          <div className="possibilities-grid">


            {/* ENERGY */}
            <div className="possibility-card">

              <div className="possibility-icon energy-icon">
                ♧
              </div>

              <h3>
                Energy
                <br />
                Optimization
              </h3>

              <p>
                Reduce energy
                <br />
                consumption and
                <br />
                operating costs.
              </p>

            </div>


            {/* OIL & GAS */}
            <div className="possibility-card">

              <div className="possibility-icon oil-icon">
                ♜
              </div>

              <h3>
                Oil & Gas
                <br />
                Operations
              </h3>

              <p>
                Monitor, predict and
                <br />
                optimize critical
                <br />
                assets and processes.
              </p>

            </div>


            {/* SEMICONDUCTOR */}
            <div className="possibility-card">

              <div className="possibility-icon semiconductor-icon">
                ▦
              </div>

              <h3>
                Semiconductor
                <br />
                Manufacturing
              </h3>

              <p>
                Improve yield,
                <br />
                quality and equipment
                <br />
                uptime.
              </p>

            </div>


            {/* DATA CENTRE */}
            <div className="possibility-card">

              <div className="possibility-icon data-icon">
                ▤
              </div>

              <h3>
                Data Centre
                <br />
                Intelligence
              </h3>

              <p>
                Optimize power,
                <br />
                cooling, capacity and
                <br />
                infrastructure health.
              </p>

            </div>


            {/* MANUFACTURING */}
            <div className="possibility-card">

              <div className="possibility-icon manufacturing-icon">
                ♙
              </div>

              <h3>
                Manufacturing
                <br />
                Operations
              </h3>

              <p>
                Increase efficiency,
                <br />
                reduce downtime
                <br />
                and improve quality.
              </p>

            </div>


            {/* AND MORE */}
            <div className="possibility-card possibility-card-more">

              <div className="possibility-more-icon">
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </div>

              <h3>
                And More
              </h3>

              <p>
                The platform can
                <br />
                be configured for
                <br />
                new industrial
                <br />
                applications.
              </p>

            </div>


          </div>

        </div>

      </div>

    </section>

  );

}





// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import { products } from "../../data/products";

// import "../../styles/products-catalogue.css";


// /* =========================================================
//    PRODUCT CATALOGUE CONTENT
// ========================================================= */

// const catalogueContent = {

//   "structural-health-monitoring": {
//     category: "STRUCTURAL INTELLIGENCE",
//     description:
//       "Continuous structural intelligence using real-time sensing and predictive analytics to detect stress, deformation and emerging structural risks before they become failures.",
//   },

//   "cobble-monitoring": {
//     category: "PROCESS INTELLIGENCE",
//     description:
//       "Real-time AI prediction for hot rolling mills that detects load, speed, temperature and process anomalies before they develop into a cobble.",
//   },

//   "vibration-monitoring": {
//     category: "SYSTEM INTELLIGENCE",
//     description:
//       "Continuous vibration intelligence for critical industrial equipment, using high-frequency sensing and FFT analysis to detect imbalance, bearing wear and shaft misalignment.",
//   },

// };


// /* =========================================================
//    SOLUTION CAPABILITIES
// ========================================================= */

// const solutionCapabilities = [

//   {
    
//     title: "Physical System Intelligence",
//     items: [
//       "Predictive Maintenance",
//       "System Health Monitoring",
//       "Failure Prediction",
//       "Remaining Useful Life",
//     ],
//   },

//   {
//     title: "Process Intelligence",
//     items: [
//       "Process Optimization",
//       "Anomaly Detection",
//       "Yield Optimization",
//       "Throughput Optimization",
//     ],
//   },

//   {
//     title: "Quality Intelligence",
//     items: [
//       "Defect Prediction",
//       "Visual Inspection",
//       "Quality Prediction",
//       "Root Cause Analysis",
//     ],
//   },

//   {
//     title: "Operations Intelligence",
//     items: [
//       "Production Intelligence",
//       "OEE Optimization",
//       "Downtime Analysis",
//       "Bottleneck Detection",
//     ],
//   },

//   {
//     title: "Energy & Sustainability",
//     items: [
//       "Energy Optimization",
//       "Energy Forecasting",
//       "Carbon Intelligence",
//       "Utilities Optimization",
//     ],
//   },

//   {
//     title: "Engineering Intelligence",
//     items: [
//       "CAD Engineering AI",
//       "Design Analysis",
//       "Manufacturability",
//       "BOM Intelligence",
//     ],
//   },

//   {
//     title: "Infrastructure Intelligence",
//     items: [
//       "Data Centre Intelligence",
//       "Infrastructure Monitoring",
//       "Capacity Forecasting",
//       "Cooling Optimization",
//     ],
//   },

//   {
//     title: "AI & Knowledge Intelligence",
//     items: [
//       "Industrial Copilot",
//       "Root Cause Intelligence",
//       "SOP Intelligence",
//       "Engineering Knowledge",
//     ],
//   },

// ];


// /* =========================================================
//    PLATFORM FLOW
// ========================================================= */

// const platformFlow = [
//   "Industrial Data",
//   "Engineering Knowledge",
//   "AI & Domain Models",
//   "Physical Intelligence",
//   "Industrial Solutions",
// ];


// /* =========================================================
//    PRODUCT CATALOGUE
// ========================================================= */

// export default function ProductCatalogue() {

//   return (

//     <section
//       className="products-catalogue"
//       id="catalogue"
//     >

//       {/* ===================================================
//           JSX-ONLY CSS
          
//           Existing product CSS remains in:
//           products-catalogue.css

//           New section styling lives here.
//       =================================================== */}

//       <style>{`

//         /* =================================================
//            CATALOGUE HEADING
//         ================================================= */

//         .products-catalogue .catalogue-heading {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-end;
//           gap: 60px;
//           margin-bottom: 55px;
//         }

//         .products-catalogue .catalogue-heading-left {
//           flex: 1;
//         }

//         .products-catalogue .catalogue-heading-right {
//           width: 430px;
//           flex-shrink: 0;
//         }

//         .products-catalogue .catalogue-heading-right p {
//           margin: 0;
//           color: #39456b;
//           font-size: 16px;
//           line-height: 1.6;
//         }


//         /* =================================================
//            PLATFORM INTRO
//         ================================================= */

//         .products-catalogue .platform-solutions-intro {
//           position: relative;
//           overflow: hidden;

//           margin-bottom: 70px;
//           padding: 48px;

//           border: 1px solid rgba(16, 11, 79, 0.12);
//           border-radius: 24px;

//           background: #fff7ed;
//         }

//         .products-catalogue .platform-solutions-intro::before {
//           content: "";

//           position: absolute;
//           top: -120px;
//           right: -100px;

//           width: 320px;
//           height: 320px;

//           border-radius: 50%;

//           background: rgba(200, 105, 68, 0.07);

//           pointer-events: none;
//         }


//         /* =================================================
//            PLATFORM INTRO COPY
//         ================================================= */

//         .products-catalogue .platform-solutions-copy {
//           position: relative;
//           z-index: 1;

//           max-width: 800px;
//         }

//         .products-catalogue .platform-solutions-copy h3 {
//           margin: 10px 0 16px;

//           color: #100b4f;

//           font-size: clamp(34px, 4vw, 52px);
//           font-weight: 700;
//           line-height: 1.04;

//           letter-spacing: -0.04em;
//         }

//         .products-catalogue .platform-solutions-copy h3 span {
//           color: #c86944;
//         }

//         .products-catalogue .platform-solutions-copy p {
//           max-width: 760px;

//           margin: 0;

//           color: #39456b;

//           font-size: 16px;
//           line-height: 1.65;
//         }


//         /* =================================================
//            PLATFORM FLOW
//         ================================================= */

//         .products-catalogue .platform-flow {
//           position: relative;
//           z-index: 1;

//           display: grid;
//           grid-template-columns: repeat(5, 1fr);

//           margin-top: 42px;
//           padding-top: 28px;

//           border-top: 1px solid rgba(16, 11, 79, 0.14);
//         }

//         .products-catalogue .platform-flow-item {
//           position: relative;

//           display: flex;
//           align-items: center;

//           min-height: 42px;

//           padding-right: 25px;
//         }

//         .products-catalogue .platform-flow-number {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 32px;
//           height: 32px;

//           flex-shrink: 0;

//           border-radius: 50%;

//           background: #100b4f;
//           color: #ffffff;

//           font-size: 10px;
//           font-weight: 700;
//         }

//         .products-catalogue .platform-flow-item > span {
//           margin-left: 11px;

//           color: #100b4f;

//           font-size: 13px;
//           font-weight: 700;
//           line-height: 1.2;
//         }

//         .products-catalogue .platform-flow-item > b {
//           margin-left: auto;

//           color: #c86944;

//           font-size: 18px;
//           font-weight: 500;
//         }


//         /* =================================================
//            SOLUTION UNIVERSE
//         ================================================= */

//         .products-catalogue .solution-capability-section {
//           margin-bottom: 85px;
//         }

//         .products-catalogue .solution-capability-heading {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-end;

//           gap: 60px;

//           margin-bottom: 32px;
//         }

//         .products-catalogue .solution-capability-heading h3 {
//           margin: 10px 0 0;

//           color: #100b4f;

//           font-size: clamp(34px, 4vw, 52px);
//           font-weight: 700;
//           line-height: 1;

//           letter-spacing: -0.04em;
//         }

//         .products-catalogue .solution-capability-heading h3 span {
//           color: #c86944;
//         }

//         .products-catalogue .solution-capability-heading > p {
//           max-width: 470px;

//           margin: 0;

//           color: #39456b;

//           font-size: 15px;
//           line-height: 1.6;
//         }


//         /* =================================================
//            CAPABILITY GRID
//         ================================================= */

//         .products-catalogue .solution-capability-grid {
//           display: grid;

//           grid-template-columns: repeat(4, 1fr);

//           gap: 14px;
//         }


//         /* =================================================
//            CAPABILITY CARD
//         ================================================= */

//         .products-catalogue .solution-capability-card {
//           position: relative;

//           min-height: 225px;

//           padding: 25px;

//           border: 1px solid rgba(16, 11, 79, 0.11);
//           border-radius: 18px;

//           background: #ffffff;

//           transition:
//             transform 0.25s ease,
//             border-color 0.25s ease,
//             box-shadow 0.25s ease;
//         }

//         .products-catalogue .solution-capability-card:hover {
//           transform: translateY(-5px);

//           border-color: rgba(200, 105, 68, 0.4);

//           box-shadow:
//             0 15px 35px rgba(16, 11, 79, 0.08);
//         }


//         /* =================================================
//            CARD TOP
//         ================================================= */

//         .products-catalogue .solution-capability-top {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;

//           margin-bottom: 28px;
//         }

//         .products-catalogue .solution-capability-index {
//           color: #c86944;

//           font-size: 10px;
//           font-weight: 800;

//           letter-spacing: 0.15em;
//         }

//         .products-catalogue .solution-capability-arrow {
//           color: #100b4f;

//           font-size: 18px;

//           transition:
//             transform 0.25s ease,
//             color 0.25s ease;
//         }

//         .products-catalogue .solution-capability-card:hover
//         .solution-capability-arrow {
//           color: #c86944;
//           transform: translate(3px, -3px);
//         }


//         /* =================================================
//            CARD TITLE
//         ================================================= */

//         .products-catalogue .solution-capability-card h4 {
//           margin: 0 0 17px;

//           color: #100b4f;

//           font-size: 20px;
//           font-weight: 700;
//           line-height: 1.1;

//           letter-spacing: -0.02em;
//         }


//         /* =================================================
//            CAPABILITY ITEMS
//         ================================================= */

//         .products-catalogue .solution-capability-items {
//           display: flex;
//           flex-direction: column;

//           gap: 8px;
//         }

//         .products-catalogue .solution-capability-items span {
//           position: relative;

//           padding-left: 15px;

//           color: #4a5575;

//           font-size: 12.5px;
//           line-height: 1.35;
//         }

//         .products-catalogue .solution-capability-items span::before {
//           content: "";

//           position: absolute;
//           left: 0;
//           top: 6px;

//           width: 5px;
//           height: 5px;

//           border-radius: 50%;

//           background: #c86944;
//         }


//         /* =================================================
//            CUSTOM SOLUTION BANNER
//         ================================================= */

//         .products-catalogue .custom-solution-banner {
//           position: relative;
//           overflow: hidden;

//           display: flex;
//           align-items: center;
//           justify-content: space-between;

//           gap: 45px;

//           margin-top: 28px;
//           padding: 44px 46px;

//           border-radius: 22px;

//           background: #100b4f;
//         }

//         .products-catalogue .custom-solution-banner::after {
//           content: "";

//           position: absolute;

//           width: 350px;
//           height: 350px;

//           right: -130px;
//           bottom: -200px;

//           border-radius: 50%;

//           border: 1px solid rgba(255, 255, 255, 0.12);

//           box-shadow:
//             0 0 0 40px rgba(255, 255, 255, 0.025),
//             0 0 0 80px rgba(255, 255, 255, 0.02);

//           pointer-events: none;
//         }

//         .products-catalogue .custom-solution-copy {
//           position: relative;
//           z-index: 1;

//           max-width: 720px;
//         }

//         .products-catalogue .custom-solution-copy
//         .products-eyebrow {
//           color: #ff7950;
//         }

//         .products-catalogue .custom-solution-copy h3 {
//           margin: 10px 0 14px;

//           color: #ffffff;

//           font-size: clamp(30px, 3.5vw, 46px);
//           font-weight: 700;
//           line-height: 1.05;

//           letter-spacing: -0.035em;
//         }

//         .products-catalogue .custom-solution-copy h3 span {
//           color: #ff7950;
//         }

//         .products-catalogue .custom-solution-copy p {
//           max-width: 680px;

//           margin: 0;

//           color: rgba(255, 255, 255, 0.72);

//           font-size: 15px;
//           line-height: 1.65;
//         }


//         /* =================================================
//            CUSTOM SOLUTION BUTTON
//         ================================================= */

//         .products-catalogue .custom-solution-button {
//           position: relative;
//           z-index: 2;

//           display: inline-flex;
//           align-items: center;
//           justify-content: center;

//           flex-shrink: 0;

//           gap: 17px;

//           padding: 14px 20px;

//           border: 1px solid rgba(255, 255, 255, 0.85);
//           border-radius: 7px;

//           background: transparent;

//           color: #ffffff;

//           font-size: 12px;
//           font-weight: 700;

//           text-decoration: none;

//           white-space: nowrap;

//           transition:
//             background 0.25s ease,
//             color 0.25s ease,
//             border-color 0.25s ease;
//         }

//         .products-catalogue .custom-solution-button b {
//           font-size: 17px;
//           font-weight: 500;
//         }

//         .products-catalogue .custom-solution-button:hover {
//           border-color: #ffffff;

//           background: #ffffff;

//           color: #100b4f;
//         }


//         /* =================================================
//            PROVEN SOLUTIONS HEADING
//         ================================================= */

//         .products-catalogue .proven-solutions-heading {
//           margin-bottom: 32px;
//         }

//         .products-catalogue .proven-solutions-heading h3 {
//           margin: 10px 0 12px;

//           color: #100b4f;

//           font-size: clamp(34px, 4vw, 52px);
//           font-weight: 700;
//           line-height: 1;

//           letter-spacing: -0.04em;
//         }

//         .products-catalogue .proven-solutions-heading h3 span {
//           color: #c86944;
//         }

//         .products-catalogue .proven-solutions-heading p {
//           max-width: 650px;

//           margin: 0;

//           color: #39456b;

//           font-size: 15px;
//           line-height: 1.6;
//         }


//         /* =================================================
//            TABLET
//         ================================================= */

//         @media (max-width: 1100px) {

//           .products-catalogue .solution-capability-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .products-catalogue .platform-flow {
//             grid-template-columns: repeat(3, 1fr);
//             row-gap: 24px;
//           }

//           .products-catalogue .platform-flow-item b {
//             display: none;
//           }

//         }


//         /* =================================================
//            MOBILE / SMALL TABLET
//         ================================================= */

//         @media (max-width: 800px) {

//           .products-catalogue .catalogue-heading {
//             flex-direction: column;
//             align-items: flex-start;

//             gap: 25px;
//           }

//           .products-catalogue .catalogue-heading-right {
//             width: 100%;
//           }

//           .products-catalogue .solution-capability-heading {
//             flex-direction: column;
//             align-items: flex-start;

//             gap: 22px;
//           }

//           .products-catalogue .solution-capability-heading > p {
//             max-width: 100%;
//           }

//           .products-catalogue .platform-solutions-intro {
//             padding: 34px 28px;
//           }

//           .products-catalogue .custom-solution-banner {
//             flex-direction: column;
//             align-items: flex-start;

//             padding: 34px 28px;
//           }

//           .products-catalogue .custom-solution-button {
//             width: auto;
//           }

//         }


//         /* =================================================
//            MOBILE
//         ================================================= */

//         @media (max-width: 560px) {

//           .products-catalogue .solution-capability-grid {
//             grid-template-columns: 1fr;
//           }

//           .products-catalogue .platform-flow {
//             grid-template-columns: 1fr;
//             gap: 14px;
//           }

//           .products-catalogue .platform-solutions-copy h3,
//           .products-catalogue .solution-capability-heading h3,
//           .products-catalogue .proven-solutions-heading h3 {
//             font-size: 34px;
//           }

//           .products-catalogue .custom-solution-button {
//             width: 100%;
//           }

//         }

//       `}</style>


//       <div className="products-container">



//         {/* =================================================
//             SOLUTION UNIVERSE
//         ================================================= */}

//         <motion.div
//           className="solution-capability-section"

//           initial={{
//             opacity: 0,
//             y: 30,
//           }}

//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}

//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}

//           transition={{
//             duration: 0.6,
//           }}
//         >

//           <div className="solution-capability-heading">

//             <div>

//               <h3>
//                 What can MeghaAI
//                 <span> solve?</span>
//               </h3>

//             </div>


//           </div>


//           <div className="solution-capability-grid">

//             {solutionCapabilities.map((capability, index) => (

//               <motion.div
//                 className="solution-capability-card"
//                 key={capability.title}

//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}

//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}

//                 viewport={{
//                   once: true,
//                   amount: 0.2,
//                 }}

//                 transition={{
//                   duration: 0.45,
//                   delay: index * 0.05,
//                 }}
//               >

//                 <div className="solution-capability-top">

//                   <span className="solution-capability-index">
//                     {capability.number}
//                   </span>


//                 </div>

//                 <h4>
//                   {capability.title}
//                 </h4>

//                 <div className="solution-capability-items">

//                   {capability.items.map((item) => (

//                     <span key={item}>
//                       {item}
//                     </span>

//                   ))}

//                 </div>

//               </motion.div>

//             ))}

//           </div>


//         </motion.div>



//         {/* =================================================
//             PROVEN SOLUTIONS
//         ================================================= */}

//         <div className="proven-solutions-heading">

//           <span className="products-eyebrow">
//             PROVEN SOLUTIONS
//           </span>

//           <h3>
//             Intelligence already
//             <span> in action.</span>
//           </h3>

//           <p>
//             Explore some of the industrial AI solutions already
//             powered by the MeghaAI platform.
//           </p>

//         </div>



//         {/* =================================================
//             EXISTING PRODUCT GRID
//         ================================================= */}

//         <div className="products-card-grid">

//           {products.map((product, index) => {

//             const content =
//               catalogueContent[product.id];

//             return (

//               <motion.article

//                 key={product.id}

//                 className={
//                   `product-card product-card-${product.accent}`
//                 }

//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}

//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}

//                 viewport={{
//                   once: true,
//                   amount: 0.2,
//                 }}

//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.08,
//                 }}

//               >

//                 <Link
//                   to={`/products/${product.id}`}
//                   className="product-card-click"
//                 >

//                   <div className="product-card-visual">

//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="product-card-image"
//                     />

//                     <div className="product-card-overlay" />

//                   </div>


//                   <div className="product-card-content">

//                     <span className="product-card-category">
//                       {
//                         content?.category ||
//                         product.category
//                       }
//                     </span>

//                     <h3>
//                       {product.name}
//                     </h3>

//                     <p>
//                       {
//                         content?.description ||
//                         product.shortDescription
//                       }
//                     </p>

//                     <span className="product-card-link">

//                       Explore Solution

//                       <b>
//                         →
//                       </b>

//                     </span>

//                   </div>

//                 </Link>

//               </motion.article>

//             );

//           })}

//         </div>

//       </div>

//     </section>

//   );

// }