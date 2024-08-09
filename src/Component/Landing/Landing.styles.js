import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #ffffff, #f5f5f5);
  color: #1f1f1f;
  padding: 0 20px;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  z-index: 1; /* Ensures text is above particles */
`;

export const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 40px;
  z-index: 1;
`;

export const CTAButton = styled(motion.button)`
  padding: 15px 30px;
  font-size: 1.2rem;
  background: #1f1f1f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
  z-index: 1;

  &:hover {
    background: #333333;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px; /* Space between the buttons */
  z-index: 1;
`;