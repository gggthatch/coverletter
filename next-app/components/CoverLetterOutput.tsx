import React from 'react';

interface CoverLetterOutputProps {
  coverLetter: string;
}

const CoverLetterOutput: React.FC<CoverLetterOutputProps> = ({ coverLetter }) => {
  return (
    <div id="coverLetterOutput">
      <h2>Your Cover Letter:</h2>
      <p>{coverLetter}</p>
    </div>
  );
};

export default CoverLetterOutput;