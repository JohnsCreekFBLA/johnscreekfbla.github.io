import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import '../css/footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-header">
                    <div className="footer-title">Johns Creek FBLA</div>
                        <p className="footer-text">5575 State Bridge Rd, Johns Creek, GA 30022</p>
                        <p className="footer-text">Email: jchsfbla@gmail.com</p>
                        
                </div>
                <div className="footer-explore">
                    <div className="footer-links">
                        <div className="footer-title">Explore</div>
                        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                        <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                        <a href="/contact" className="footer-link">Contact Us</a>
                    </div>
                </div>
                <div className="footer-socials">
                    <div className="footer-title">Follow Us</div>
                    <div className="footer-links">
                        <a href="https://linktr.ee/jchsfbla?utm_source=linktree_profile_share&ltsid=00c4ebeb-9aec-4212-a29e-1b75e100ccde" class="footer-social-link" target="_blank" rel="noopener noreferrer">
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
                    <div className="footer-title">Knowledge</div>
                    <div className="footer-links">
                        <a href="/resources" className="footer-link">Resources</a>
                        <a href="/faq" className="footer-link">FAQ</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-extra">
                <p className="footer-text">© 2025 Johns Creek FBLA. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;