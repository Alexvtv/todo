import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';

test('add & remove todo', () => {
  render(<App />);

  //Создание
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'test' } })

  const createBtn = screen.getByTestId('create');
  fireEvent.click(createBtn);

  const todo = screen.getByText(/test/i);

  expect(todo).toBeInTheDocument();

  //Удаление
  const selectBtn = screen.getByTestId('checkmark');
  fireEvent.click(selectBtn);

  const deleteBtn = screen.getByText('Clear completed');
  fireEvent.click(deleteBtn);

  expect(todo).not.toBeInTheDocument();
});

