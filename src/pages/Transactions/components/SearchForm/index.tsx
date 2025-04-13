import { SearchFormContainer } from './styles.ts';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    // formState: { isSubmitted },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });
  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        {...register('query')}
        type="text"
        placeholder="Busque por transações"
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
