import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { products } from "../data/products";
import "../styles/product-detail.css";

/* =========================================================
   PRODUCT CONTENT
========================================================= */

const productContent = {
  "structural-health-monitoring": {
    type: "shm",
    category: "STRUCTURAL HEALTH MONITORING",
    heroHeadline: "Real-Time Intelligence for Critical Assets",
    heroDescription:
      "Continuous, sensor-driven Structural Health Monitoring (SHM) engineered to prevent catastrophic failure, optimize maintenance overhead, and maximize asset lifespan.",
    overviewTitle:
      "Predictive structural intelligence for assets that cannot afford failure.",
    overview:
      "MeghaAI Structural Health Monitoring continuously transforms physical infrastructure into a stream of real-time engineering data. By combining ruggedized sensors, edge computing and predictive analytics, teams can identify structural risk before fatigue becomes failure and make maintenance decisions using empirical operational data.",
    benefits: [
      ["Predictive Risk Elimination", "Transition from high-cost emergency repairs to proactive condition-based maintenance before fatigue turns into failure."],
      ["24/7 Continuous Integrity", "Stream strain, vibration, tilt and load analytics from hundreds of active sensors directly to your central dashboard."],
      ["Engineering Precision", "Drive every capital maintenance decision with Agentic AI and Physics AI, combining real-time intelligence with physics-based models for precise, evidence-driven asset assessment."],
    ],
    flow: ["Precision sensing", "Edge data aggregation", "Predictive analysis", "Actionable response"],
    architecture: [
      ["SENSING", "Detection Network", "High-precision sensors measuring strain, vibration, temperature, tilt and corrosion.", "Replaces manual inspections with continuous, localized asset tracking."],
      ["EDGE", "Edge & Data Pipeline", "Industrial IoT gateways filtering noise and transmitting data securely.", "Guarantees low-latency, reliable data flow in harsh industrial environments."],
      ["ANALYTICS", "Analytical Engine", "Machine learning models analyzing real-time structural stress against baseline thresholds.", "Detects micro-fractures, load spikes and anomaly drifts early."],
      ["ACTION", "Actionable Dashboard", "Instant alert triggers, automated reporting and structural health scoring.", "Enables immediate risk mitigation and simplified compliance audits."],
    ],
    howItWorks: [
      {
        number: "01",
        title: "Precision Detection Network Deployment",
        description: "Non-destructive, high-durability sensor installation across critical structural stress points, weld zones and dynamic load areas.",
        points: [
          "Strain Gauges — Track micro-deformations, localized tension and material stress limits.",
          "Accelerometers & Vibration Sensors — Measure structural frequencies, resonance shifts and dynamic impact loads.",
          "Tilt Sensors — Monitor angular deflection, foundation settlement and structural drift.",
          "Thermal Sensors — Track environmental degradation and temperature-induced material expansion.",
        ],
      },
      {
        number: "02",
        title: "Edge Data Aggregation & Filtering",
        description: "Zero-latency noise reduction and intelligent processing for high-frequency raw data streams in harsh industrial environments.",
        points: [
          "Signal filtering algorithms remove electromagnetic interference and operational ambient noise.",
          "Edge processing units perform immediate baseline comparisons to catch sudden load spikes within milliseconds.",
          "Data is encrypted and securely transmitted to the central cloud platform.",
        ],
      },
      {
        number: "03",
        title: "Algorithmic Processing & Anomaly Detection",
        description: "Physics-informed machine learning and dynamic stress modelling evaluate structural performance against engineering baselines.",
        points: [
          "Algorithms compute remaining useful life based on cumulative fatigue cycle counts.",
          "Machine learning models identify subtle baseline drifts that may signal hidden micro-fractures or foundation movement.",
          "Environmental compensation models separate normal thermal expansion from actual structural distress.",
        ],
      },
      {
        number: "04",
        title: "Actionable Dashboard & Automated Response",
        description: "Complex sensor streams are translated into simplified health indicators and operational KPIs for engineering teams.",
        points: [
          "Instant Alerting — Automated notifications trigger when pre-set strain or displacement thresholds are breached.",
          "Predictive Maintenance Scheduling — Recommended repair timelines allow teams to fix minor flaws during planned shutdowns.",
          "Automated reporting provides traceable structural performance and risk history for engineering review.",
        ],
      },
    ],
    capabilities: [
      ["Strain & deformation monitoring", "strain"],
      ["Vibration and resonance analysis", "vibration"],
      ["Tilt and structural drift detection", "tilt"],
      ["Temperature compensation", "temperature"],
      ["Corrosion monitoring", "corrosion"],
      ["Micro-fracture detection", "fracture"],
      ["Fatigue cycle analysis", "fatigue"],
      ["Remaining useful life estimation", "rul"],
      ["Load spike detection", "load"],
      ["Baseline anomaly detection", "anomaly"],
      ["Automated threshold alerting", "alert"],
      ["Predictive maintenance scheduling", "maintenance"],
    ],
    applications: [
      ["Heavy Manufacturing & Steel Mills", "STRUCTURAL LOAD", "Monitor extreme dynamic loads, crane girders and severe thermal cycles.", "industrial"],
      ["Bridges & Infrastructure", "DEFLECTION", "Track structural deflection, fatigue cycles and dynamic seismic responses.", "bridge"],
      ["Warehouses & High-Bay Storage", "LIVE LOAD", "Prevent overloading failures and continuously monitor structural integrity under shifting live loads.", "warehouse"],
      ["Energy & Offshore Facilities", "HIGH RISK", "Detect structural fatigue, weld-joint stress and environmental corrosion in high-risk zones.", "offshore"],
    ],
    roi: [
      ["Unplanned Downtime Reduction", "Identify micro-defects early to align structural repairs with scheduled maintenance shutdowns."],
      ["Extended Asset Lifetime", "Validate structural safety margins under actual operational conditions to extend functional asset lifespan."],
      ["Compliance & Risk Mitigation", "Maintain automated, immutable audit records to support regulatory requirements and lower operational risk."],
    ],
    intelligence: {
      score: "98.7%",
      scoreLabel: "STRUCTURAL HEALTH",
      status: "CONTINUOUS MONITORING",
      metrics: [["STRAIN", "0.42 mm"], ["VIBRATION", "1X"], ["TILT", "+0.18°"], ["TEMPERATURE", "29.4°C"], ["LOAD", "87.4 kN"], ["FATIGUE", "18.4M"]],
    },
    finalTitle: "Turn structural data into action.",
    finalDescription: "Connect critical assets to continuous structural intelligence and give engineering teams the data they need to detect risk early, optimize maintenance and extend asset life.",
  },

  "cobble-monitoring": {
    type: "cobble",
    category: "HOT ROLLING / COBBLE PREDICTION",
    heroHeadline: "Zero-Cobble Intelligence for Hot Rolling Mills",
    heroDescription:
      "Real-time AI predictive analytics that detect roll-stand anomalies, prevent catastrophic cobbles, and maximize rolling mill throughput.",
    overviewTitle: "From chaotic mill stoppages to predictable production cycles.",
    overview:
      "A Cobble Prediction System is an AI-driven, real-time monitoring solution for hot rolling mills that detects and prevents uncontrolled buckling or jamming of red-hot steel billets. By continuously tracking motor load currents, roll speeds, inter-stand tension, billet temperature profiles and optical camera feeds, MeghaAI detects sub-second anomalies long before physical buckling occurs.",
    benefits: [
      ["Instant Anomaly Interception", "Catch sub-second load, speed and temperature drifts before red-hot billets buckle out of the pass line."],
      ["99%+ Cobble Prevention", "Transition from reactive manual scrap clearing to automated pre-cobble shearing and speed compensation."],
      ["Maximum OEE Expansion", "Eliminate unscheduled downtime, reduce roll wear and maintain peak rolling-mill overall equipment effectiveness."],
    ],
    flow: ["Mill sensing", "Edge processing", "Predictive AI", "Autonomous mitigation"],
    architecture: [
      ["SENSORS", "Mill Sensor Layer", "Captures motor current, roll torque, pyrometer thermal profiles and high-speed vision feeds.", "Provides complete mill-wide visibility across rolling stands."],
      ["EDGE", "High-Speed Edge Gateway", "Samples multi-channel sensor data at sub-millisecond intervals directly at the PLC level.", "Guarantees ultra-low latency response times critical for high-speed mills."],
      ["AI", "Predictive AI Engine", "Evaluates real-time parameter variations against trained neural-network cobble signatures.", "Identifies micro-tension instability and roll-slip conditions instantly."],
      ["ACTION", "Automated Interlock", "Sends direct trip signals to flying shears and speed-control systems.", "Safely cuts the billet prior to impact, protecting machinery and crew."],
    ],
    howItWorks: [
      {
        number: "01",
        title: "High-Speed Mill Signal Ingestion",
        description: "Capture multi-parameter signals from every active rolling stand through direct interfaces with mill PLCs and specialized sensor arrays.",
        points: [
          "Electrical Signals — High-frequency motor current, torque and voltage fluctuations across stand drives.",
          "Optical & Thermal Sensing — Pyrometers measure head-to-tail temperature variations while high-speed cameras monitor billet tracking.",
          "Kinematic Metrics — Inter-stand looper position, roll RPM and pinch-roll drive speeds.",
        ],
      },
      {
        number: "02",
        title: "Edge Signal Processing & Pattern Recognition",
        description: "Real-time feature extraction at sub-millisecond rates using industrial edge computing close to the PLC layer.",
        points: [
          "Calculates instantaneous slip-grip ratios between rolls and steel billets.",
          "Monitors head-end entry impact signatures as billets hit each successive pass.",
          "Filters benign electrical harmonics from actual mechanical load-resistance spikes.",
        ],
      },
      {
        number: "03",
        title: "Neural Network Anomaly Evaluation",
        description: "Deep-learning models evaluate cobble probability continuously against recipe-specific baselines and historical cobble patterns.",
        points: [
          "Compares current billet behavior against recipe-specific reference baselines.",
          "Detects micro-buckling forces caused by colder billet heads or misaligned mill guides.",
          "Generates a dynamic Cobble Risk Index from 0–100% updated every few milliseconds.",
        ],
      },
      {
        number: "04",
        title: "Autonomous Mitigation & Operator Alerting",
        description: "Automated action begins before the billet enters the point of no return.",
        points: [
          "Automated Shearing — Triggers emergency flying shears to chop the incoming billet and isolate the fault.",
          "Speed Adjustments — Adjusts inter-stand looper speed ratios to clear temporary tension accumulation.",
          "Root Cause HMI — Displays exact stand location and probable cause such as guide misfeed, cold head or roll slippage.",
        ],
      },
    ],
    capabilities: [
      ["Motor current anomaly detection", "signal"],
      ["Roll speed and torque analysis", "speed"],
      ["Inter-stand tension monitoring", "tension"],
      ["Billet temperature profiling", "thermal"],
      ["High-speed vision tracking", "vision"],
      ["Slip-grip ratio detection", "ratio"],
      ["Cobble Risk Index", "risk"],
      ["Recipe-specific baselines", "baseline"],
      ["Guide misfeed detection", "guide"],
      ["Roll slippage detection", "slip"],
      ["Automated flying-shear trigger", "shear"],
      ["Operator root-cause HMI", "hmi"],
    ],
    applications: [
      ["Wire Rod & Rebar Mills", "100+ M/S", "Prevent high-speed cobbles in fast-finishing blocks running at extreme line speeds.", "mill"],
      ["Hot Strip Mills", "FINISHING", "Detect strip-tail tracking errors, inter-stand loop instability and cobble risk.", "strip"],
      ["Section & Structural Mills", "HEAVY ROLLING", "Track profile deformation and guide-entrance misalignment during heavy rolling passes.", "section"],
      ["Seamless Pipe Mills", "PIERCING", "Prevent billet-piercing jams and shell wall-thickness variation during high-stress elongation.", "pipe"],
    ],
    roi: [
      ["Mill Safety & Hazard Reduction", "Prevent violent red-hot billet cobbles and protect operators and adjacent electrical infrastructure."],
      ["Equipment & Roll Protection", "Reduce severe mechanical damage to roll stands, guides, bearings and drive shafts."],
      ["Yield & Scrap Optimization", "Catch billet misalignment early and save valuable prime steel tonnage."],
      ["Downtime Minimization", "Reduce post-cobble cleanup from hours of thermal cutting and manual clearing to controlled automated shearing."],
      ["Process Energy Efficiency", "Prevent energy waste associated with reheating discarded cobble scrap and restarting cold rolling equipment."],
    ],
    intelligence: {
      score: "03.8%",
      scoreLabel: "COBBLE RISK",
      status: "AI PREDICTION / NORMAL",
      metrics: [["MOTOR LOAD", "+1.8%"], ["ROLL SPEED", "STABLE"], ["TENSION", "-0.4%"], ["BILLET TEMP", "1,087°C"], ["STAND", "07"], ["AI CONFIDENCE", "97.4%"]],
    },
    finalTitle: "Turn mill signals into a controlled production line.",
    finalDescription: "Detect process drift before the point of no return, protect rolling equipment, reduce scrap and keep hot-rolling operations moving.",
  },

  "vibration-monitoring": {
    type: "vibration",
    category: "FURNACE VIBRATION MONITORING",
    heroHeadline: "Predict, Protect, Perform: Furnace Vibration Intelligence",
    heroDescription:
      "Continuous condition-monitoring engineered for high-temperature heavy industry—protecting blowers, ID fans and critical furnace drives from catastrophic failure.",
    overviewTitle: "Machine health intelligence for furnace equipment that cannot stop.",
    overview:
      "Industrial furnace systems rely on high-capacity rotating equipment including combustion air blowers, induced-draft fans, cooling-water pumps and charging mechanisms. Continuous Vibration Monitoring uses high-temperature industrial accelerometers attached directly to critical drives to capture real-time kinematic oscillations. FFT-based spectral analysis exposes imbalance, bearing degradation, gear wear and shaft misalignment before mechanical failure occurs.",
    benefits: [
      ["Sub-Millisecond Fault Catching", "Spot mechanical imbalance, bearing wear and resonance shifts before they force a furnace shutdown."],
      ["High-Temperature Engineering", "Ruggedized tri-axial accelerometers built for harsh, high-ambient thermal zones."],
      ["Predictive Maintenance Sync", "Time repair interventions precisely with planned refractory shutdowns to protect production schedules."],
    ],
    flow: ["Furnace sensors", "Edge FFT", "AI diagnostics", "Plant response"],
    architecture: [
      ["SENSORS", "Furnace Instrumentation Network", "High-temperature piezoelectric accelerometers mounted on blowers, pumps and gearboxes.", "Replaces manual spot-checks with 24/7 continuous health tracking."],
      ["EDGE", "Edge Signal Processing", "High-frequency vibration sampling with built-in FFT spectral breakdown.", "Filters ambient furnace noise to isolate true mechanical defects."],
      ["AI", "AI Predictive Engine", "Evaluates vibration amplitude and frequency against ISO 10816 standards and equipment baselines.", "Identifies bearing defects and shaft misalignment weeks in advance."],
      ["ACTION", "Plant HMI & Alerts", "Real-time severity scoring, automated alerts and SCADA integration.", "Triggers action before catastrophic failure or thermal trips occur."],
    ],
    howItWorks: [
      {
        number: "01",
        title: "High-Temp Sensor Hardware Deployment",
        description: "Deploy ruggedized sensors directly in extreme thermal zones and around critical furnace auxiliary machinery.",
        points: [
          "Combustion Air Blowers & ID Fans — Capture radial and axial vibration profiles.",
          "Cooling Water Circulation Pumps — Monitor impeller balance and fluid cavitation.",
          "Feeders & Charge Drives — Track shaft alignment and heavy gearbox mesh frequencies.",
        ],
      },
      {
        number: "02",
        title: "Edge Gateway Signal Conditioning",
        description: "Local edge processing isolates mechanical signals from operational vibration generated by neighboring heavy machinery.",
        points: [
          "Computes Velocity (RMS), Acceleration and Displacement indicators.",
          "Performs Fast Fourier Transform analysis to convert raw waves into frequency spectra.",
          "Filters operational vibration noise caused by adjacent heavy machinery.",
        ],
      },
      {
        number: "03",
        title: "Automated Fault Diagnostics",
        description: "Machine learning constantly checks live spectra against known mechanical fault signatures and equipment baselines.",
        points: [
          "1X Peak Spikes — Flags unbalance in heavy fan impellers caused by dust buildup or thermal warping.",
          "2X Peak Spikes — Identifies drive coupling misalignments.",
          "High-Frequency Harmonics — Detects early-stage bearing race pitting and lubrication breakdown.",
        ],
      },
      {
        number: "04",
        title: "Actionable Dashboard & Plant Interlocks",
        description: "Complex vibration data is translated into operational directives for plant and maintenance teams.",
        points: [
          "Severity Dashboards — Displays intuitive health status for all furnace auxiliaries.",
          "SCADA Interlocks — Can trigger automated blower speed roll-backs or emergency trip signals when thresholds are breached.",
          "Maintenance Work Orders — Generates targeted diagnostic reports for planned outages.",
        ],
      },
    ],
    capabilities: [
      ["Tri-axial vibration sensing", "sensor"],
      ["Velocity / RMS monitoring", "rms"],
      ["Acceleration monitoring", "accel"],
      ["Displacement monitoring", "disp"],
      ["FFT spectral analysis", "fft"],
      ["1X unbalance detection", "1x"],
      ["2X misalignment detection", "2x"],
      ["Bearing fault harmonics", "bearing"],
      ["Gear wear diagnostics", "gear"],
      ["Shaft alignment monitoring", "shaft"],
      ["SCADA interlocks", "scada"],
      ["Predictive maintenance work orders", "maintenance"],
    ],
    applications: [
      ["Primary Metals & Smelters", "DRAFT / EXHAUST", "Monitor blast-furnace draft fans, baghouse exhausts and charging crane drives.", "metals"],
      ["Glass & Ceramic Melting Furnaces", "HIGH HEAT", "Track continuous combustion-air blowers and glass-pull rollers operating under severe heat.", "glass"],
      ["Petrochemical Fired Heaters", "PROCESS", "Monitor air-preheater drives and high-pressure furnace feed pumps.", "petrochem"],
      ["Cement Kilns & Preheaters", "ROTARY DRIVE", "Prevent unexpected main-drive gear wear and kiln-tire displacement.", "cement"],
    ],
    roi: [
      ["Catastrophic Failure & Explosion Prevention", "Detect draft-fan unbalance or cooling-pump cavitation early and protect furnace pressure control and refractory integrity."],
      ["Zero Unplanned Outages", "Enable predictive condition-based maintenance during scheduled furnace relining cycles."],
      ["Energy & Combustion Efficiency", "Keep air blowers and exhaust systems mechanically efficient to support fuel-to-oxygen optimization."],
      ["Extended Asset Lifespan", "Protect high-value furnace auxiliaries from structural fatigue and premature mechanical degradation."],
    ],
    intelligence: {
      score: "4.8 mm/s",
      scoreLabel: "VIBRATION RMS",
      status: "HEALTHY / 1X SIGNATURE",
      metrics: [["1X", "148 Hz"], ["2X", "296 Hz"], ["RMS", "4.8 mm/s"], ["ACCEL", "0.92 g"], ["SEVERITY", "NORMAL"], ["ASSET", "ID FAN 04"]],
    },
    finalTitle: "Predict the machine before the furnace pays the price.",
    finalDescription: "Continuously monitor critical furnace auxiliaries, detect fault signatures early and synchronize mechanical intervention with planned outages.",
  },
};

