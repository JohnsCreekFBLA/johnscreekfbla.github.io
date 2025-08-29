import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import '../css/navbar.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // Close menu when a link is clicked (optional, for better UX)
  const handleLinkClick = () => setOpen(false);

    // Handle click on the hamburger menu
    const handleDropDownClick = (e) => {
        e.preventDefault();
        const dropdown = e.currentTarget.querySelector('.dropdown-content');
        dropdown.classList.toggle('show');
    };

  return (
    <nav className="navbar">
    <img src="/images/topNavLogo.svg" className="navbar-logo" alt="logo" />
      <button
        className="navbar-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <RxHamburgerMenu size={32} />
      </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
            <li>
                <a href="/" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="dropdown">
                <a>About</a>
                <div className="dropdown-content">
                    <a href="/officer" onClick={handleLinkClick}>Officer Team 25-26</a>
                </div>
            </li>
            <li className="dropdown">
                <a>Forms & Payments</a>
                <div className="dropdown-content">
                    <a href="https://osp.osmsinc.com/FultonGA/BVModules/ProductTemplates/Bvc2013/Product.aspx?productid=EN713-1482" target="_blank">Early Bird Membership Payment</a>
                    <a href="/forms/membership">Membership Form</a>
                </div>
            </li>
            <li className="dropdown">
                <a href="/contact" onClick={handleDropDownClick}>Events</a>
                <div className="dropdown-content">
                    <a href="/calendar" onClick={handleLinkClick}>Calendar</a>
                    <a href="/conferences/FLC" onClick={handleLinkClick}>Fall Leadership Conference</a>
                    <a href="/conferences/RLC" onClick={handleLinkClick}>Regional Leadership Conference</a>
                    <a href="/conferences/SLC" onClick={handleLinkClick}>State Leadership Conference</a>
                    <a href="/conferences/NLC" onClick={handleLinkClick}>National Leadership Conference</a>
                </div>
            </li>
            <li className="dropdown">
                <a>Meetings</a>
                <div className="dropdown-content">
                    <a href="/meetings/august">August Meeting</a>
                </div>
            </li>
            <li className="dropdown">
                <a>Resources</a>
                <div className="dropdown-content">
                    <a href="https://docs.google.com/spreadsheets/d/13dLgdql_YYl3mGrPZG3ihjKP-0tp0xoPvKiTGEF-GZ4/edit?usp=sharing" target="_blank">Membership Point Tracker</a>
                    <a href="https://georgiafbla.org/high-school-competitive-events/" target="_blank">Georgia FBLA Website</a>
                </div>
            </li>
        </ul>
    </nav>
  );
};

export default NavBar;