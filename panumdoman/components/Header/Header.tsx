import React from "react";
import {RiInformationLine} from 'react-icons/ri'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

interface Header{
  onOpenInstModal: ()=>void
  onOpenAboutModal: ()=>void

}

export default function Header({onOpenInstModal,onOpenAboutModal}:Header){
     return (
        <nav className=" fixed top-0 w-full flex items-center justify-between px-4 py-3 bg-gray-800">
        <div className="flex">
          <span className="font-lexend font-semibold text-3xl text-white">panumdoman.</span>
        </div>
        <div className="flex">
          <AiOutlineQuestionCircle onClick={onOpenInstModal} className="text-white h-7 w-7 fill-current mr-4"/>
          <RiInformationLine onClick={onOpenAboutModal} className="text-white h-7 w-7 fill-current mr-4"/>
        </div>
       </nav>
     );
   };