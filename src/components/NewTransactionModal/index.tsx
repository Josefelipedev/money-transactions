import * as Dialog from '@radix-ui/react-dialog';
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles.ts';
import { ArrowCircleUp, X } from 'phosphor-react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { control, register, handleSubmit } = useForm<NewTransactionFormInputs>(
    {
      resolver: zodResolver(newTransactionFormSchema),
    }
  );

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay className="overlay" />
      <Content className="content">
        \<Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register('description')}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            placeholder="Preço"
            required
          />
          <input
            {...register('category')}
            type="text"
            placeholder="Categoria"
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
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
              );
            }}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
