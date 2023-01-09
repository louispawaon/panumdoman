import React, {useEffect,useState} from "react";  
import tagalogWords from '../pages/corpus/wordlist.json';

export default function Home() {
  const [word, setWord] = useState('');

  /*useEffect(() => {
    async function getRandomWord() {
      try {
        const words = tagalogWords
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        setWord(randomWord);
        sessionStorage.setItem('randomWord', randomWord);
      } catch (error) {
        console.error(error);
      }
    }

    getRandomWord();
  }, []);*/

    function getRandomWord(){
      const words = tagalogWords
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      setWord(randomWord);
    }
  return (
    
    <div>
      {word}
      <button onClick={getRandomWord}>Start</button>
    </div>
    
    
  )
}
