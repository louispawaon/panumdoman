import React, {useEffect,useState, useRef} from "react";  
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
    const [isCorrect,setIsCorrect] = useState<boolean>(false);
    const [isAnimating,setIsAnimating] = useState<boolean>(false);
    const [newWordCounter, setNewWordCounter] = useState<number>(1);
    const wordFetch = useRef(false)

const restartGame = () => {
  setShownWord([]);
  setNewWordCounter(0);
  setScore(0);
  setLives(3);
  setAllWords(tagalogWords.words);
  setGameOver(false);
  setNew();
}

const setNew=()=>{
    const nextWord = tagalogWords.words[Math.floor(Math.random() * tagalogWords.words.length)];
    setCurrentWord({ tagalogWords: nextWord, seen: shownWord.some(w => w.tagalogWords === nextWord) });
    setShownWord([...shownWord,{tagalogWords: nextWord, seen: true}]);
    
}
useEffect(() => { //pre rendered
    if (wordFetch.current) return;
    wordFetch.current = true;
    setNew()
}, []);

/*
//Animation for score - scapped for now
useEffect(()=>{
  if(isCorrect){
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 200);
  }
},[isCorrect])
*/

const handleGuess = (guess: boolean) => {

  //lives-scoring mechanic
  if (guess === currentWord.seen) { //new and not seen (default false)
    setScore(score => score + 1);
    setIsCorrect(true)
  }
  else if(guess!=currentWord.seen){
    setLives(lives=>lives-1);
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
  setAllWords(allWords.filter(w => w !== currentWord.tagalogWords));

  if(newWordCounter>=5 && (newWordCounter % 5 === 0 || newWordCounter % 2 === 0)) {
        console.log("welcome to modolo",shownWord)
        const nextWord = shownWord[Math.floor(Math.random() * shownWord.length)];
        console.log("the repeating word is", nextWord)
        setCurrentWord({ tagalogWords: nextWord.tagalogWords, seen: nextWord.seen });
        setNewWordCounter(0)
  } else {
        setNew()
  }

}

useEffect(()=>{
  if (lives===0){
    setGameOver(true);
  }
},[lives])

  return (
    <div className="flex justify-center items-center h-screen bg-stone-100">
        {gameOver ? (
            <div className="text-center text-stone-900">
                <p className="font-lexend xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-bold">GAME OVER</p>
                <p className="mt-5 font-lexend xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-medium">FINAL SCORE| {score}</p>
                <button className="mt-6 text-center bg-transparent hover:bg-slate-100 hover:border-zinc-500 bg-yellow-500 text-zinc-800 font-bold hover:text-zinc-800 py-2 px-4 border hover:border-transparent rounded" onClick={restartGame}>RESTART GAME</button>
            </div>
        ) : (
          <div>
              <div className="mb-8 flex justify-center space-x-10 text-center text-4xl text-stone-900">
                <p>lives |</p><p className="font-semibold">{lives}</p>
                <p>score |</p><p className="font-semibold">{score}</p>
              </div>
              <p className="text-center xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-lexend font-bold text-rose-700">{currentWord.tagalogWords}</p>
              <div className="mt-6 text-center space-x-20">
                <button className="bg-transparent hover:bg-slate-100 hover:border-zinc-500 bg-yellow-500 text-zinc-800 font-bold hover:text-zinc-800 py-2 px-4 border hover:border-transparent rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => handleGuess(true)}>SEEN</button>
                <button className="bg-transparent hover:bg-slate-100 hover:border-zinc-500 bg-yellow-500 text-zinc-800 font-bold hover:text-zinc-800 py-2 px-4 border hover:border-transparent rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => handleGuess(false)}>NEW</button>
              </div>
          </div> 
       )}
    </div>
  )
}