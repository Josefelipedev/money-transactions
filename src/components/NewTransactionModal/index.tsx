import * as Dialog from '@radix-ui/react-dialog';
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles.ts';
import { ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay className="overlay" />
      <Content className="content">
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" />
          <TransactionTypeContainer>
            <TransactionTypeButton
              variant="income"
              type="button"
              value="income"
            >
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton
              variant="outcome"
              type="button"
              value="outcome"
            >
              <ArrowCircleUp size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionTypeContainer>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
