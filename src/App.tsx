import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { NewTransactionModal} from './components/NewTransactionModal/index';

import { GlobalStyle } from "./styles/global";
import {TransactionsProvider} from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleOCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header openNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}


