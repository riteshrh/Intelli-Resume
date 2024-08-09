import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

const Particle = styled(motion.div)`
  position: absolute;
  background: rgba(50, 50, 50, 0.3); 
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const particleVariants = {
  animate: (i) => ({
    y: [
      Math.random() * 100, 
      Math.random() * 200 - 100, 
      Math.random() * 100
    ],
    x: [
      Math.random() * 100, 
      Math.random() * 200 - 100, 
      Math.random() * 100
    ],
    opacity: [0.6, 0.2, 0.6],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const Particles = () => {
  const particleCount = 10; 
  const particles = Array.from({ length: particleCount });

  return (
    <ParticleContainer>
      {particles.map((_, index) => (
        <Particle
          key={index}
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          custom={index}
          variants={particleVariants}
          animate="animate"
        />
      ))}
    </ParticleContainer>
  );
};

export default Particles;
