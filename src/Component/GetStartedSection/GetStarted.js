import React, { useState } from 'react';
import {
  SectionContainer,
  FeatureTextContainer,
  FeatureTextItem,
  FeatureBoxContainer,
  FeatureBox,
  FeatureTitle,
  FeatureDescription,
  VideoModal,
  WatchButton,
  containerVariants,
  itemVariants,
} from './GetStartedSection.styles';

const GetStartedSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <SectionContainer id="get-started-section">
      <FeatureTextContainer
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <FeatureTextItem variants={itemVariants}>
          <FeatureTitle>AI-Enabled Resume Optimization</FeatureTitle>
          <FeatureDescription>
            Our advanced AI technology analyzes your resume and provides you with a comprehensive score, pinpointing areas for improvement and offering suggestions to enhance your resume's effectiveness.
          </FeatureDescription>
        </FeatureTextItem>
      </FeatureTextContainer>

      <FeatureBoxContainer>
        <FeatureBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <FeatureTitle>Build Your Resume</FeatureTitle>
          <FeatureDescription>
            Use our intuitive resume builder to create a professional and tailored resume that showcases your skills and achievements.
          </FeatureDescription>
        </FeatureBox>

        <FeatureBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <FeatureTitle>AI-Powered Chat Support</FeatureTitle>
          <FeatureDescription>
            Have questions? Our AI chat assistant is here to help you with resume tips, application advice, and more, ensuring you're always on the right track.
          </FeatureDescription>
        </FeatureBox>

        <FeatureBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <FeatureTitle>Get Real-Time Feedback</FeatureTitle>
          <FeatureDescription>
            Receive instant feedback on your resume and make adjustments on the go. Our real-time scoring helps you optimize your resume efficiently.
          </FeatureDescription>
        </FeatureBox>
      </FeatureBoxContainer>

      <WatchButton onClick={() => setModalOpen(true)} initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}>
        Watch Video
      </WatchButton>

      {isModalOpen && (
        <VideoModal onClick={() => setModalOpen(false)}>
          <iframe
            src="https://www.youtube.com/embed/jOn0xd9qeH0"
            allowFullScreen
            title="AI-Enabled Resume Optimization Video"
          ></iframe>
        </VideoModal>
      )}
    </SectionContainer>
  );
};

export default GetStartedSection;
    