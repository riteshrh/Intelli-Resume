import React from 'react';
import { HeaderContainer, Logo, NavLinks, NavLink } from './Header.styles';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <Logo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        onClick={scrollToTop}
        style={{ cursor: 'pointer' }}
      >
        Intelli Resume
      </Logo>
      <NavLinks>
        <NavLink
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={scrollToTop}
        >
          Home
        </NavLink>
        <NavLink
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          About
        </NavLink>
        <NavLink
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Features
        </NavLink>
        <NavLink
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Contact
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
