import React, {useState} from "react";
import {MdOutlineLeaderboard} from 'react-icons/md';
import {RiInformationLine} from 'react-icons/ri'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

export default function Header(){
     return (
        <nav className="flex items-center justify-between px-4 py-3 bg-gray-800">
        <div className="flex-1 sm:text-center text-left">
          <p className="font-lexend sm:text-3xl font-semibold text-xl text-white">panumdoman.</p>
        </div>
         <div className="flex items-center">
            <AiOutlineQuestionCircle className="text-white h-7 w-7 fill-current mr-4"/>

            <MdOutlineLeaderboard className="text-white h-7 w-7 fill-current mr-4"/>
    
            <RiInformationLine className="text-white h-7 w-7 fill-current mr-4"/>
         </div>
       </nav>
     );
   };

   {/*to be fixed ang hamburger menu bcos yes*/}