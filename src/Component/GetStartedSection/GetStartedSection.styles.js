import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #ffffff, #f5f5f5);
  padding: 50px 20px;
  color: #1f1f1f;
  text-align: left;
  position: relative;
  overflow: hidden;
`;

export const FeatureTextContainer = styled(motion.div)`
  padding: 20px;
`;

export const FeatureTextItem = styled(motion.div)`
  margin-bottom: 40px;
`;

export const FeatureBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

export const FeatureBox = styled(motion.div)`
  background-color: #e0e0e0;
  padding: 20px;
  width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const FeatureTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 10px;
`;

export const VideoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  iframe {
    width: 80%;
    height: 60%;
    max-width: 800px;
    max-height: 450px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const WatchButton = styled.button`
  background-color: #1f1f1f;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #333;
  }
  margin-top: 20px;
`;

export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
