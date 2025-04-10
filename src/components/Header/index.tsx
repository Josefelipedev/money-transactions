import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './styles.ts';
import * as Dialog from '@radix-ui/react-dialog';
import logoIgnite from '../../assets/logo-ignite.svg';
import { NewTransactionModal } from '../NewTransactionModal';
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIgnite} alt="logo ignite" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
