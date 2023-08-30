import { useState } from 'react';
import TextInput from '../components/TextInput';
import CoverLetterOutput from '../components/CoverLetterOutput';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [jobDescription, setJobDescription] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const getJobDescription = (event) => {
    setJobDescription(event.target.value);
  };

  const generateCoverLetter = async () => {
    if (!jobDescription) {
      alert('JOB_DESCRIPTION_EMPTY_ERROR');
      return;
    }

    const response = await fetch('/api/coverLetter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobDescription }),
    });

    if (response.ok) {
      const data = await response.json();
      setCoverLetter(data.coverLetter);
      alert('COVER_LETTER_GENERATION_SUCCESS');
    } else {
      alert('COVER_LETTER_GENERATION_ERROR');
    }
  };

  return (
    <div className={styles.container}>
      <TextInput id="jobDescriptionInput" value={jobDescription} onChange={getJobDescription} />
      <button onClick={generateCoverLetter}>Generate Cover Letter</button>
      <CoverLetterOutput id="coverLetterOutput" coverLetter={coverLetter} />
    </div>
  );
}