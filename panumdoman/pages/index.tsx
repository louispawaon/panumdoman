import React, {useEffect,useState} from "react";  
import {MainGame,Header,InstructionModal,AboutModal} from '../components/CompontentIndex'

export default function Home() {
  const [showInstModal, setShowInstModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleInstModal=()=>{
    setShowInstModal(true);
  };

  const handleInstModalClose=()=>{
    setShowInstModal(false);
  };

  const handleAboutModal=()=>{
    setShowAboutModal(true);
  };

  const handleAboutModalClose=()=>{
    setShowAboutModal(false);
  };

  useEffect(() =>{
    setShowInstModal(true);
  },[])

  return (
    <>
      <Header onOpenInstModal={handleInstModal} onOpenAboutModal={handleAboutModal}/>
      <InstructionModal isOpen={showInstModal} onClose={handleInstModalClose}/>
      <AboutModal isOpen={showAboutModal} onClose={handleAboutModalClose}/>
      <MainGame/>
    </>
    )
}
