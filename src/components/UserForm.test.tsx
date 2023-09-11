import { getByRole, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('It shows 2 Inputs and a button', () => {
  // Mock function for onUserAdd
  const mockOnUserAdd = jest.fn();

  // Render the component with the required prop
  render(<UserForm onUserAdd={mockOnUserAdd} />);

  //Menipulate the component to find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  //Assertion
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
