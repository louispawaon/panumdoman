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
  const [gameOver, setGameOver] = useState<boolean>(false);

  
  const getRandomWord=useCallback(()=>{
    let randomWord = tagalogWords.words[Math.floor(Math.random() * tagalogWords.words.length)];
    /*if(shownWord.length > 10){
      // choose a random word from shown words
      randomWord = shownWord[Math.floor(Math.random() * shownWord.length)];
    }*/
    setCurrentWord(randomWord);
    
  },[])

  const restartGame = useCallback(() => {
    setShownWord([]);
    setCurrentWord('');
    setScore(0);
    setLives(3);
    setGameOver(false);
    getRandomWord();
  }, [getRandomWord]);


  useEffect(() => {
    getRandomWord();
  }, [getRandomWord]);

  const handleGuess=useCallback((guess:string)=> {
    if (guess === 'NEW' && !shownWord.includes(currentWord)) {
      setShownWord(prevWords=>[...prevWords,currentWord]);
      // The user correctly identified a new word
      setScore(prevScore => prevScore + 1);
    } else if (guess === 'NEW' && shownWord.includes(currentWord)) {
      // The user incorrectly identified a previously shown word
      setLives(prevLives => prevLives - 1);
    } 
    else if (guess === 'SEEN' && shownWord.includes(currentWord)) {
      // The user correctly identified a previously shown word
      setScore(prevScore => prevScore + 1);
    }
    else if (guess === 'SEEN' && !shownWord.includes(currentWord)) {
      // The user incorrectly identified a new word
      setLives(prevLives => prevLives - 1);
    }

    if(lives === 0){
      setGameOver(true);
    }else{
      getRandomWord()
    }
    },[shownWord,currentWord,lives,getRandomWord])

  return (
    
    <div>
      {gameOver?(
        <div>Game Over!</div>):(
        <>
        <p>Word: {currentWord}</p>
        <p>Score: {score}</p>
        <p>Remaining Lives: {lives}</p>
        <p>Have you seen this word before?</p>
        <button onClick={() => handleGuess('SEEN')}>SEEN</button>
        <button onClick={() => handleGuess('NEW')}>NEW</button>
        </>
        )}
        {gameOver && <button onClick={restartGame}>Restart</button>}
    </div> 
  )
  }
