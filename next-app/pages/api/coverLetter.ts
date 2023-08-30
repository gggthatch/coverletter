import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { jobDescription } = req.body;

    if (!jobDescription) {
      res.status(400).json({ message: 'JOB_DESCRIPTION_EMPTY_ERROR' });
      return;
    }

    try {
      const response = await axios.post('https://api.openai.com/v4/engines/davinci-codex/completions', {
        prompt: `Write a cover letter for the following job description:\n${jobDescription}`,
        max_tokens: 500,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const coverLetter = response.data.choices[0].text.trim();

      res.status(200).json({ message: 'COVER_LETTER_GENERATION_SUCCESS', coverLetter });
    } catch (error) {
      res.status(500).json({ message: 'COVER_LETTER_GENERATION_ERROR', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'METHOD_NOT_ALLOWED' });
  }
}