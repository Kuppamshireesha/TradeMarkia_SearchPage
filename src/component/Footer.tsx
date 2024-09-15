// components/Footer.tsx
"use client";

import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Footer.module.css'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandInfo}>
          <h2>Trademarkia</h2>
          <p>World's #1 website to register your trademark and protect your brand, name, logo or slogan</p>
        </div>

        <div className={styles.section}>
          <h3>Social Links</h3>
          <div className={styles.socialMediaSection}>
            <a href="https://instagram.com" target="_blank" className={`${styles.socialIcon} ${styles.link}`}><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" className={`${styles.socialIcon} ${styles.link}`}><FaFacebookF /></a>
            <a href="https://youtube.com" target="_blank" className={`${styles.socialIcon} ${styles.link}`}><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" className={`${styles.socialIcon} ${styles.link}`}><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" className={`${styles.socialIcon} ${styles.link}`}><FaTwitter /></a>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Trusted Reviews</h3>
          <p>Shopper Approved 4.6/5</p>
          <p>Shopper Approved 4.8/5</p>
        </div>

        <div className={styles.section}>
          <h3>Services</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Trademark Registration</li>
            <li className={styles.listItem}>Comprehensive Trademark Search</li>
            <li className={styles.listItem}>Trademark Services</li>
            <li className={styles.listItem}>Trademark Classes</li>
            <li className={styles.listItem}>International Trademark Registration</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Search</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Free Trademark Search</li>
            <li className={styles.listItem}>Free Copyright Search</li>
            <li className={styles.listItem}>Owner Search</li>
            <li className={styles.listItem}>Attorney Ranking Search</li>
            <li className={styles.listItem}>Domain Search</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Resources</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Blogs</li>
            <li className={styles.listItem}>Frequently Asked Questions</li>
            <li className={styles.listItem}>Become An Influencer</li>
            <li className={styles.listItem}>Bulk Data</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Rankings</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Company Ranking</li>
            <li className={styles.listItem}>Law Firms Ranking</li>
            <li className={styles.listItem}>Attorney Ranking</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Company</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>About Us</li>
            <li className={styles.listItem}>Press Coverage</li>
            <li className={styles.listItem}>Terms and Conditions</li>
            <li className={styles.listItem}>Privacy Policy</li>
            <li className={styles.listItem}>Sitemap</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Contact</h3>
          <p><FaPhoneAlt /> Call: +1 (877) 794-9511</p>
          <p><FaEnvelope /> Email: <a href="mailto:contact@trademarkia.com" className={styles.link}>Leave a message</a></p>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Trademarkia. All rights reserved.</p>
          <p>
            Disclaimer: The information contained in this website is provided for informational purposes only, and should not be construed as legal advice. Although LegalForce RAPC Worldwide P.C., dba Trademarkia P.C., is a law firm (the “Firm”), your use of this website does not establish an attorney-client relationship with the Firm. Such a relationship can only be established after the Firm decides that it is willing and able to accept the engagement after a conflict check and after a written retainer agreement is agreed upon between you and the Firm. Your use of this website is also subject to our Terms of Use and Privacy Policy.
          </p>
          <p>
            * Your application is rejected only if the USPTO issues a final refusal. Limit one waived $99 fee for a different mark per order. The waiver is for Trademarkia's fees only and does not include government fees.
          </p>
          <p>
            ** Bundled price for trademark watch service for 2 billing cycles ($99 per quarter).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
