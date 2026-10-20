import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import '../css/footer.css';

const Footer = () => {
    // Derived, not hardcoded, so the copyright never goes stale again.
    const year = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-header">
                    <div className="footer-title">Johns Creek FBLA</div>
                        <p className="footer-text">5575 State Bridge Rd, Johns Creek, GA 30022</p>
                        <p className="footer-text">
                            Email: <a href="mailto:jchsfbla@gmail.com" className="footer-link footer-link-inline">jchsfbla@gmail.com</a>
                        </p>
                        
                </div>
                <div className="footer-explore">
                    <div className="footer-links">
                        <div className="footer-title">Explore</div>
                        <a href="/schedule" className="footer-link">Schedule</a>
                        <a href="/news" className="footer-link">News</a>
                        <a href="/gallery" className="footer-link">Photo Gallery</a>
                        <a href="mailto:jchsfbla@gmail.com" className="footer-link">Contact Us</a>
                    </div>
                </div>
                <div className="footer-socials">
                    <div className="footer-title">Follow Us</div>
                    <div className="footer-links">
                        <a href="https://linktr.ee/jchsfbla" class="footer-social-link" target="_blank" rel="noopener noreferrer">
                            <SiLinktree className="footer-social-icon" size={24}/>
                            Linktree
                        </a>
                        <a href="https://www.instagram.com/jchsfbla/?hl=en" class="footer-social-link" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="footer-social-icon" size={24} />
                            Instagram
                        </a>
                    </div>
                </div>
                <div className="footer-knowledge">
                    <div className="footer-title">Members</div>
                    <div className="footer-links">
                        <a href="/forms" className="footer-link">Forms &amp; Payments</a>
                        <a href="/officer" className="footer-link">Officer Team</a>
                        <a href="/forms#resources" className="footer-link">Resources</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-extra">
                <p className="footer-text">© {year} Johns Creek FBLA. All rights reserved.</p>
                <p className="footer-text footer-legal">
                    <a href="/privacy-policy" className="footer-link-inline">Privacy Policy</a>
                    <span aria-hidden="true"> · </span>
                    <a href="/terms-of-service" className="footer-link-inline">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;