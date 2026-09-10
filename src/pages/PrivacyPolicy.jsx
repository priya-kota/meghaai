import { useNavigate } from 'react-router-dom';
import '../styles/policy-pages.css';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page policy-page">
      <button
        type="button"
        className="policy-back-button"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        ← Back
      </button>

      <div className="policy-container">
        <h1>Privacy Policy</h1>
       

        <section>
          <h2>1. Introduction</h2> 
          <p>
            Megha AI (referred to as "we," "our," or "Company") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information 
            when you visit our website and use our services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect information from you in several ways:</p>
          
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Information submitted through contact forms</li>
            <li>Communication preferences</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>Browser and device information</li>
            <li>IP address</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring/exit pages</li>
            <li>Search queries</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze website usage and user behavior</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraudulent or illegal activity</li>
            <li>Personalize your experience</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to remember your preferences, 
            understand how you use our website, and deliver targeted content. You can control 
            your cookie preferences through our cookie management system.
          </p>
          <p>
            For more details, please refer to our <button
              type="button"
              className="inline-link"
              onClick={() => navigate('/cookie-policy')}
            >
              Cookie Policy
            </button>.
          </p>
        </section>

        <section>
          <h2>5. Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. 
            We may share information with:
          </p>
          <ul>
            <li>Service providers who assist us in operating our website and conducting business</li>
            <li>Law enforcement when required by law</li>
            <li>Other parties with your consent</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2>7. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Control your cookie preferences</li>
          </ul>
        </section>

        <section>
          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their 
            privacy practices. We encourage you to review their privacy policies before providing 
            any personal information.
          </p>
        </section>

        <section>
          <h2>9. Children's Privacy</h2>
          <p>
            Our website is not directed to children under the age of 13. We do not knowingly collect 
            personal information from children. If we become aware that we have collected personal 
            information from a child under 13, we will delete such information.
          </p>
        </section>

        <section>
          <h2>10. Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be effective immediately 
            upon posting to the website. Your continued use of our website constitutes your acceptance 
            of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p>
            <strong>Megha AI</strong><br />
            Email: <a href="mailto:support@meghaai.in">support@meghaai.in</a><br />
            Address: T-Hub, Plot No. 1/C, Sy No. 83/1, Raidurgam Panmaktha, Hyderabad Knowledge City, 
            Serilingampally, Hyderabad – 500081, Telangana, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
