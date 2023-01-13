import React, {useEffect,useState,useCallback} from "react";  
import tagalogWords from '../pages/corpus/wordlist.json';

interface Props {
  tagalogWords: string[];
}

export default function Home() {
  const [shownWord, setShownWord] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);

  
  const getRandomWord=useCallback(()=>{
    const randomWord = tagalogWords[Math.floor(Math.random() * tagalogWords.length)];
    setCurrentWord(randomWord);
    setShownWord(prevWords=>[...prevWords,randomWord]);
    
  },[])

  useEffect(() => {
    getRandomWord();
  }, [getRandomWord]);

  const handleGuess=useCallback((guess:string)=> {
    if (guess === 'yes' && shownWord.includes(currentWord)) {
      // The user correctly identified a previously shown word
      setScore(prevScore => prevScore + 1);
    } else if (guess === 'no' && shownWord.includes(currentWord)) {
      // The user incorrectly identified a previously shown word
      setLives(prevLives => prevLives - 1);
    } else if (guess === 'yes' && !shownWord.includes(currentWord)) {
      // The user incorrectly identified a new word
      setLives(prevLives => prevLives - 1);
    }
    /*
    // check if the word is seen again after certain time
    if (wordShownTime) {
        const timePassed = Date.now() - wordShownTime;
        // check if word is seen again after 5 seconds
        if (timePassed > 5000) {
          setScore(prevScore => prevScore + 1);
        }*/
        setTimeout(getRandomWord, 100);
    },[shownWord,currentWord,getRandomWord])
    // Show a new random word
    
  return (
    
    <div>
      <p>Word: {currentWord}</p>
      <p>Score: {score}</p>
      <p>Remaining Lives: {lives}</p>
      <p>Have you seen this word before?</p>
      <button onClick={() => handleGuess('yes')}>Yes</button>
      <button onClick={() => handleGuess('no')}>No</button>
    </div>
    
    
  )
  }
