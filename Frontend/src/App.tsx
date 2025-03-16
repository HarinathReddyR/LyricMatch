import  { useState } from 'react';
import { Music2, Check, X, RefreshCw } from 'lucide-react';
import axios from 'axios';

function App() {
  const [lyricSnippet, setLyricSnippet] = useState<string>('');
  const [userGuess, setUserGuess] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [songTitle,setSongTitle] =useState<string>("not came yet");
  const [id,setId] = useState('');

  const handleGenerateLyrics = async () => {
    setIsLoading(true);
    // This will be replaced with actual API call
    // setTimeout(async () => {
      const response = await axios.get("http://localhost:6969/api/lyrics/generate" );
      console.log(response.data);
      console.log("hi");
      setId(response.data.id);
      setLyricSnippet(response.data.lyrics);
      setIsLoading(false);
      setResult(null);
      setShowResult(false);
      setUserGuess('');
    // }, 1000);
  };

  const handleCheckAnswer = async () => {
    const response = await axios.post("http://localhost:6969/api/lyrics/guess" ,{
      id:id,
      guess:userGuess,
    });
    const correctTitle = response.data.actualTitle;
    setResult(response.data.correct ? 'correct' : 'incorrect');
    setSongTitle(correctTitle)
    setShowResult(true);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <Music2 size={32} color="#9333ea" />
          <h1 className="title">Lyric Master</h1>
        </div>

        <button
          className="button button-primary"
          disabled={isLoading}
          onClick={handleGenerateLyrics}
        >
          {isLoading ? (
            <RefreshCw size={20} className="spinner" />
          ) : (
            <Music2 size={20} />
          )}
          Generate Lyric Snippet
        </button>

        {lyricSnippet && (
          <div className="lyrics-box">
            {lyricSnippet}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            className="input"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter the song title..."
            disabled={!lyricSnippet}
          />

          <button
            className="button button-secondary"
            onClick={handleCheckAnswer}
            disabled={!userGuess || !lyricSnippet}
          >
            Check Answer
          </button>
        </div>

        {showResult && (
          <div className="result-transition">
            {result === 'correct' ? (
              <div className="alert alert-success animate-bounce">
                <Check size={20} />
                Correct! You're a Lyric Master!
              </div>
            ) : (
              <div className="alert alert-error animate-shake">
                <X size={20} />
                Incorrect! The song title is {songTitle}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    // <div className='App-container'>
    //   <div className='card'>
    //       <div className='title-section'>
    //         <Music2 size={32} color="#9333ea" />
    //         <h1>Lyric Match</h1>
    //       </div>
        
    //           <button className='generate-button'>Generate</button>
          
    //   </div>
    // </div>
  );
}

export default App;