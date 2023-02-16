import React from "react";
import {AiOutlineTwitter,AiOutlineGithub} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'

export default function Footer(){
    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 py-6 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
            <a href="https://github.com/yourgithubrepository" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300">
                Visit repository here
              </a>
            </div>
            <div className="flex items-center">
            <a href="https://www.facebook.com/miggypawaon/" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-gray-300">
                <FiFacebook size={24} />
              </a>
              <a href="https://twitter.com/miggy_pawaon" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-gray-300">
                <AiOutlineTwitter size={24} />
              </a>
              <a href="https://github.com/louispawaon" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-gray-300">
                <AiOutlineGithub size={24} />
              </a>
            </div>
          </div>
        </footer>
      );
};
