import React, { useState } from 'react';

interface TextInputProps {
  onJobDescriptionChange: (jobDescription: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onJobDescriptionChange }) => {
  const [jobDescription, setJobDescription] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(event.target.value);
    onJobDescriptionChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="jobDescriptionInput">Job Description:</label>
      <textarea
        id="jobDescriptionInput"
        value={jobDescription}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextInput;