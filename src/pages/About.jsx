import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

import "../styles/about.css";

import krishan from "../assets/team/krishan.jpeg";
import luther from "../assets/team/luther.jpeg";
import ramesh from "../assets/team/ramesh.jpeg";
import pradeep from "../assets/team/pradeep.jpeg";
import binit from "../assets/team/binit.jpeg";
import pramod from "../assets/team/pramod.jpeg";

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    icon: "◈",
    title: "Engineering First",
    text: "We respect the physics, engineering principles and operational realities behind every industrial system.",
    color: "orange",
  },
  {
    icon: "ϟ",
    title: "Intelligence With Purpose",
    text: "AI should solve a real industrial problem and help teams make better, faster and safer decisions.",
    color: "magenta",
  },
  {
    icon: "◎",
    title: "Safety by Design",
    text: "Industrial intelligence must support safer operations, earlier visibility and responsible decision-making.",
    color: "blue",
  },
  {
    icon: "↗",
    title: "Customer Impact",
    text: "Technology matters only when it creates measurable value for assets, processes and industrial teams.",
    color: "orange",
  },
  {
    icon: "✦",
    title: "Continuous Innovation",
    text: "Industrial systems evolve continuously. Our intelligence must evolve with them.",
    color: "magenta",
  },
  {
    icon: "◇",
    title: "Trust & Responsibility",
    text: "Industrial AI should be transparent, explainable, reliable and responsible.",
    color: "blue",
  },
];

/* =========================================================
   EXPERTISE
========================================================= */

const expertise = [
  "Industrial Engineering",
  "AI & Machine Learning",
  "IoT & Edge Computing",
  "Structural Engineering",
  "Data & Cloud",
  "Product & Technology",
];

/* =========================================================
   LEADERSHIP
========================================================= */

const leadershipMembers = [
  {
    id: 1,
    name: "Krishan Meghani",
    role: "Founder & Chief Executive Officer",
    image: krishan,
    bio: `Krishan has more than 20+ years of Industry experience in software development across various industries covering chemical, power, oil & gas, marine, process and discrete manufacturing. He has created and managed various large offshore teams (250+) and successfully led complex projects. He has led teams on various innovative solutions and won various million-dollar deals. He has managed global stakeholders from various countries. He has also led global AI ML division for PPM Hexagon and filed 6 patents. He holds masters degree from top university IITKgp. Filed six patents in the realm of AI/ML under Patent Applications: 2020/11021043, 17/483,986, 17/483,941, 17/484,029, 17/483,966, 17/324,755.`,
    experience: "20+ years of industry experience",
    education: "Master's degree from IIT Kharagpur",
    expertise:
      "AI/ML leadership, industrial software, global teams and innovation",
    linkedin:
      "https://www.linkedin.com/in/krishan-meghani-885702a/",
  },

  {
    id: 2,
    name: "Luther Walker",
    role: "Director Product & Sales",
    image: luther,
    bio: `Luther has 30 years industry experience. As director of product management, he oversaw the critical adoption and growth phases of Hexagon PPM’s flagship product, Smart 3D. He has collaborated with clients worldwide to perceive their business needs and determine how best to apply technology to address those needs in a profound way. Luther is an alumnus of Georgia Institute of Technology and holds a patent in automated cable routing.`,
    experience: "30 years of industry experience",
    education: "Alumnus of Georgia Institute of Technology",
    expertise:
      "Product management, technology adoption and automated cable routing",
    linkedin:
      "https://www.linkedin.com/in/luther-walke-92b89125/",
  },

  {
    id: 3,
    name: "Lakkaraju Ramesh",
    role: "Director Customer Success",
    image: ramesh,
    bio: `Ramesh has more than 20+ years of Industry experience in software development across various industries covering chemical, power, oil & gas, marine, process and discrete manufacturing. He has created and managed various large offshore teams (100+) and successfully led complex projects. He has led teams on various innovative solutions. He has managed global stakeholders from various countries.`,
    experience: "20+ years of industry experience",
    education: "",
    expertise:
      "Offshore team management, complex projects and customer success",
    linkedin:
      "https://www.linkedin.com/in/rameshlakkaraju/",
  },

  {
    id: 4,
    name: "Pradeep Das",
    role: "Director – Strategy",
    image: pradeep,
    bio: `Pradeep has over twenty five years of work experience in data, DWBI and Big Data technology. Significant operational and technology leadership across BFSI, MFG and SCM domains. Successfully led multiple business critical complex engagements and responsible for having more than $20 MUSD while in the leadership role at Infosys. Pradeep holds a Mechanical Engineering degree from State Engineering College (CET, Odisha) and Master of Technology from IIT, Kharagpur.`,
    experience: "25+ years of work experience",
    education:
      "Mechanical Engineering from CET, Odisha; Master of Technology from IIT Kharagpur",
    expertise:
      "Data, DWBI, Big Data and technology leadership",
    linkedin:
      "https://www.linkedin.com/in/pradeep-das-755b463/",
  },

  {
    id: 5,
    name: "Binit Poddar",
    role: "Director - Client Success",
    image: binit,
    bio: `Binit Poddar is a seasoned IT Professional with 20+ years of experience in agile transformation and stakeholder management. He has built successful PMO and business analysis teams, delivering complex cross-domain projects in eCommerce, healthcare, and insurance. Binit is skilled in driving operational excellence, managing global teams, and executing high-impact technology initiatives with measurable business value. He combines strong leadership with technical expertise to turn around challenging programs and ensure successful delivery.`,
    experience: "20+ years of IT experience",
    education: "",
    expertise:
      "Agile transformation, PMO, business analysis and stakeholder management",
    linkedin:
      "https://www.linkedin.com/in/binit-poddar/",
  },

  {
    id: 6,
    name: "Pramod Sukhija",
    role: "Advisor",
    image: pramod,
    bio: `With 25+ years of global leadership experience, Pramod brings a visionary mindset and deep technical expertise to the helm of Desno Tectix. His distinguished career spans the Software industry, Investment Banking, and Industrial Engineering/Digital Twins, where he has driven enterprise transformation, innovation in product design, and excellence in quality assurance. Formerly R&D Vice President at AVEVA, Pramod led global system test initiatives across cloud and Unified Engineering Platforms, spearheading quality for 20+ engineering and design product lines (1D, 2D and 3D) and overseeing large, technical test and domain test teams for EPCs and Owner/Operator landscape.`,
    experience: "25+ years of global leadership experience",
    education: "",
    expertise:
      "Enterprise transformation, product innovation, quality assurance and digital twins",
    linkedin:
      "https://www.linkedin.com/in/pramod-sukhija/",
  },
];

