import {GlobalStyle} from "./styles/global";
import {Header} from './components/Header/index';
import {Dashboard} from './components/Dashboard';
import { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);


  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleOCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
     <Header openNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard />

     <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleOCloseNewTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
     <GlobalStyle />
    </>
  );
}


