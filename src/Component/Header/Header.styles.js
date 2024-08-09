import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff; /* White background for header */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f1f1f; /* Soft black for logo text */
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled(motion.a)`
  font-size: 1.2rem;
  color: #333333; /* Slightly darker grey for nav links */
  text-decoration: none;
  cursor: pointer;
  padding: 10px 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #1f1f1f; /* Darker grey on hover */
  }
`;