function About() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactError, setContactError] = useState("");

  /* =========================================================
     OTHER INDUSTRY / OTHER CHALLENGE
  ========================================================= */

  const [industry, setIndustry] = useState("");
  const [challenge, setChallenge] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");
  const [otherChallenge, setOtherChallenge] = useState("");

  const location = useLocation();

  const isContactTab = location.pathname === "/contact";

  const isLeadershipTab =
    location.pathname === "/leadership" ||
    location.pathname === "/blogs";

  const isOverviewTab = location.pathname === "/overview";

  /* =========================================================
     CONTACT FORM SUBMIT
  ========================================================= */

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    /* -----------------------------------------
       VALIDATE REQUIRED FIELDS
    ----------------------------------------- */

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    /* -----------------------------------------
       START SUBMISSION
    ----------------------------------------- */

    setContactSubmitting(true);
    setContactError("");

    try {
      /* -----------------------------------------
         GET FORM VALUES
      ----------------------------------------- */

      const formData = new FormData(form);

      const selectedIndustry = formData.get("industry");
      const selectedChallenge = formData.get("challenge");

      const payload = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        company: formData.get("company"),

        industry:
          selectedIndustry === "other"
            ? formData.get("otherIndustry")
            : selectedIndustry,

        challenge:
          selectedChallenge === "other"
            ? formData.get("otherChallenge")
            : selectedChallenge,

        message: formData.get("message"),
      };

      /* -----------------------------------------
         SEND TO AWS API GATEWAY
      ----------------------------------------- */

      const response = await fetch(
        "https://s36jzcs4x9.execute-api.us-east-1.amazonaws.com/api/v1/meghaai/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      /* -----------------------------------------
         READ API RESPONSE
      ----------------------------------------- */

      const result = await response.json();

      /* -----------------------------------------
         HANDLE API ERROR
      ----------------------------------------- */

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit demo request."
        );
      }

      /* -----------------------------------------
         SUCCESS
      ----------------------------------------- */

      setContactSubmitted(true);

      form.reset();

      setIndustry("");
      setChallenge("");
      setOtherIndustry("");
      setOtherChallenge("");
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setContactError(
        "We couldn't submit your request right now. Please try again."
      );
    } finally {
      setContactSubmitting(false);
    }
  };

  /* =========================================================
     PAGE CLASS
  ========================================================= */

  let pageClass = "about-page";

  if (isContactTab) {
    pageClass += " show-only-contact";
  }

  if (isLeadershipTab) {
    pageClass += " show-only-leadership";
  }

  if (isOverviewTab) {
    pageClass += " show-only-overview";
  }

  return (
    <>
      <main className={pageClass}>
        <div className="about-glow about-glow-top" />
        <div className="about-glow about-glow-right" />

        {/* =================================================
            HERO
        ================================================= */}

        <section className="about-hero">
          <div className="about-hero-copy">
            <h1>
              Engineering the{" "}
              <span>Intelligence Layer</span>{" "}
              for the Physical World.
            </h1>

            <p>
              MeghaAI brings together engineering knowledge, analysis data,
              industrial data, physics, multimodal observations and AI to help
              organizations understand, predict and optimize
              their physical systems and processes.
            </p>

            <div className="about-hero-actions">
              <Link
                to="/contact"
                className="about-primary-button"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          <div
            className="about-hero-visual"
            aria-hidden="true"
          >
            <div className="physical-visual-grid" />

            <div className="physical-orbit physical-orbit-one">
              <span className="orbit-dot"></span>

              <span className="orbit-dot-slot orbit-dot-slot-two">
                <span className="orbit-dot"></span>
              </span>
            </div>

            <div className="physical-orbit physical-orbit-two">
              <span className="orbit-dot"></span>

              <span className="orbit-dot-slot orbit-dot-slot-three">
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
              <span>
                PHYSICAL AI
              </span>

              <small>
                INTELLIGENCE
              </small>
            </div>

            <div className="physical-signal signal-one"></div>
            <div className="physical-signal signal-two"></div>
            <div className="physical-signal signal-three"></div>
          </div>
        </section>

        {/* =================================================
            STORY
        ================================================= */}

        <section className="about-story about-container">
          <div className="section-label">
            OUR CORE TECHNOLOGY
            <span
              className="section-divider"
              aria-hidden="true"
            ></span>
          </div>

          <p className="story-core-ip">
            Our core IP combines engineering, data analysis, physics,
            multimodal observations and AI to infer the hidden state of
            physical systems, understand how that state evolves, and{" "}
            <span className="story-core-ip-highlight">
              predict failure, degradation or instability
            </span>
            .
          </p>

          <div className="story-grid">
            <div>
              <h2>
                Industrial systems have data.{" "}
                <span>They need intelligence.</span>
              </h2>
            </div>

            <div className="story-copy">
              <p>
                The physical industrial world is filled with machines,
                structures, plants, equipment and complex processes. These
                systems generate enormous volumes of operational data every day.
              </p>

              <p>
                But data alone does not explain what is happening, why it is
                happening or what should happen next. Engineering knowledge is
                often separated from live operational information, leaving
                teams with fragmented context and reactive decisions.
              </p>

              <p>
                MeghaAI was created to close that gap. We connect the physical
                world to a continuous intelligence layer that can sense,
                understand, predict, reason and support action.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            PRINCIPLES
        ================================================= */}

        <section className="about-principles about-container">
          <div className="principle-card">
            <span className="principle-number"></span>

            <h3>
              Our Vision
            </h3>

            <p>
              Make industrial systems more intelligent,
              predictable, efficient and sustainable.
            </p>
          </div>

          <div className="principle-card featured-principle">
            <span className="principle-number"></span>

            <h3>
              Our Mission
            </h3>

            <p>
              Combine engineering knowledge, industrial data
              and AI to create actionable intelligence for
              physical assets and processes.
            </p>
          </div>

          <div className="principle-card">
            <span className="principle-number"></span>

            <h3>
              Our Philosophy
            </h3>

            <p>
              AI should not replace engineering expertise.
              It should amplify engineering expertise.
            </p>
          </div>
        </section>

        {/* =================================================
            LEADERSHIP
        ================================================= */}

        <section
          className="about-leadership about-container"
          aria-label="Leadership team"
        >
          <div className="leadership-topline">
            <div className="section-label">
              MEET OUR TEAM
            </div>
          </div>

          <div className="leadership-heading">
            <h2>
              Team behind the{" "}
              <span>intelligence.</span>
            </h2>

            <p>
              Leadership, engineering and product expertise
              working together to bring intelligence into the
              physical world.
            </p>
          </div>

          <div className="leadership-cards">
            {leadershipMembers.map((member, index) => (
              <article
                key={member.id}
                className={`leadership-card ${
                  index % 2 === 1
                    ? "leadership-card-reverse"
                    : ""
                }`}
              >
                <div className="leadership-visual">
                  <div className="leadership-visual-grid" />
                  <div className="leadership-visual-orbit orbit-a" />
                  <div className="leadership-visual-orbit orbit-b" />

                  <div className="leadership-photo">
                    <div className="leadership-photo-glow" />

                    <img
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                </div>

                <div className="leadership-content">
                  <span className="leadership-role">
                    {member.role}
                  </span>

                  <h3>
                    {member.name}
                  </h3>

                  <div className="leadership-accent-line" />

                  <p className="leadership-bio">
                    {member.bio}
                  </p>

                  <div className="leadership-meta">
                    {member.experience && (
                      <div className="leadership-meta-card">
                        <span>EXPERIENCE</span>

                        <strong>
                          {member.experience}
                        </strong>
                      </div>
                    )}

                    {member.education && (
                      <div className="leadership-meta-card">
                        <span>EDUCATION</span>

                        <strong>
                          {member.education}
                        </strong>
                      </div>
                    )}

                    {member.expertise && (
                      <div className="leadership-meta-card leadership-meta-wide">
                        <span>EXPERTISE</span>

                        <strong>
                          {member.expertise}
                        </strong>
                      </div>
                    )}
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="leadership-linkedin"
                    >
                      <FaLinkedin />

                      <span>
                        Connect on LinkedIn
                      </span>

                      <b>
                        ↗
                      </b>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =================================================
            INTELLIGENCE
        ================================================= */}

        <section className="about-intelligence">
          <div className="about-container intelligence-layout">
            <div className="intelligence-copy">
              <div className="section-label">
                WHAT WE BELIEVE
              </div>

              <h2>
                From physical assets to{" "}
                <span>
                  actionable intelligence.
                </span>
              </h2>

              <p>
                MeghaAI sits between the physical industrial
                world and the decisions people make about it.
              </p>
            </div>

            <div className="intelligence-flow">
              <div className="flow-item">
                <span></span>
                Physical Assets
              </div>

              <div className="flow-line" />

              <div className="flow-item">
                <span></span>
                Industrial Data
              </div>

              <div className="flow-line" />

              <div className="flow-item active-flow">
                <span></span>
                MeghaAI Intelligence
              </div>

              <div className="flow-line" />

              <div className="flow-item">
                <span></span>
                Better Decisions
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            VALUES
        ================================================= */}

        <section className="about-values about-container">
          <div className="values-heading">
            <div>
              <div className="section-label">
                OUR VALUES
              </div>

              <h2>
                Built on engineering.{" "}
                <span>
                  Driven by impact.
                </span>
              </h2>
            </div>

            <p>
              Our values guide how we build technology,
              work with industrial teams and bring
              intelligence into the physical world.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article
                className={`value-card value-${value.color}`}
                key={value.title}
              >
                <div className="value-icon">
                  {value.icon}
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* =================================================
            EXPERTISE
        ================================================= */}

        <section className="about-expertise about-container">
          <div className="section-label">
            OUR EXPERTISE
          </div>

          <div className="expertise-heading">
            <h2>
              Where engineering meets{" "}
              <span>
                artificial intelligence.
              </span>
            </h2>

            <p>
              MeghaAI is built around the collaboration
              of disciplines required to understand complex
              physical systems.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <div
                className="expertise-item"
                key={item}
              >
                <strong>
                  {item}
                </strong>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section className="about-contact about-container">
          <div className="about-contact-header">
            <div className="section-label">
              LET'S PREVENT YOUR NEXT FAILURE
            </div>

            <h2>
              Let's build something{" "}
              <span>
                intelligent together.
              </span>
            </h2>

            <p>
              Every hour of unplanned downtime impacts production,
              revenue, and safety. Tell us about your challenge and
              we'll show you how MeghaAI can help prevent failures
              before they happen.
            </p>
          </div>

          <div className="about-contact-grid">
            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <div className="about-contact-form-wrapper">
              <div className="about-contact-form-glow about-contact-glow-orange" />
              <div className="about-contact-form-glow about-contact-glow-red" />

              <div className="about-contact-form-card">
                {contactSubmitted ? (
                  <div className="about-contact-success">
                    <div className="about-contact-success-icon">
                      ✓
                    </div>

                    <h3>
                      Demo Request Submitted
                    </h3>

                    <p>
                      Thank you for contacting MeghaAI.
                      Your demo request has been successfully
                      submitted. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleContactSubmit}
                    className="about-contact-form"
                  >
                    <div className="about-contact-form-heading">
                      <span>
                        FREE DEMO
                      </span>

                      <h3>
                        Tell us about your challenge.
                      </h3>

                      <p>
                        We'll help identify where MeghaAI can
                        create the most value for your operation.
                      </p>
                    </div>

                    {/* =================================================
                        FULL NAME + WORK EMAIL
                    ================================================= */}

                    <div className="about-contact-form-row">
                      <label>
                        <span className="about-contact-label">
                          Full Name
                        </span>

                        <input
                          type="text"
                          name="fullName"
                          placeholder="Enter your full name"
                          autoComplete="name"
                          required
                        />
                      </label>

                      <label>
                        <span className="about-contact-label">
                          Work Email
                        </span>

                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your work email"
                          autoComplete="email"
                          required
                        />
                      </label>
                    </div>

                    {/* =================================================
                        COMPANY + INDUSTRY
                    ================================================= */}

                    <div className="about-contact-form-row">
                      <label>
                        <span className="about-contact-label">
                          Company Name
                        </span>

                        <input
                          type="text"
                          name="company"
                          placeholder="Enter your company name"
                          autoComplete="organization"
                          required
                        />
                      </label>

                      <label>
                        <span className="about-contact-label">
                          Industry
                        </span>

                        <select
                          name="industry"
                          value={industry}
                          onChange={(event) => {
                            setIndustry(event.target.value);
                            setOtherIndustry("");
                          }}
                          required
                        >
                          <option
                            value=""
                            disabled
                          >
                            Select your industry
                          </option>

                          <option value="steel-metal">
                            Steel &amp; Metal Processing
                          </option>

                          <option value="oil-gas">
                            Oil &amp; Gas
                          </option>

                          <option value="automotive-aerospace">
                            Automotive &amp; Aerospace
                          </option>

                          <option value="power-energy">
                            Power &amp; Energy
                          </option>

                          <option value="chemicals-pharma">
                            Chemicals &amp; Pharma
                          </option>

                          <option value="infrastructure">
                            Infrastructure
                          </option>

                          <option value="other">
                            Other
                          </option>
                        </select>

                        {industry === "other" && (
                          <input
                            type="text"
                            name="otherIndustry"
                            placeholder="Please specify your industry"
                            value={otherIndustry}
                            onChange={(event) =>
                              setOtherIndustry(event.target.value)
                            }
                            required
                          />
                        )}
                      </label>
                    </div>

                    {/* =================================================
                        CHALLENGE
                    ================================================= */}

                    <label>
                      <span className="about-contact-label">
                        What's Your Challenge?
                      </span>

                      <select
                        name="challenge"
                        value={challenge}
                        onChange={(event) => {
                          setChallenge(event.target.value);
                          setOtherChallenge("");
                        }}
                        required
                      >
                        <option
                          value=""
                          disabled
                        >
                          Select your challenge
                        </option>

                        <option value="vibration-monitoring">
                          Vibration Monitoring
                        </option>

                        <option value="structure-health-monitoring">
                          Structure Health Monitoring
                        </option>

                        <option value="predictive-maintenance">
                          Predictive Maintenance
                        </option>

                        <option value="equipment-reliability">
                          Equipment Reliability
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>

                      {challenge === "other" && (
                        <input
                          type="text"
                          name="otherChallenge"
                          placeholder="Please specify your challenge"
                          value={otherChallenge}
                          onChange={(event) =>
                            setOtherChallenge(event.target.value)
                          }
                          required
                        />
                      )}
                    </label>

                    {/* =================================================
                        OPTIONAL MESSAGE
                    ================================================= */}

                    <label>
                      <span className="about-contact-label">
                        Tell Us More
                        <small>Optional</small>
                      </span>

                      <textarea
                        name="message"
                        placeholder="Tell us about your asset, process or operational challenge..."
                        rows="4"
                      />
                    </label>

                    {/* =================================================
                        ERROR MESSAGE
                    ================================================= */}

                    {contactError && (
                      <p className="about-contact-error">
                        {contactError}
                      </p>
                    )}

                    {/* =================================================
                        SUBMIT
                    ================================================= */}

                    <button
                      type="submit"
                      className="about-contact-submit"
                      disabled={contactSubmitting}
                    >
                      <span>
                        {contactSubmitting
                          ? "SUBMITTING..."
                          : "SCHEDULE YOUR FREE DEMO"}
                      </span>

                      <b>
                        {contactSubmitting
                          ? "..."
                          : "→"}
                      </b>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="about-cta about-container">
          <div className="cta-pattern" />

          <div className="cta-content">
            <div className="section-label">
              BUILD WITH MEGHAAI
            </div>

            <h2>
              Ready to make your industrial assets{" "}
              <span>
                more intelligent?
              </span>
            </h2>

            <p>
              Tell us about your assets, processes or
              operational challenge. Our team will help
              identify where industrial intelligence can
              create meaningful value.
            </p>

            <div className="about-hero-actions">
              <Link
                to="/contact"
                className="about-primary-button"
              >
                Talk to a MeghaAI Expert
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;