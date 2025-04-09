import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles.ts';
import { SearchForm } from './components/SearchForm';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td className="deposit">
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Desenvolvimento</td>
              <td>20/01/2022</td>
            </tr>
            <tr>
              <td width="50%">Aluguel</td>
              <td className="withdraw">
                <PriceHighlight variant="outcome"> -R$ 1.000,00</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>20/01/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
