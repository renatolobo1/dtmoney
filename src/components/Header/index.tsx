// import { useState } from 'react'
import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'

interface HeaderProps{
  openNewTransactionModal: () => void;
}

export function Header({openNewTransactionModal}: HeaderProps) {
  // const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(true);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={openNewTransactionModal}>
          Nova transação
        </button>        
      </Content>
    </Container>
  )
}