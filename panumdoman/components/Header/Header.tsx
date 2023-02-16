import React, {useState} from "react";
import {MdOutlineLeaderboard} from 'react-icons/md';
import {RiInformationLine} from 'react-icons/ri'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

interface Header{
  onOpenInstModal: ()=>void
  onOpenAboutModal: ()=>void

}

export default function Header({onOpenInstModal,onOpenAboutModal}:Header){
     return (
        <nav className=" fixed top-0 w-full flex items-center justify-between px-4 py-3 bg-gray-800">
        <div className="flex-1 sm:text-center text-left">
          <p className="font-lexend sm:text-3xl font-semibold text-xl text-white">panumdoman.</p>
        </div>
         <div className="flex items-center">
            <AiOutlineQuestionCircle onClick={onOpenInstModal} className="text-white h-7 w-7 fill-current mr-4"/>
            
            <MdOutlineLeaderboard className="text-white h-7 w-7 fill-current mr-4"/>
    
            <RiInformationLine onClick={onOpenAboutModal} className="text-white h-7 w-7 fill-current mr-4"/>
         </div>
       </nav>
     );
   };