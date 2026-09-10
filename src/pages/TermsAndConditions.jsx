import { useNavigate } from 'react-router-dom';
import '../styles/policy-pages.css';

const TermsAndConditions = () => {
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
        <h1>Terms and Conditions</h1>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information 
            or software) on our website for personal, non-commercial transitory viewing only. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Violate any applicable laws or regulations related to access to or use of the website</li>
          </ul>
        </section>

        <section>
          <h2>3. Disclaimer</h2>
          <p>
            The materials on our website are provided on an 'as is' basis. Megha AI makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including, 
            without limitation, implied warranties or conditions of merchantability, fitness for a 
            particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2>4. Limitations</h2>
          <p>
            In no event shall Megha AI or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on our website, even if we 
            or our authorized representative has been notified orally or in writing of the possibility 
            of such damage.
          </p>
        </section>

        <section>
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on our website could include technical, typographical, or 
            photographic errors. Megha AI does not warrant that any of the materials on our 
            website are accurate, complete, or current. Megha AI may make changes to the materials 
            contained on our website at any time without notice.
          </p>
        </section>

        <section>
          <h2>6. Links</h2>
          <p>
            Megha AI has not reviewed all of the sites linked to its website and is not responsible 
            for the contents of any such linked site. The inclusion of any link does not imply 
            endorsement by Megha AI of the site. Use of any such linked website is at the user's 
            own risk.
          </p>
        </section>

        <section>
          <h2>7. Modifications</h2>
          <p>
            Megha AI may revise these terms of service for its website at any time without notice. 
            By using this website, you are agreeing to be bound by the then current version of 
            these terms of service.
          </p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws 
            of India, and you irrevocably submit to the exclusive jurisdiction of the courts in 
            that location.
          </p>
        </section>

        <section>
          <h2>9. Intellectual Property Rights</h2>
          <p>
            All materials on our website, including text, graphics, logos, images, and software, 
            are the property of Megha AI or its content suppliers and are protected by international 
            copyright laws. You may not reproduce, distribute, transmit, display, or otherwise use 
            any of the materials without the prior written permission of the copyright holder.
          </p>
        </section>

        <section>
          <h2>10. User Conduct</h2>
          <p>
            You agree that you will not use this website to:
          </p>
          <ul>
            <li>Harass, abuse, or threaten others</li>
            <li>Post obscene, vulgar, or offensive content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Transmit viruses or malicious code</li>
            <li>Engage in any form of illegal activity</li>
          </ul>
        </section>

        <section>
          <h2>11. Limitation of Liability</h2>
          <p>
            Your sole remedy for dissatisfaction with this website and its content is to stop 
            using the website. Megha AI shall not be liable for any indirect, incidental, special, 
            or consequential damages arising out of or related to this website or its use.
          </p>
        </section>

        <section>
          <h2>12. Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsAndConditions;
