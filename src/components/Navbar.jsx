
import "../styles/navbar.css"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { useRef } from "react"
import image from "./../../public/logo.svg"
// import image from "../logo.svg"
import useOutsideClick from "./useOutsideClick";
import { IoClose } from "react-icons/io5";

export default function TransparentNavbar({type}) {
  console.log(type)
  const [linkMenuOpen, setLinkMenuOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(0);

  function toggleSelection(selId) {
    if (selectedType == selId) {
      setSelectedType(0);
    }
    else {
      setSelectedType(selId)
    }
  }

  const linkType = (type=="transparent") ? "link" : "link-black"
  const arrowType = (type=="transparent") ? "down-arrow" : "down-arrow-black"
  const instagramType = (type=="transparent") ? "instagram-icon" : "instagram-icon-black"
  const hamburgerType = (type=="transparent") ? "link-hamburger-button" : "link-hamburger-button-black"

  // Make sure that new menu sections are duplicated in both sections below (Desktop & Mobile)
  return (
    <>
      {/* Desktop */}
      <div className={`${type=="transparent" ? "transparent-navbar-container" : "flat-navbar-container"}`}>
        <div className="navbar-content">
          <a href="/">
            <img src={image.src} className="navbar-logo" alt="logo" />
          </a>
          {/* Change this section for website header forms */}
          <div className="link-container">
            <div className="dropdown forms-dropdown">
              <div className={linkType}>FORMS AND PAYMENTS<span className={arrowType}><svg width="9" height="9" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
              <div className="dropdown-content forms-content">
                <a href="/forms/membership">Membership Form</a>     
                {/* <a href="/forms/flc-signup">FLC Registration Form</a>
                <a href="/forms/rlc-signup">RLC Registration Form</a> */}
                <a href="/forms/slc-signup-p">SLC - Straight to State Presentation</a>
                <a href="/forms/slc-signup-t">SLC - Straight to State Testing</a>
                {/* <a href="/forms/nlc-signup">NLC Registration Form</a> */}
              </div>
            </div>

            <div className="dropdown events-dropdown">
              <div className={linkType}>EVENTS<span className={arrowType}><svg width="9" height="9" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
              <div className="dropdown-content events-content">
                <a href="/calendar/">Calendar</a>
                <a href="/meetings/">Chapter Meeting Slides</a>
                <a href="/community-service/">Community Service Events</a>
                <a href="/flc/">Fall Leadership Conference</a>
                <a href="/rlc/">Region Leadership Conference</a>
                <a href="/slc/">State Leadership Conference</a>
                <a href="/nlc/">National Leadership Conference</a>
              </div>
            </div>

            <div className="dropdown about-dropdown">
              <div className={linkType}>ABOUT US<span className={arrowType}><svg width="9" height="9" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
              <div className="dropdown-content about-content">
                <a href="/24-25-team/">Officer Team & Advisers 2024-25</a>
                <a href="/socials-contacts/">Socials & Contacts</a>
              </div>
            </div>

            <div className="dropdown resources-dropdown">
              <div className={linkType}>RESOURCES<span className={arrowType}><svg width="9" height="9" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
              <div className="dropdown-content-left resources-content">         
                <a href="/guidelines">Competitive Events Guidelines</a>       
                <a href="https://georgiafbla.org/high-school-competitive-events/">Competitive Events Resources</a>
              </div>
            </div>

            <div className="instagram-link">
              <a className={instagramType} href="https://www.instagram.com/jchsfbla/?hl=en" target="_blank"><BiLogoInstagramAlt /></a>
            </div>
          </div>

          <div className="link-hamburger-button-container">
            <button className={hamburgerType} onClick={() => {setLinkMenuOpen(true)}}><IoIosMenu /></button>
          </div>

        </div>

      </div>

      {/* Mobile */}
      {
      linkMenuOpen &&
      <div className="link-menu-background">
        <div className="dead-zone" onClick={() => {setLinkMenuOpen(false)}}>

        </div>
        <div className="link-menu-container">
          <div className="menu-close" onClick={() => {setLinkMenuOpen(false)}}>
            <IoClose />
          </div>
          <div className="menu-link" onClick={() => {toggleSelection(1)}}>FORMS AND PAYMENTS<span className="menu-down-arrow"><svg width="14" height="14" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
          <div className="menu-link-dropdown" style={{display: (selectedType == 1) ? "flex" : "none"}}>
              <a href="/forms/membership">Membership Form</a>     
              {/* <a href="/forms/flc-signup">FLC Registration Form</a>
              <a href="/forms/rlc-signup">RLC Registration Form</a> */}
              <a href="/forms/slc-signup-p">SLC - Straight to State Presentation</a>
              <a href="/forms/slc-signup-t">SLC - Straight to State Testing</a>
              {/* <a href="/forms/nlc-signup">NLC Registration Form</a> */}                      
          </div>
          <div className="menu-link" onClick={() => {toggleSelection(2)}}>EVENTS<span className="menu-down-arrow"><svg width="14" height="14" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
          <div className="menu-link-dropdown" style={{display: (selectedType == 2) ? "flex" : "none"}}>
                <a href="/calendar/">Calendar</a>
                <a href="/meetings/">Chapter Meeting Slides</a>
                <a href="/community-service/">Community Service Events</a>
                <a href="/flc/">Fall Leadership Conference</a>
                <a href="/rlc/">Region Leadership Conference</a>
                <a href="/slc/">State Leadership Conference</a>
                <a href="/nlc/">National Leadership Conference</a>
          </div>
          <div className="menu-link" onClick={() => {toggleSelection(3)}}>ABOUT US<span className="menu-down-arrow"><svg width="14" height="14" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
          <div className="menu-link-dropdown" style={{display: (selectedType == 3) ? "flex" : "none"}}>
            <a href="/24-25-team/">Officer Team & Advisers 2024-25</a>
            <a href="/socials-contacts/">Socials & Contacts</a>
          </div>
          <div className="menu-link" onClick={() => {toggleSelection(4)}}>RESOURCES<span className="menu-down-arrow"><svg width="14" height="14" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
          <div className="menu-link-dropdown" style={{display: (selectedType == 4) ? "flex" : "none"}}>      
            <a href="/guidelines">Competitive Events Guidelines</a>       
            <a href="https://georgiafbla.org/high-school-competitive-events/">Competitive Events Resources</a>      
          </div>
        </div>
      </div>
      }
    </>
  )


}
