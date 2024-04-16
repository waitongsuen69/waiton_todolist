import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Task management test', () => {
  test('Add task test', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('Add new task');
    var buttonElement = screen.getByText('Add');

    // Simulate user typing a new task into the input field
    fireEvent.change(inputElement, { target: { value: 'Add a testing task' } });

    // Simulate clicking the 'Add Task' button
    fireEvent.click(buttonElement);

    // Check if the new task was added to the list
    const addedTask = screen.getByText('Add a testing task');
    expect(addedTask).toBeInTheDocument();
  });

  test('delete task test', () => {
    render(<App />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    var buttonElement = screen.getAllByText('Delete')[0];

    // Simulate clicking the 'Add Task' button
    fireEvent.click(buttonElement);

    // Check that the task is no longer in the document
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();

  });
});

