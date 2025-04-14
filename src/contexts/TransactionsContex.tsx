import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../libs/axios.ts';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: Date;
}
interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    console.log('[ fetchTransactions ] ' + query);
    const url = new URL('http://localhost:3333/transactions');

    if (query) {
      url.searchParams.append('description', query);
    }
    const response = await api.get(`/transactions`, {
      params: {
        _sort: 'createdAt',
        _order: 'asc',
        description: query,
      },
    });
    setTransactions(response.data);
  }, []);
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      try {
        const { description, price, category, type } = data;
        const response = await api.post('/transactions', {
          description,
          price,
          category,
          type,
          createdAt: new Date(),
        });

        setTransactions((state) => [...state, response.data]);
      } catch (e) {
        console.log(e);
      }
    },
    []
  );

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
