import React from "react";
import {
  StyledOverlay,
  StyledNotification,
  StyledTitle,
  StyledInfo,
  StyledStack,
  StyledContent,
  StyledTitle01,
  StyledBodytext,
  StyledButton,
  StyledButton01
} from "./DisclaimerPopup.styles";

export const DisclaimerPopup = ({ onAccept }) => {
  const handleAccept = () => {
    onAccept();
  };

  const handleOverlayClick = (e) => {

    if (e.target === e.currentTarget) {

    }
  };

  return (
    <StyledOverlay onClick={handleOverlayClick}>
      <StyledNotification>
        <StyledTitle>
          <StyledInfo />
          <StyledStack>
            <StyledContent>
              <StyledTitle01>Disclaimer</StyledTitle01>
              <StyledBodytext><strong>Mental Health Disclaimer</strong>
              < br />
This website is for informational purposes only and is not a substitute for professional mental health care, medical advice, or treatment.
If you are experiencing a mental health crisis, please contact emergency services (911) or a crisis helpline:
<br />
• National Suicide Prevention Lifeline: 988
<br />
• Crisis Text Line: Text HOME to 741741
<br />
Always consult with a qualified mental health professional for diagnosis, treatment, or any mental health concerns. Do not delay seeking professional help based on information from this website.</StyledBodytext>
            </StyledContent>
            <StyledButton onClick={handleAccept}>
              <StyledButton01>I Accept</StyledButton01>
            </StyledButton>
          </StyledStack>
        </StyledTitle>
      </StyledNotification>
    </StyledOverlay>
  );
};