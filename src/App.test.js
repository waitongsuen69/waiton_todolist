import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App component', () => {
  test('adds a new task when the Add Task button is clicked', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('Add new task');
    const buttonElement = screen.getByText('Add');

    // Simulate user typing a new task into the input field
    fireEvent.change(inputElement, { target: { value: 'Add a testing task' } });

    // Simulate clicking the 'Add Task' button
    fireEvent.click(buttonElement);

    // Check if the new task was added to the list
    const addedTask = screen.getByText('Add a testing task');
    expect(addedTask).toBeInTheDocument();
  });
});