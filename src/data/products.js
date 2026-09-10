/* =========================================================
   MEGHAAI PRODUCTS
   Product catalogue + product-detail visual assets
========================================================= */
import shmImage from "../assets/products/SHM.png";

export const products = [
  {
    id: "structural-health-monitoring",
    number: "01",
    category: "STRUCTURAL INTELLIGENCE",
    name: "Structural Health Monitoring",

    image: shmImage,

    heroImage:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e874031d33_0e350112ba574460.png",

    shortDescription:
      "Continuous structural intelligence for critical assets using high-frequency sensing, edge processing and predictive analytics.",

    description:
      "Continuous, sensor-driven Structural Health Monitoring engineered to prevent catastrophic failure, optimize maintenance overhead and maximize asset lifespan.",

    accent: "orange",

    capabilities: [
      "High-Precision Structural Sensing",
      "Strain & Load Analytics",
      "Vibration & Resonance Monitoring",
      "Tilt & Structural Drift Detection",
      "Physics-Informed AI / ML",
      "Finite Element Model Integration",
      "Remaining Useful Life Analysis",
      "Predictive Maintenance Scheduling",
    ],

    flow: [
      "Structure",
      "Sensors",
      "Edge",
      "AI",
      "Insight",
    ],

    architecture: [
      {
        number: "01",
        short: "SENSING",
        title: "Detection Network",
        description:
          "High-precision sensors measure strain, vibration, temperature, tilt and corrosion across critical structural zones.",
        benefit:
          "Replaces manual inspections with continuous, localized asset tracking.",
      },
      {
        number: "02",
        short: "EDGE",
        title: "Edge & Data Pipeline",
        description:
          "Industrial IoT gateways filter operational noise, process high-frequency signals and securely transmit data from harsh environments.",
        benefit:
          "Guarantees reliable, low-latency data flow in demanding industrial environments.",
      },
      {
        number: "03",
        short: "ANALYTICS",
        title: "Analytical Engine",
        description:
          "Machine learning models evaluate structural stress against baseline thresholds to identify fatigue, load spikes and anomaly drift.",
        benefit:
          "Detects micro-fractures, load spikes and anomaly drift early.",
      },
      {
        number: "04",
        short: "ACTION",
        title: "Actionable Dashboard",
        description:
          "Instant alerts, automated reports and structural health scoring turn complex sensor streams into immediate engineering decisions.",
        benefit:
          "Enables immediate risk mitigation and simplified compliance audits.",
      },
    ],

    howItWorks: [
      {
        number: "01",
        title: "Precision Detection Network Deployment",
        description:
          "Non-destructive, high-durability sensor installation across critical structural stress points, weld zones and dynamic load areas.",
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
        description:
          "Zero-latency noise reduction and intelligent processing for high-frequency raw data streams in harsh industrial environments.",
        points: [
          "Signal filtering algorithms remove electromagnetic interference and operational ambient noise.",
          "Edge processing units perform immediate baseline comparisons to catch sudden load spikes within milliseconds.",
          "Data is encrypted and securely transmitted to the central cloud platform.",
        ],
      },
      {
        number: "03",
        title: "Algorithmic Processing & Anomaly Detection",
        description:
          "Physics-informed machine learning and dynamic stress modelling evaluate structural performance against engineering baselines.",
        points: [
          "Algorithms compute remaining useful life based on cumulative fatigue cycle counts.",
          "Machine learning models identify subtle baseline drifts that may signal hidden micro-fractures or foundation movement.",
          "Environmental compensation models separate normal thermal expansion from actual structural distress.",
        ],
      },
      {
        number: "04",
        title: "Actionable Dashboard & Automated Response",
        description:
          "Complex sensor streams are translated into simplified health indicators and operational KPIs for engineering teams.",
        points: [
          "Instant Alerting — Automated notifications trigger when pre-set strain or displacement thresholds are breached.",
          "Predictive Maintenance Scheduling — Recommended repair timelines allow teams to fix minor flaws during planned shutdowns.",
          "Automated reporting provides traceable structural performance and risk history for engineering review.",
        ],
      },
    ],

    capabilitiesDetailed: [
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
      {
        title: "Heavy Manufacturing",
        tag: "STRUCTURAL LOAD",
        description:
          "Monitor extreme dynamic loads, crane girders and severe thermal cycles.",
        image:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_38a6e4ccf6_fb42f263e0b220fb.png",
      },
      {
        title: "Bridges & Infrastructure",
        tag: "DEFLECTION",
        description:
          "Track structural deflection, fatigue cycles and dynamic seismic responses.",
        image:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9aa491e7a4_f19032f02dc0ad7e.png",
      },
      {
        title: "Warehouses",
        tag: "LIVE LOAD",
        description:
          "Prevent overloading failures and continuously monitor structural integrity.",
        image:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_eb043fc03f_cbbb4f6209a7a61e.png",
      },
      {
        title: "Energy & Offshore",
        tag: "HIGH RISK",
        description:
          "Detect structural fatigue, weld-joint stress and environmental corrosion.",
        image:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_11fc9d739e_f2f8c8d3d8386fca.png",
      },
    ],

    roi: [
      {
        title: "Unplanned Downtime Reduction",
        description:
          "Identify micro-defects early to align structural repairs with scheduled maintenance shutdowns.",
      },
      {
        title: "Extended Asset Lifetime",
        description:
          "Validate structural safety margins under actual operational conditions to extend functional asset lifespan.",
      },
      {
        title: "Compliance & Risk Mitigation",
        description:
          "Maintain automated, immutable audit records to support regulatory requirements and lower operational risk.",
      },
    ],

    roiImage:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5f958bbf4d_a301bfd173dff889.png",

    intelligence: {
      score: "98.7%",
      scoreLabel: "STRUCTURAL HEALTH",
      status: "CONTINUOUS MONITORING",
      metrics: [
        ["STRAIN", "0.42 mm"],
        ["VIBRATION", "1X"],
        ["TILT", "+0.18°"],
        ["TEMPERATURE", "29.4°C"],
        ["LOAD", "87.4 kN"],
        ["FATIGUE", "18.4M"],
      ],
    },

    finalTitle: "Start Your Structural Intelligence Journey",
    finalDescription:
      "Speak with our structural engineering experts to design a monitoring network for your most critical assets.",
  },

  {
    id: "cobble-monitoring",
    number: "02",
    category: "PROCESS INTELLIGENCE",
    name: "Cobble Monitoring",

    image: "/products/cobble.png",

    heroImage:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8f72e4d1bb_2f9a1c0f8a9f7e1d.png",

    detailImage: "/products/cobble-mill.png",

    shortDescription:
      "Real-time AI prediction for detecting rolling-mill anomalies before high-speed steel cobbles occur.",

    description:
      "Real-time AI predictive analytics that detect roll-stand anomalies, prevent catastrophic cobbles and maximize rolling mill throughput.",

    accent: "magenta",

    capabilities: [
      "Motor Current & Load Monitoring",
      "Roll Speed & Torque Analysis",
      "Inter-Stand Tension Monitoring",
      "Pyrometer & Thermal Tracking",
      "High-Speed Vision Integration",
      "Neural Network Prediction",
      "Dynamic Cobble Risk Index",
      "Automated Shear & Speed Response",
    ],

    flow: [
      "Mill Signals",
      "Edge",
      "AI Prediction",
      "Risk Index",
      "Action",
    ],

    architecture: [
      {
        number: "01",
        short: "SENSORS",
        title: "Mill Sensor Layer",
        description:
          "Captures motor current, roll torque, pyrometer thermal profiles and high-speed vision feeds.",
        benefit:
          "Provides complete mill-wide visibility across rolling stands.",
      },
      {
        number: "02",
        short: "EDGE",
        title: "High-Speed Edge Gateway",
        description:
          "Samples multi-channel sensor data at sub-millisecond intervals directly at the PLC level.",
        benefit:
          "Guarantees ultra-low latency response times critical for high-speed mills.",
      },
      {
        number: "03",
        short: "AI",
        title: "Predictive AI Engine",
        description:
          "Evaluates real-time parameter variations against trained neural-network cobble signatures.",
        benefit:
          "Identifies micro-tension instability and roll-slip conditions instantly.",
      },
      {
        number: "04",
        short: "ACTION",
        title: "Automated Interlock",
        description:
          "Sends direct trip signals to flying shears and speed-control systems.",
        benefit:
          "Safely cuts the billet prior to impact, protecting machinery and crew.",
      },
    ],

    howItWorks: [
      {
        number: "01",
        title: "High-Speed Mill Signal Ingestion",
        description:
          "Capture multi-parameter signals from every active rolling stand through direct interfaces with mill PLCs and specialized sensor arrays.",
        points: [
          "Electrical Signals — High-frequency motor current, torque and voltage fluctuations across stand drives.",
          "Optical & Thermal Sensing — Pyrometers measure head-to-tail temperature variations while high-speed cameras monitor billet tracking.",
          "Kinematic Metrics — Inter-stand looper position, roll RPM and pinch-roll drive speeds.",
        ],
      },
      {
        number: "02",
        title: "Edge Signal Processing & Pattern Recognition",
        description:
          "Real-time feature extraction at sub-millisecond rates using industrial edge computing close to the PLC layer.",
        points: [
          "Calculates instantaneous slip-grip ratios between rolls and steel billets.",
          "Monitors head-end entry impact signatures as billets hit each successive pass.",
          "Filters benign electrical harmonics from actual mechanical load-resistance spikes.",
        ],
      },
      {
        number: "03",
        title: "Neural Network Anomaly Evaluation",
        description:
          "Deep-learning models evaluate cobble probability continuously against recipe-specific baselines and historical cobble patterns.",
        points: [
          "Compares current billet behavior against recipe-specific reference baselines.",
          "Detects micro-buckling forces caused by colder billet heads or misaligned mill guides.",
          "Generates a dynamic Cobble Risk Index from 0–100% updated every few milliseconds.",
        ],
      },
      {
        number: "04",
        title: "Autonomous Mitigation & Operator Alerting",
        description:
          "Automated action begins before the billet enters the point of no return.",
        points: [
          "Automated Shearing — Triggers emergency flying shears to chop the incoming billet and isolate the fault.",
          "Speed Adjustments — Adjusts inter-stand looper speed ratios to clear temporary tension accumulation.",
          "Root Cause HMI — Displays exact stand location and probable cause such as guide misfeed, cold head or roll slippage.",
        ],
      },
    ],

    capabilitiesDetailed: [
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
      {
        title: "Wire Rod & Rebar Mills",
        tag: "100+ M/S",
        description:
          "Prevent high-speed cobbles in fast-finishing blocks running at extreme line speeds.",
        image: "/products/cobble-mill.png",
      },
      {
        title: "Hot Strip Mills",
        tag: "FINISHING",
        description:
          "Detect strip-tail tracking errors, inter-stand loop instability and cobble risk.",
        image: "/products/cobble.png",
      },
      {
        title: "Section & Structural Mills",
        tag: "HEAVY ROLLING",
        description:
          "Track profile deformation and guide-entrance misalignment during heavy rolling passes.",
        image: "/products/cobble-mill.png",
      },
      {
        title: "Seamless Pipe Mills",
        tag: "PIERCING",
        description:
          "Prevent billet-piercing jams and shell wall-thickness variation during high-stress elongation.",
        image: "/products/cobble.png",
      },
    ],

    roi: [
      {
        title: "Mill Safety & Hazard Reduction",
        description:
          "Prevent violent red-hot billet cobbles and protect operators and adjacent electrical infrastructure.",
      },
      {
        title: "Equipment & Roll Protection",
        description:
          "Reduce severe mechanical damage to roll stands, guides, bearings and drive shafts.",
      },
      {
        title: "Yield & Scrap Optimization",
        description:
          "Catch billet misalignment early and save valuable prime steel tonnage.",
      },
      {
        title: "Downtime Minimization",
        description:
          "Reduce post-cobble cleanup from hours of thermal cutting and manual clearing to controlled automated shearing.",
      },
      {
        title: "Process Energy Efficiency",
        description:
          "Prevent energy waste associated with reheating discarded cobble scrap and restarting cold rolling equipment.",
      },
    ],

    roiImage: "/products/cobble-mill.png",

    intelligence: {
      score: "03.8%",
      scoreLabel: "COBBLE RISK",
      status: "AI PREDICTION / NORMAL",
      metrics: [
        ["MOTOR LOAD", "+1.8%"],
        ["ROLL SPEED", "STABLE"],
        ["TENSION", "-0.4%"],
        ["BILLET TEMP", "1,087°C"],
        ["STAND", "07"],
        ["AI CONFIDENCE", "97.4%"],
      ],
    },

    finalTitle: "Turn Mill Signals Into a Controlled Production Line",
    finalDescription:
      "Detect process drift before the point of no return, protect rolling equipment, reduce scrap and keep hot-rolling operations moving.",
  },

  {
    id: "vibration-monitoring",
    number: "03",
    category: "ASSET INTELLIGENCE",
    name: "Vibration Monitoring",

    image: "/products/vibration.png",

    heroImage:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8b0b50899b_aeba3cc5805cbda5.png",

    shortDescription:
      "Continuous vibration intelligence for detecting imbalance, misalignment and bearing degradation in critical industrial equipment.",

    description:
      "Continuous condition monitoring engineered for high-temperature heavy industry, combining ruggedized accelerometers, FFT analysis and predictive diagnostics.",

    accent: "orange",

    capabilities: [
      "High-Temperature Accelerometers",
      "High-Frequency Data Acquisition",
      "Velocity / Acceleration / Displacement",
      "FFT Frequency Analysis",
      "ISO 10816 Evaluation",
      "1X Unbalance Detection",
      "2X Misalignment Detection",
      "Bearing Fault Diagnostics",
    ],

    flow: [
      "Machine",
      "Sensor",
      "Edge",
      "FFT / AI",
      "Action",
    ],

    architecture: [
      {
        number: "01",
        short: "SENSORS",
        title: "Furnace Instrumentation Network",
        description:
          "High-temperature piezoelectric accelerometers mounted on blowers, pumps and gearboxes.",
        benefit:
          "Replaces manual spot-checks with 24/7 continuous health tracking.",
      },
      {
        number: "02",
        short: "EDGE",
        title: "Edge Signal Processing",
        description:
          "High-frequency vibration sampling with built-in FFT spectral breakdown.",
        benefit:
          "Filters ambient furnace noise to isolate true mechanical defects.",
      },
      {
        number: "03",
        short: "AI",
        title: "AI Predictive Engine",
        description:
          "Evaluates vibration amplitude and frequency against ISO 10816 standards and equipment baselines.",
        benefit:
          "Identifies bearing defects and shaft misalignment weeks in advance.",
      },
      {
        number: "04",
        short: "ACTION",
        title: "Plant HMI & Alerts",
        description:
          "Real-time severity scoring, automated alerts and SCADA integration.",
        benefit:
          "Triggers action before catastrophic failure or thermal trips occur.",
      },
    ],

    howItWorks: [
      {
        number: "01",
        title: "High-Temp Sensor Hardware Deployment",
        description:
          "Deploy ruggedized sensors directly in extreme thermal zones and around critical furnace auxiliary machinery.",
        points: [
          "Combustion Air Blowers & ID Fans — Capture radial and axial vibration profiles.",
          "Cooling Water Circulation Pumps — Monitor impeller balance and fluid cavitation.",
          "Feeders & Charge Drives — Track shaft alignment and heavy gearbox mesh frequencies.",
        ],
      },
      {
        number: "02",
        title: "Edge Gateway Signal Conditioning",
        description:
          "Local edge processing isolates mechanical signals from operational vibration generated by neighboring heavy machinery.",
        points: [
          "Computes Velocity (RMS), Acceleration and Displacement indicators.",
          "Performs Fast Fourier Transform analysis to convert raw waves into frequency spectra.",
          "Filters operational vibration noise caused by adjacent heavy machinery.",
        ],
      },
      {
        number: "03",
        title: "Automated Fault Diagnostics",
        description:
          "Machine learning constantly checks live spectra against known mechanical fault signatures and equipment baselines.",
        points: [
          "1X Peak Spikes — Flags unbalance in heavy fan impellers caused by dust buildup or thermal warping.",
          "2X Peak Spikes — Identifies drive coupling misalignments.",
          "High-Frequency Harmonics — Detects early-stage bearing race pitting and lubrication breakdown.",
        ],
      },
      {
        number: "04",
        title: "Actionable Dashboard & Plant Interlocks",
        description:
          "Complex vibration data is translated into operational directives for plant and maintenance teams.",
        points: [
          "Severity Dashboards — Displays intuitive health status for all furnace auxiliaries.",
          "SCADA Interlocks — Can trigger automated blower speed roll-backs or emergency trip signals when thresholds are breached.",
          "Maintenance Work Orders — Generates targeted diagnostic reports for planned outages.",
        ],
      },
    ],

    capabilitiesDetailed: [
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
      {
        title: "Primary Metals & Smelters",
        tag: "DRAFT / EXHAUST",
        description:
          "Monitor blast-furnace draft fans, baghouse exhausts and charging crane drives.",
        image: "/products/vibration.png",
      },
      {
        title: "Glass & Ceramic Furnaces",
        tag: "HIGH HEAT",
        description:
          "Track continuous combustion-air blowers and glass-pull rollers operating under severe heat.",
        image: "/products/vibration.png",
      },
      {
        title: "Petrochemical Fired Heaters",
        tag: "PROCESS",
        description:
          "Monitor air-preheater drives and high-pressure furnace feed pumps.",
        image: "/products/vibration.png",
      },
      {
        title: "Cement Kilns & Preheaters",
        tag: "ROTARY DRIVE",
        description:
          "Prevent unexpected main-drive gear wear and kiln-tire displacement.",
        image: "/products/vibration.png",
      },
    ],

    roi: [
      {
        title: "Catastrophic Failure & Explosion Prevention",
        description:
          "Detect draft-fan unbalance or cooling-pump cavitation early and protect furnace pressure control and refractory integrity.",
      },
      {
        title: "Zero Unplanned Outages",
        description:
          "Enable predictive condition-based maintenance during scheduled furnace relining cycles.",
      },
      {
        title: "Energy & Combustion Efficiency",
        description:
          "Keep air blowers and exhaust systems mechanically efficient to support fuel-to-oxygen optimization.",
      },
      {
        title: "Extended Asset Lifespan",
        description:
          "Protect high-value furnace auxiliaries from structural fatigue and premature mechanical degradation.",
      },
    ],

    roiImage:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_4c5a90c2d4_8e0f1b3c2a.png",

    intelligence: {
      score: "4.8 mm/s",
      scoreLabel: "VIBRATION RMS",
      status: "HEALTHY / 1X SIGNATURE",
      metrics: [
        ["1X", "148 Hz"],
        ["2X", "296 Hz"],
        ["RMS", "4.8 mm/s"],
        ["ACCEL", "0.92 g"],
        ["SEVERITY", "NORMAL"],
        ["ASSET", "ID FAN 04"],
      ],
    },

    finalTitle: "Predict the Machine Before the Furnace Pays the Price",
    finalDescription:
      "Continuously monitor critical furnace auxiliaries, detect fault signatures early and synchronize mechanical intervention with planned outages.",
  },
];