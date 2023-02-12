import React from "react";
import {MdOutlineIntegrationInstructions,MdOutlineLeaderboard} from 'react-icons/md';
import {RiInformationLine} from 'react-icons/ri'


export default function Header(){
    return(
        <main>
            <nav>
                <h1 className="font-lexend text-3xl font-semibold flex-auto text-center">panumdoman.</h1>
                <div>
                    <MdOutlineIntegrationInstructions className="h-7 w-7"/>
                    <MdOutlineLeaderboard className="h-7 w-7"/>
                    <RiInformationLine className="h-7 w-7"/>
                </div>
            </nav>
        </main>
        )
}