import React from 'react';
import Header from './Header';
import './Pricing.css';

function Pricing() {
  return (
    <>
    <Header /> {/* <-- Add Header at the top */}
    <div className="pricing-section">
      <h1>🦍 Ape Softwares — Pricing Guide</h1>
      <p className="pricing-description">Reliable Digital Solutions</p>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        <div className="plan">
          <h2>💻 Web Development</h2>
          <ul>
            <li>
              <strong>Basic Websites</strong><br />
              <span className="price">From R5,000</span><br />
              <span>Simple, clean designs ideal for portfolios, landing pages, or single-page sites.</span>
            </li>
            <li>
              <strong>Small Business Websites</strong><br />
              <span className="price">R6,000 – R16,000</span><br />
              <span>Multiple pages, contact forms, and basic SEO — perfect for startups and local businesses.</span>
            </li>
            <li>
              <strong>Custom Websites</strong><br />
              <span className="price">From R50,000+</span><br />
              <span>Fully tailored platforms with advanced features, integrations, and unique UI/UX design.</span>
            </li>
            <li>
              <strong>E-Commerce Websites</strong><br />
              <span className="price">R10,000 – R20,000</span><br />
              <span>Online stores with payment integration, product management, and secure checkout.<br />Basic packages start at R15,000.</span>
            </li>
          </ul>
        </div>
        <div className="plan">
          <h2>📦 Monthly Website Packages</h2>
          <div className="price">R500 – R1,000+ / month</div>
          <ul>
            <li>Custom-designed website included</li>
            <li>Hosting</li>
            <li>Domain management</li>
            <li>Security updates</li>
            <li>Basic maintenance</li>
            <li>Ongoing support</li>
            <li>Contract term: 12–24 months</li>
          </ul>
        </div>
        <div className="plan">
          <h2>🛠 Maintenance & Support</h2>
          <div className="price">From R1,000 / month</div>
          <ul>
            <li>Ongoing technical support, minor updates, and bug fixes to keep your website running smoothly.</li>
          </ul>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="pricing-table-wrapper">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Web Dev</th>
              <th>Monthly</th>
              <th>Support</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Custom Design</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Hosting</td>
              <td>Optional</td>
              <td>✔️</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Domain</td>
              <td>Optional</td>
              <td>✔️</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Security Updates</td>
              <td>Optional</td>
              <td>✔️</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Maintenance</td>
              <td>Optional</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Ongoing Support</td>
              <td>Optional</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Contract Term</td>
              <td>Once-off</td>
              <td>12–24 mo</td>
              <td>Monthly</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="info-card">
          <h3>Ownership & Hosting</h3>
          <p>
            The website is hosted and maintained by Ape Softwares during the subscription term. If monthly payments are not maintained, the website may experience temporary downtime until payment resumes. Clients may choose to purchase full ownership of their website at any time by paying the remaining balance or a once-off fee.
          </p>
        </div>
        <div className="info-card">
          <h3>Support & Maintenance</h3>
          <p>
            Ongoing technical support, minor updates, and bug fixes are available to keep your website running smoothly.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Pricing;