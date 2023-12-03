import React, {useEffect,useState} from "react";  
import {MainGame,Header,AboutModal,Footer} from '../components/CompontentIndex'

export default function Home() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleAboutModal=()=>{
    setShowAboutModal(true);
  };

  const handleAboutModalClose=()=>{
    setShowAboutModal(false);
  };

  useEffect(() =>{
    setShowAboutModal(true);
  },[])

  return (
    <>
      <Header onOpenAboutModal={handleAboutModal}/>
      <AboutModal isOpen={showAboutModal} onClose={handleAboutModalClose}/>
      <MainGame/>
      <Footer/>
    </>
    )
}
