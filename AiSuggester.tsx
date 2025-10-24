import React, { useState } from 'react';
import { generateSolutionSuggestion } from '../services/geminiService';

interface AiSuggesterProps {
  onSuggestion?: (suggestedServices: string[]) => void;
}

const AiSuggester: React.FC<AiSuggesterProps> = ({ onSuggestion }) => {
  const [problem, setProblem] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSuggest = async () => {
    if (!problem.trim()) {
      setError('Please describe your business problem.');
      return;
    }
    setIsLoading(true);
    setError('');
    setSuggestion('');
    try {
      const result = await generateSolutionSuggestion(problem);
      setSuggestion(result.suggestion);
      if (onSuggestion && result.services && result.services.length > 0) {
        onSuggestion(result.services);
      }
    } catch (e) {
      setError('Sorry, we couldn\'t generate a suggestion at this time. Please try again later.');
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-inner">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">AI-Powered Solution Suggester</h3>
      <p className="text-center mt-2 text-gray-600 dark:text-gray-400">Not sure what you need? Describe your challenge below.</p>
      <div className="mt-6">
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="e.g., 'Our team struggles with remote collaboration and data security.' or 'We need a new website to attract more customers.'"
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
          disabled={isLoading}
          aria-label="Describe your business problem"
        />
        <button
          onClick={handleSuggest}
          disabled={isLoading}
          className="mt-4 w-full bg-secondary hover:bg-blue-700 dark:bg-secondary-dark dark:hover:bg-secondary text-white font-bold py-3 px-4 rounded-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Thinking...
            </>
          ) : 'Get Suggestion'}
        </button>
      </div>
      {error && <p className="mt-4 text-center text-red-500" role="alert">{error}</p>}
      {suggestion && (
        <div className="mt-6 p-6 bg-white dark:bg-gray-700 rounded-lg border border-green-500/50" role="status">
          <h4 className="font-bold text-lg text-gray-900 dark:text-white">Our Recommendation:</h4>
          <p className="mt-2 whitespace-pre-wrap text-gray-700 dark:text-gray-300">{suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default AiSuggester;