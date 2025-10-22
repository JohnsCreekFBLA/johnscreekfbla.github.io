import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import '../css/navbar.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close menu when a link is clicked (optional, for better UX)
  const handleLinkClick = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  // Handle dropdown toggle on mobile
  const handleDropdownClick = (e, dropdownName) => {
    e.preventDefault();
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <nav className="navbar">
    <img src="/images/topNavLogo.svg" className="navbar-logo" alt="logo" />
      <button
        className="navbar-hamburger"
        onClick={() => {
          setOpen(!open);
          setActiveDropdown(null);
        }}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <RxHamburgerMenu size={32} />
      </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
            <li>
                <a href="/" onClick={handleLinkClick}>Home</a>
            </li>
            <li className={`dropdown${activeDropdown === 'about' ? ' active' : ''}`}>
                <a onClick={(e) => handleDropdownClick(e, 'about')}>About</a>
                <div className="dropdown-content">
                    <a href="/officer" onClick={handleLinkClick}>Officer Team 25-26</a>
                </div>
            </li>
            <li className={`dropdown${activeDropdown === 'forms' ? ' active' : ''}`}>
                <a onClick={(e) => handleDropdownClick(e, 'forms')}>Forms & Payments</a>
                <div className="dropdown-content">
                    <a href="https://osp.osmsinc.com/FultonGA/BVModules/ProductTemplates/Bvc2013/Product.aspx?productid=EN713-1482" target="_blank" onClick={handleLinkClick}>Early Bird Membership Payment</a>
                    <a href="/forms/membership" onClick={handleLinkClick}>Membership Form</a>
                </div>
            </li>
            <li className={`dropdown${activeDropdown === 'events' ? ' active' : ''}`}>
                <a onClick={(e) => handleDropdownClick(e, 'events')}>Events</a>
                <div className="dropdown-content">
                    <a href="/calendar" onClick={handleLinkClick}>Calendar</a>
                    <a href="/events/runoffs" onClick={handleLinkClick}>Runoff Competitions</a>
                    <a href="/conferences/FMR" onClick={handleLinkClick}>Fall Motivational Rally</a>
                    <a href="/conferences/FLC" onClick={handleLinkClick}>Fall Leadership Conference</a>
                    <a href="/conferences/RLC" onClick={handleLinkClick}>Regional Leadership Conference</a>
                    <a href="/conferences/SLC" onClick={handleLinkClick}>State Leadership Conference</a>
                    <a href="/conferences/NLC" onClick={handleLinkClick}>National Leadership Conference</a>
                </div>
            </li>
            <li className={`dropdown${activeDropdown === 'meetings' ? ' active' : ''}`}>
                <a onClick={(e) => handleDropdownClick(e, 'meetings')}>Meetings</a>
                <div className="dropdown-content">
                    <a href="/meetings/august" onClick={handleLinkClick}>August Meeting</a>
                    <a href="/meetings/flc" onClick={handleLinkClick}>FLC Interest Meeting</a>
                </div>
            </li>
            <li className={`dropdown${activeDropdown === 'resources' ? ' active' : ''}`}>
                <a onClick={(e) => handleDropdownClick(e, 'resources')}>Resources</a>
                <div className="dropdown-content">
                    <a href="https://docs.google.com/spreadsheets/d/13dLgdql_YYl3mGrPZG3ihjKP-0tp0xoPvKiTGEF-GZ4/edit?usp=sharing" target="_blank" onClick={handleLinkClick}>Membership Point Tracker</a>
                    <a href="https://georgiafbla.org/high-school-competitive-events/" target="_blank" onClick={handleLinkClick}>Georgia FBLA Website</a>
                </div>
            </li>
        </ul>
    </nav>
  );
};

export default NavBar;
