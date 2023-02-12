import React, {useEffect,useState, useRef,useCallback} from "react";  
import tagalogWords from '../../pages/corpus/wordlist.json';

interface Word {
    tagalogWords: string;
    seen:boolean;
}

export default function MainGame(){
    const [shownWord, setShownWord] = useState<Word[]>([]);
    const [currentWord, setCurrentWord] = useState<Word>({ tagalogWords:"", seen: false });
    const [score, setScore] = useState<number>(0);
    const [lives, setLives] = useState<number>(3);
    const [allWords, setAllWords] = useState<string[]>(tagalogWords.words);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [newWordCounter, setNewWordCounter] = useState<number>(1);
    const wordFetch = useRef(false)

const restartGame = () => {
  setCurrentWord({ tagalogWords: "", seen: false });
  setShownWord([]);
  setScore(0);
  setLives(3);
  setAllWords(tagalogWords.words);
  setGameOver(false);
}

const setNew=()=>{
    const nextWord = tagalogWords.words[Math.floor(Math.random() * tagalogWords.words.length)];
    setCurrentWord({ tagalogWords: nextWord, seen: shownWord.some(w => w.tagalogWords === nextWord) });
    //console.log("the word is", nextWord)
    //console.log("am i appending something?")
    setShownWord([...shownWord,{tagalogWords: nextWord, seen: true}]);
    //console.log("the shown word is", shownWord)
    
}
useEffect(() => { //pre rendered
    if (wordFetch.current) return;
    wordFetch.current = true;
    setNew()
}, []);



const handleGuess = useCallback((guess: boolean) => {

  //lives-scoring mechanic
  if (guess === currentWord.seen) { //new and not seen (default false)
    setScore(score => score + 1);
  }
  else if (currentWord.seen){ //seen and seen
    setScore(score => score + 1);
  }else{
    setLives(lives=>lives-1);
  }

  //logic for previousword being a currentword again
  if (shownWord.length === 0 || (shownWord.length > 0 && shownWord[shownWord.length-1].tagalogWords == currentWord.tagalogWords)) {
      setNewWordCounter(newWordCounter + 1);
  }
  //setShownWord([...shownWord, currentWord]);
  setAllWords(allWords.filter(w => w !== currentWord.tagalogWords));
  //console.log("allwords", allWords, newWordCounter)

  if(newWordCounter>=5 && (newWordCounter % 5 === 0 || newWordCounter % 2 === 0)) {
        console.log("welcome to modolo",shownWord)
        const nextWord = shownWord[Math.floor(Math.random() * shownWord.length)];
        console.log("the repeating word is", nextWord)
        setCurrentWord({ tagalogWords: nextWord.tagalogWords, seen: nextWord.seen });
        setNewWordCounter(0)
  } else {
        //console.log("am i setting up?")
        //const nextWord = allWords[Math.floor(Math.random() * allWords.length)];
        //setCurrentWord({ tagalogWords: nextWord, seen: shownWord.some(w => w.tagalogWords === nextWord) });
        setNew()
        //console.log("else",nextWord)
  }

  if(lives === 0){
    setGameOver(true);
  }

},[lives])

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