import React, {useEffect,useState} from "react";  
import tagalogWords from '../pages/corpus/wordlist.json';

interface Word {
  tagalogWords: string;
  seen:boolean;
}

export default function Home() {
  const [shownWord, setShownWord] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<Word>({ tagalogWords: "", seen: false });
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [allWords, setAllWords] = useState<string[]>(tagalogWords.words);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [newWordCounter, setNewWordCounter] = useState<number>(0);

const restartGame = () => {
  setCurrentWord({ tagalogWords: "", seen: false });
  setShownWord([]);
  setScore(0);
  setLives(3);
  setAllWords(tagalogWords.words);
  setGameOver(false);
}

useEffect(() => {
  const nextWord = tagalogWords.words[Math.floor(Math.random() * tagalogWords.words.length)];
  setCurrentWord({ tagalogWords: nextWord, seen: shownWord.some(w => w.tagalogWords === nextWord) });
}, []);

const handleGuess = (guess: boolean) => {
  //scoring mechanic is my problem
  if (guess === currentWord.seen) { //new and not seen (default false)
      setScore(score => score + 1);
  }
  else if (currentWord.seen){ //seen and seen
      setLives(lives => lives -1)
  } 
  
  //logic for previousword being a currentword again
  if (shownWord.length === 0 || (shownWord.length > 0 && shownWord[shownWord.length-1].tagalogWords !== currentWord.tagalogWords)) {
      setNewWordCounter(newWordCounter + 1);
  }
  setShownWord([...shownWord, currentWord]);
  setAllWords(allWords.filter(w => w !== currentWord.tagalogWords));

  if(newWordCounter>=5 && (newWordCounter % 5 === 0 || newWordCounter % 2 === 0)) {
      const nextWord = shownWord[Math.floor(Math.random() * shownWord.length)];
      setCurrentWord({ tagalogWords: nextWord.tagalogWords, seen: nextWord.seen });
      setNewWordCounter(0);
  } else {
      const nextWord = allWords[Math.floor(Math.random() * allWords.length)];
      setCurrentWord({ tagalogWords: nextWord, seen: shownWord.some(w => w.tagalogWords === nextWord) });
  }
}

  return (
    <div>
        {gameOver ? (
            <div>
                <p>Game Over</p>
                <button onClick={restartGame}>Restart</button>
            </div>
        ) : (
          <div>
              <p>Current word: {currentWord.tagalogWords}</p>
              <p>Score: {score}</p>
              <p>Remaining Lives: {lives}</p>
              <p>Have you seen this word before?</p>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleGuess(true)}>SEEN</button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleGuess(false)}>NEW</button>
          </div> 
        )}
    </div>
  )
}