function getProductContent(product) {
  return productContent[product.id] || productContent["structural-health-monitoring"];
}

/* =========================================================
   PRODUCT DETAIL PAGE
========================================================= */

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  const content = product ? getProductContent(product) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [productId]);

  if (!product || !content) {
    return (
      <main className="product-detail-page">
        <section className="pd-not-found">
          <span> </span>
          <h1>Product not found</h1>
          <Link to="/products" className="pd-action pd-action-primary">
            Back to Products
          </Link>
        </section>
      </main>
    );
  }

  const image = product.detailImage || product.image;

  return (
    <main className={`product-detail-page pd-${product.accent || "sky"} pd-product-${content.type}`}>
      <ProductHero product={product} content={content} image={image} />

      <nav className="pd-sticky-nav">
        <div className="pd-sticky-inner">
          <div className="pd-sticky-links">
            <a href="#overview">Overview</a>
            <a href="#architecture">How It Works</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#applications">Applications</a>
            <a href="#roi">Business ROI</a>
            <a href="#intelligence">Live Intelligence</a>
          </div>
        </div>
      </nav>

      <Overview content={content} />
      <Architecture content={content} />
      <Workflow content={content} />
      <Capabilities content={content} />
      <Applications content={content} image={image} />
      <ROI content={content} />
      <LiveIntelligence content={content} image={image} product={product} />
      <FinalCTA content={content} />
    </main>
  );
}

