'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Home, Mail, Info, List } from "lucide-react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobileQuery = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    setIsMobile(mobileQuery);
  }, [mobileQuery]);

  const navItems = [
    { name: 'Home', icon: <Home style={{ fontSize: '28px' }} />, to: 'home' },
    { name: 'About', icon: <Info style={{ fontSize: '28px' }} />, to: 'about' },
    { name: 'Services', icon: <List style={{ fontSize: '28px' }} />, to: 'services' },
    { name: 'Contact', icon: <Mail style={{ fontSize: '28px' }} />, to: 'contact' },
  ];

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : 'desktop'} z-50`}>
      {!isMobile && <div className="logo"><Image src={`/Tradvisor-logo.png`} alt={"logo"} width="90" height="90" /></div>}
      <ul className="nav-items hover:cursor-pointer">
        {navItems.map((item) => (
          <li key={item.name}>
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              {isMobile ? item.icon : item.name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;