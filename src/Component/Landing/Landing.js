import React from 'react';
import Particles from '../Partciles';
import { HeroContainer, HeroTitle, HeroSubtitle, ButtonContainer, CTAButton } from './Landing.styles';

const scrollToSection = () => {
  const section = document.getElementById('get-started-section');
  section.scrollIntoView({ behavior: 'smooth' });
};

const Landing = () => {
  return (
    <HeroContainer>
      <Particles />
      <HeroTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Elevate Your Resume with AI Insights
      </HeroTitle>
      <HeroSubtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Get real-time feedback and optimize your resume for success.
      </HeroSubtitle>
      
      <ButtonContainer>
        <CTAButton
          whileHover={{ scale: 1.05 }}
          onClick={scrollToSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Get Started
        </CTAButton>

        <CTAButton
          whileHover={{ scale: 1.05 }}
          onClick={() => window.open('https://formless.ai/c/GRmYRJ2DTVdN', '_blank')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Join Waitlist
        </CTAButton>
      </ButtonContainer>
    </HeroContainer>
  );
};

export default Landing;
