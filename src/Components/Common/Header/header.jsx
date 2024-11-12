// src/components/Header.jsx
import React from "react";
import header from "@/Components/Common/Header/header.module.css"; // Create a new CSS file for Header-specific styles
import '@/styles/globals.css'
import Image from "next/image";
import logo from "../../../../public/assets/img/icon2.png";

function Header() {
  return (
    <header className={header.header}>
      <nav className={header.navbar}>
        <div className={header.header_left}>
          <Image className={header.icon} src={logo} alt="" />
          <ul className={header.navbarUL}>
            <li><a className={header.hyperLink} href="#">HTML</a></li>
            <li><a className={header.hyperLink} href="#">CSS</a></li>
            <li><a className={header.hyperLink} href="#">JavaScript</a></li>
            <li><a className={header.hyperLink} href="#">React</a></li>
          </ul>
        </div>
      </nav>
      <div className={header.header_expanded_spacer}></div>
      <div className={header.header_block}>
        <h1>HTML/ CSS/ JS Interview Questions for Developers</h1>
        <p>
          Use our engineer-created questions to interview and hire the most
          qualified HTML/CSS/JS developers for your organization.
        </p>
      </div>
      <div className={header.svg_holder}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8vw" height="8vw" viewBox="0 0 128 128">
          <path fill="#e44d26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z" />
          <path fill="#fff" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z" />
        </svg>
      </div>
    </header>
  );
}

export default Header;
