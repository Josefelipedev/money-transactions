import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './styles.ts';
import logoIgnite from '../../assets/logo-ignite.svg';
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIgnite} alt="logo ignite" />
        <NewTransactionButton>Nova Transação </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