/* =========================================================
   HERO
========================================================= */

function ProductHero({ product, content, image }) {
  return (
    <section className="pd-hero">
      <div className="pd-hero-grid" />
      <div className="pd-hero-glow" />

      <div className="pd-hero-container">
        <motion.div
          className="pd-hero-copy"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >
          <span className="pd-eyebrow">{content.category}</span>

          <h1>{content.heroHeadline}</h1>

          <p>{content.heroDescription}</p>

          <div className="pd-hero-buttons">
            <Link to="/contact" className="pd-action pd-action-primary">
              Talk to an Expert <span>↗</span>
            </Link>

            <a href="#overview" className="pd-action pd-action-ghost">
              Explore System <span>↓</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="pd-hero-visual"
          initial={{ opacity: 0, scale: .96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8, delay: .1 }}
        >
          <HeroVisual product={product} content={content} image={image} />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual({ product, content, image }) {
  if (content.type === "cobble") {
    return (
      <div className="hero-visual hero-cobble-intelligent">
        <img src={image} alt={product.name} />
        <div className="hero-photo-vignette" />

        <div className="hero-cobble-topline">
          <span>HOT ROLLING / LIVE PROCESS</span>
          <strong>COBBLE AI</strong>
        </div>

        <div className="hero-cobble-risk">
          <span>COBBLE RISK</span>
          <strong>03.8%</strong>
          <small>AI PREDICTION / NORMAL</small>
        </div>

        <div className="hero-cobble-telemetry">
          <Metric label="MOTOR LOAD" value="+1.8%" />
          <Metric label="ROLL SPEED" value="STABLE" />
          <Metric label="TENSION" value="-0.4%" />
          <Metric label="BILLET TEMP" value="1,087°C" />
          <Metric label="STAND" value="07" />
          <Metric label="AI CONFIDENCE" value="97.4%" />
        </div>

        <div className="hero-cobble-signal">
          <span />
          <span />
          <span className="peak" />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="hero-image-label">
          <i /> LIVE MILL INTELLIGENCE
        </div>
      </div>
    );
  }

  if (content.type === "vibration") {
    return (
      <div className="hero-visual hero-furnace-intelligent">
        <img src={image} alt={product.name} />
        <div className="hero-photo-vignette" />

        <div className="hero-furnace-topline">
          <span>FURNACE AUXILIARY / LIVE</span>
          <strong>VIBRATION AI</strong>
        </div>

        <div className="hero-vibration-ui">
          <span>LIVE VIBRATION</span>
          <strong>1X</strong>
          <small>UNBALANCE SIGNATURE</small>
        </div>

        <div className="hero-fft">
          <div className="hero-fft-grid" />
          <div className="hero-fft-bars">
            {[18, 24, 32, 46, 26, 78, 38, 22, 86, 34, 21, 17].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="hero-fft-marker marker-1">1X</div>
          <div className="hero-fft-marker marker-2">2X</div>
          <div className="hero-fft-marker marker-3">3X</div>
        </div>

        <div className="hero-vibration-status">
          <span>ASSET HEALTH</span>
          <strong>HEALTHY</strong>
          <small>RMS 4.8 mm/s · ID FAN 04</small>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-visual hero-shm-intelligent">
      <img src={image} alt={product.name} />
      <div className="hero-photo-vignette" />

      <div className="hero-shm-overlay">
        <div className="hero-shm-overlay-title">
          STRUCTURAL INTEGRITY / LIVE TELEMETRY
        </div>

        <div className="shm-sensor sensor-01" />
        <div className="shm-sensor sensor-02" />
        <div className="shm-sensor sensor-03" />
        <div className="shm-sensor sensor-04" />
        <div className="shm-sensor sensor-05" />

        <div className="shm-connection connection-01" />
        <div className="shm-connection connection-02" />
        <div className="shm-connection connection-03" />
      </div>

      <div className="hero-shm-health">
        <span>STRUCTURAL HEALTH</span>
        <strong>98.7%</strong>
        <small>CONTINUOUS MONITORING</small>
      </div>

      <div className="hero-shm-data">
        <Metric label="STRAIN" value="0.42 mm" />
        <Metric label="VIBRATION" value="1X" />
        <Metric label="TILT" value="+0.18°" />
        <Metric label="LOAD" value="87.4 kN" />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

/* =========================================================
   OVERVIEW
========================================================= */

function Overview({ content }) {
  return (
    <section id="overview" className="pd-section pd-overview">
      <div className="pd-shell">
        <div className="pd-section-kicker">OVERVIEW</div>

        <div className="pd-overview-layout">
          <motion.div
            className="pd-overview-statement"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{content.overviewTitle}</h2>
          </motion.div>

          <motion.div
            className="pd-overview-body"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>{content.overview}</p>

            <div className="pd-flow">
              {content.flow.map((item, index) => (
                <div className="pd-flow-step" key={item}>
                  <strong>{item}</strong>
                  {index < content.flow.length - 1 && <i>→</i>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pd-benefit-grid">
          {content.benefits.map(([title, description], index) => (
            <motion.article
              key={title}
              className="pd-benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
            >
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ARCHITECTURE
========================================================= */

function Architecture({ content }) {
  return (
    <section id="architecture" className="pd-section pd-architecture">
      <div className="pd-shell">
        <div className="pd-section-intro">
          <div>
            <div className="pd-section-kicker">HOW IT WORKS</div>
            <h2>
              Signals become
              <span>engineering action.</span>
            </h2>
          </div>
          <p>
            A layered industrial intelligence system moves from physical
            signals through edge processing and predictive analysis to
            a measurable operational response.
          </p>
        </div>

        <div className="pd-architecture-flow">
          {content.architecture.map(([short, title, description, benefit], index) => (
            <motion.article
              key={title}
              className="pd-architecture-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
              transition={{ duration: .5, delay: index * .08 }}
            >
              <div className="pd-architecture-index">0{index + 1}</div>
              <small>{short}</small>
              <div className="pd-architecture-line" />
              <h3>{title}</h3>
              <p>{description}</p>
              <strong>{benefit}</strong>
              {index < content.architecture.length - 1 && <div className="pd-flow-connector">→</div>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function Workflow({ content }) {
  return (
    <section className="pd-section pd-workflow">
      <div className="pd-shell">
        <div className="pd-section-intro">
          <div>
            <div className="pd-section-kicker">PLATFORM WORKFLOW</div>
            <h2>
              From physical signal
              <span>to operational response.</span>
            </h2>
          </div>
          <p>
            The system is designed around high-frequency industrial signals,
            local processing, model-driven interpretation and immediate action.
          </p>
        </div>

        <div className="pd-workflow-list">
          {content.howItWorks.map((step) => (
            <motion.article
              key={step.number}
              className="pd-workflow-item"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .1 }}
            >
              <div className="pd-workflow-number">{step.number}</div>
              <div className="pd-workflow-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="pd-workflow-points">
                  {step.points.map((point) => (
                    <div key={point} className="pd-workflow-point">
                      <i />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function Capabilities({ content }) {
  return (
    <section id="capabilities" className="pd-section pd-capabilities">
      <div className="pd-shell">
        <div className="pd-section-intro">
          <div>
            <div className="pd-section-kicker">CAPABILITIES</div>
            <h2>
              Designed to
              <span>{content.type === "shm" ? "see what others miss." : "read what machines are telling you."}</span>
            </h2>
          </div>
          <p>
            Each capability turns a raw industrial signal into a measurable
            state, pattern, prediction or engineering action.
          </p>
        </div>

        <div className="pd-capability-grid">
          {content.capabilities.map(([label, type], index) => (
            <CapabilityCard key={label} label={label} type={type} index={index} productType={content.type} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ label, type, index, productType }) {
  return (
    <motion.article
      className={`pd-capability-card pd-capability-${productType}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .08 }}
      transition={{ duration: .4, delay: index * .025 }}
    >
      <div className="pd-capability-top">
        <span>0{index + 1}</span>
        <i>{productType === "shm" ? "LIVE" : "AI"}</i>
      </div>

      <h3>{label}</h3>

      <CapabilityVisual type={type} productType={productType} />
    </motion.article>
  );
}

function CapabilityVisual({ type, productType }) {
  if (productType === "shm") {
    const visuals = {
      strain: "MATERIAL RESPONSE / LIVE",
      vibration: "FFT / FREQUENCY",
      tilt: "GEOMETRY / DRIFT",
      temperature: "THERMAL FIELD",
      corrosion: "MATERIAL CONDITION",
      fracture: "DEFECT SCAN",
      fatigue: "CYCLE HISTORY",
      rul: "LIFE FORECAST",
      load: "LOAD EVENT",
      anomaly: "BASELINE VS LIVE",
      alert: "THRESHOLD RESPONSE",
      maintenance: "MAINTENANCE WINDOW",
    };
    return (
      <div className={`pd-cap-visual pd-visual-${type}`}>
        <div className="pd-cap-visual-grid" />
        <div className="pd-cap-visual-title">{visuals[type]}</div>
        <VisualGraphic type={type} />
      </div>
    );
  }

  const visuals = {
    signal: "CURRENT / TORQUE",
    speed: "ROLL SPEED",
    tension: "INTER-STAND TENSION",
    thermal: "PYROMETER",
    vision: "VISION TRACKING",
    ratio: "SLIP / GRIP",
    risk: "COBBLE RISK",
    baseline: "RECIPE BASELINE",
    guide: "GUIDE ALIGNMENT",
    slip: "ROLL SLIP",
    shear: "INTERLOCK",
    hmi: "ROOT CAUSE HMI",
    sensor: "TRI-AXIAL SENSOR",
    rms: "VELOCITY / RMS",
    accel: "ACCELERATION",
    disp: "DISPLACEMENT",
    fft: "FFT SPECTRUM",
    "1x": "1X UNBALANCE",
    "2x": "2X MISALIGNMENT",
    bearing: "BEARING HARMONICS",
    gear: "GEAR MESH",
    shaft: "SHAFT ALIGNMENT",
    scada: "SCADA INTERLOCK",
    maintenance: "WORK ORDER",
  };

  return (
    <div className={`pd-cap-visual pd-visual-${type}`}>
      <div className="pd-cap-visual-grid" />
      <div className="pd-cap-visual-title">{visuals[type] || "AI SIGNAL"}</div>
      <VisualGraphic type={type} />
    </div>
  );
}

function VisualGraphic({ type }) {
  if (["vibration", "fft", "1x", "2x", "bearing", "gear", "sensor", "rms", "accel", "disp"].includes(type)) {
    return (
      <div className="pd-spectrum">
        {[18, 27, 36, 62, 30, 88, 42, 27, 72, 34, 25, 18].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    );
  }

  if (["risk", "anomaly", "baseline", "load", "signal", "speed", "tension", "ratio", "thermal", "vision"].includes(type)) {
    return (
      <div className="pd-signal-chart">
        <div className="pd-signal-threshold" />
        <div className="pd-signal-trace" />
        <span className="pd-signal-marker" />
      </div>
    );
  }

  if (["tilt", "guide", "slip", "shaft"].includes(type)) {
    return (
      <div className="pd-geometry-visual">
        <span className="geo-column left" />
        <span className="geo-column right" />
        <span className="geo-beam top" />
        <span className="geo-beam mid" />
        <span className="geo-diagonal one" />
        <span className="geo-diagonal two" />
      </div>
    );
  }

  if (["temperature", "thermal"].includes(type)) {
    return (
      <div className="pd-thermal-visual">
        <span /><span /><span /><span /><span />
        <i />
      </div>
    );
  }

  if (["corrosion", "fracture"].includes(type)) {
    return (
      <div className="pd-material-visual">
        <div className="material-surface" />
        <span className="material-line" />
        <span className="material-line small" />
      </div>
    );
  }

  if (["fatigue", "rul", "maintenance", "work-order"].includes(type)) {
    return (
      <div className="pd-forecast-visual">
        <div className="forecast-line" />
        <span className="forecast-point one" />
        <span className="forecast-point two" />
        <span className="forecast-point three" />
        <strong>{type === "rul" ? "82%" : type === "maintenance" ? "42 DAYS" : "18.4M"}</strong>
      </div>
    );
  }

  if (["alert", "shear", "hmi", "scada", "interlock"].includes(type)) {
    return (
      <div className="pd-alert-visual">
        <span className="alert-line" />
        <strong>TRIGGER</strong>
        <i />
      </div>
    );
  }

  if (type === "vision") {
    return (
      <div className="pd-camera-visual">
        <span className="camera-frame" />
        <i className="camera-target" />
      </div>
    );
  }

  return (
    <div className="pd-generic-visual">
      <span />
      <span />
      <span />
    </div>
  );
}

/* =========================================================
   APPLICATIONS
========================================================= */

function Applications({ content, image }) {
  return (
    <section id="applications" className="pd-section pd-applications">
      <div className="pd-shell">
        <div className="pd-section-intro">
          <div>
            <div className="pd-section-kicker">APPLICATIONS</div>
            <h2>
              Built for
              <span>real industrial environments.</span>
            </h2>
          </div>
          <p>
            The platform adapts its intelligence layer to the physical
            asset, operating environment, loading pattern and risk profile.
          </p>
        </div>

        <div className="pd-applications-grid">
          {content.applications.map(([title, tag, description, kind], index) => (
            <motion.article
              key={title}
              className={`pd-application ${kind}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .1 }}
              transition={{ duration: .45, delay: index * .06 }}
            >
              <img src={image} alt="" />
              <div className="pd-application-vignette" />
              <div className="pd-application-top">
                <span>APPLICATION / 0{index + 1}</span>
                <i>{tag}</i>
              </div>

              <ApplicationOverlay kind={kind} />

              <div className="pd-application-copy">
                <small>{content.type === "cobble" ? "ROLLING MILL" : content.type === "vibration" ? "ROTATING ASSET" : "STRUCTURAL ASSET"}</small>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationOverlay({ kind }) {
  return (
    <div className={`pd-application-overlay pd-application-overlay-${kind}`}>
      <div className="pd-application-grid" />
      <div className="pd-application-signal">
        <span />
        <span />
        <span />
      </div>
      <div className="pd-application-node n1" />
      <div className="pd-application-node n2" />
      <div className="pd-application-node n3" />
    </div>
  );
}

/* =========================================================
   ROI
========================================================= */

function ROI({ content }) {
  return (
    <section id="roi" className="pd-section pd-roi">
      <div className="pd-shell">
        <div className="pd-section-intro">
          <div>
            <div className="pd-section-kicker">ENTERPRISE BUSINESS ROI</div>
            <h2>
              Turn intelligence
              <span>into measurable value.</span>
            </h2>
          </div>
          <p>
            The purpose of industrial AI is not simply to detect something.
            It is to change the operating decision before the cost arrives.
          </p>
        </div>

        <div className="pd-roi-grid">
          {content.roi.map(([title, description], index) => (
            <motion.article
              className="pd-roi-card"
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .06 }}
            >
              <div className="pd-roi-number">0{index + 1}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LIVE INTELLIGENCE
========================================================= */

function LiveIntelligence({ content, image, product }) {
  return (
    <section id="intelligence" className="pd-section pd-intelligence">
      <div className="pd-shell">
        <div className="pd-section-intro">
          <div>
            <div className="pd-section-kicker">LIVE INTELLIGENCE</div>
            <h2>
              See the asset.
              <span>Understand the signal.</span>
            </h2>
          </div>
          <p>
            MeghaAI transforms raw industrial data into engineering context
            that supports faster, safer and more informed decisions.
          </p>
        </div>

        <div className={`pd-live-stage pd-live-${content.type}`}>
          <img src={image} alt={product.name} />
          <div className="pd-live-vignette" />

          {content.type === "cobble" && <CobbleLive content={content} />}
          {content.type === "vibration" && <VibrationLive content={content} />}
          {content.type === "shm" && <SHMLive content={content} />}
        </div>
      </div>
    </section>
  );
}

function SHMLive({ content }) {
  return (
    <>
      <div className="pd-live-title">STRUCTURAL HEALTH / LIVE</div>
      <div className="pd-live-structure-map">
        <span className="map-line l1" />
        <span className="map-line l2" />
        <span className="map-line l3" />
        {["m1", "m2", "m3", "m4", "m5", "m6"].map((n) => <i key={n} className={`live-node ${n}`} />)}
      </div>
      <div className="pd-live-health-score">
        <span>{content.intelligence.scoreLabel}</span>
        <strong>{content.intelligence.score}</strong>
        <small>{content.intelligence.status}</small>
      </div>
      <div className="pd-live-metrics">
        {content.intelligence.metrics.map(([label, value]) => <Metric key={label} label={label} value={value} />)}
      </div>
    </>
  );
}

function CobbleLive({ content }) {
  return (
    <>
      <div className="pd-live-title">HOT ROLLING / COBBLE PREDICTION</div>
      <div className="pd-cobble-live-line">
        {[14, 23, 31, 44, 26, 62, 28, 70, 34, 20, 17, 13].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
      </div>
      <div className="pd-cobble-risk-panel">
        <span>{content.intelligence.scoreLabel}</span>
        <strong>{content.intelligence.score}</strong>
        <small>{content.intelligence.status}</small>
      </div>
      <div className="pd-live-metrics">
        {content.intelligence.metrics.map(([label, value]) => <Metric key={label} label={label} value={value} />)}
      </div>
    </>
  );
}

function VibrationLive({ content }) {
  return (
    <>
      <div className="pd-live-title">FURNACE AUXILIARY / FFT ANALYSIS</div>
      <div className="pd-vibration-live-spectrum">
        {[18, 28, 34, 44, 22, 86, 32, 20, 65, 31, 22, 16].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
        <i className="live-marker one">1X</i>
        <i className="live-marker two">2X</i>
      </div>
      <div className="pd-vibration-health">
        <span>{content.intelligence.scoreLabel}</span>
        <strong>{content.intelligence.score}</strong>
        <small>{content.intelligence.status}</small>
      </div>
      <div className="pd-live-metrics">
        {content.intelligence.metrics.map(([label, value]) => <Metric key={label} label={label} value={value} />)}
      </div>
    </>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA({ content }) {
  return (
    <section className="pd-final">
      <div className="pd-final-bg" />
      <div className="pd-shell pd-final-shell">
        <div className="pd-section-kicker">MEGHAAI / INDUSTRIAL INTELLIGENCE</div>
        <h2>{content.finalTitle}</h2>
        <p>{content.finalDescription}</p>
        <Link to="/contact" className="pd-action pd-action-primary">
          Talk to an Expert <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
