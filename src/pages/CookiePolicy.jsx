import { useNavigate } from 'react-router-dom';
import '../styles/policy-pages.css';

const CookiePolicy = () => {
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
        <h1>Cookie Policy</h1>

        <section>
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
            when you visit our website. They help us recognize you, remember your preferences, and 
            understand how you interact with our website.
          </p>
        </section>

        <section>
          <h2>2. Types of Cookies We Use</h2>
          
          <h3>2.1 Necessary Cookies</h3>
          <p>
            These cookies are essential for the website to function properly. They enable core functionality 
            such as security and network management. These cookies cannot be disabled.
          </p>
          <ul>
            <li>Session identification</li>
            <li>Security tokens</li>
            <li>Load balancing</li>
          </ul>

          <h3>2.2 Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization. They remember your preferences 
            and choices to provide a personalized experience.
          </p>
          <ul>
            <li>Language preferences</li>
            <li>Theme preferences</li>
            <li>User preferences</li>
          </ul>

          <h3>2.3 Analytics Cookies</h3>
          <p>
            These cookies help us understand how you use our website. We use this information to improve 
            your experience and our website's performance. Analytics data is aggregated and anonymized.
          </p>
          <ul>
            <li>Page views and interactions</li>
            <li>Time spent on pages</li>
            <li>Device and browser information</li>
            <li>Traffic sources</li>
          </ul>

          <h3>2.4 Marketing Cookies</h3>
          <p>
            These cookies are used to deliver personalized advertising and measure the effectiveness of 
            advertising campaigns. They track your interests and online behavior.
          </p>
          <ul>
            <li>Advertising campaigns</li>
            <li>Retargeting</li>
            <li>Conversion tracking</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookie Duration</h2>
          <p>
            Cookies may be:
          </p>
          <ul>
            <li>
              <strong>Session cookies:</strong> Deleted when you close your browser
            </li>
            <li>
              <strong>Persistent cookies:</strong> Remain on your device for a specified period, 
              typically between 6 months and 2 years
            </li>
          </ul>
        </section>

        <section>
          <h2>4. How We Use Cookies</h2>
          <ul>
            <li>To remember your login information</li>
            <li>To remember your preferences and settings</li>
            <li>To understand how you use our website</li>
            <li>To improve our website and services</li>
            <li>To deliver personalized content and advertising</li>
            <li>To prevent fraud and enhance security</li>
            <li>To analyze website performance</li>
          </ul>
        </section>

        <section>
          <h2>5. Third-Party Cookies</h2>
          <p>
            We may allow third-party service providers to place cookies on your device for analytics, 
            advertising, and other purposes. These third parties include:
          </p>
          <ul>
            <li>Analytics providers</li>
            <li>Advertising networks</li>
            <li>Social media platforms</li>
            <li>Other service providers</li>
          </ul>
          <p>
            We do not control these third-party cookies. Please refer to their privacy policies 
            for more information.
          </p>
        </section>

        <section>
          <h2>6. Your Cookie Preferences</h2>
          <p>
            You have the right to choose which cookies to allow. You can:
          </p>
          <ul>
            <li>
              Use our cookie consent banner to manage your preferences
            </li>
            <li>
              Configure your browser to reject cookies or alert you when cookies are being sent
            </li>
            <li>
              Delete cookies stored on your device
            </li>
            <li>
              Opt out of analytics and advertising services
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Disabling cookies may affect your website experience and some features 
            may not function properly.
          </p>
        </section>

        <section>
          <h2>7. Browser Settings</h2>
          <p>
            Most browsers allow you to control cookies through their settings:
          </p>
          <ul>
            <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
            <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
            <li>Safari: Preferences → Privacy</li>
            <li>Edge: Settings → Privacy, search, and services → Cookies and other site data</li>
          </ul>
        </section>

        <section>
          <h2>8. Do Not Track (DNT)</h2>
          <p>
            Some browsers have a "Do Not Track" feature. Our website does not currently respond to DNT signals. 
            However, you can still manage your cookie preferences through our cookie consent system.
          </p>
        </section>

        <section>
          <h2>9. Policy Updates</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, 
            legal requirements, or other factors. We recommend reviewing this policy periodically 
            for updates.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy;
