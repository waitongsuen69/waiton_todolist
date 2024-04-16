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
  test('finish/not finish task test', () => {
    render(<App />);
    var first_check_box = screen.getAllByRole('checkbox')[0];
    
    // expect(first_check_box.checked).toBe(false);
    var first_task = screen.getByText('Learn React');
    expect(first_task).toHaveStyle('textDecoration: none');
    expect(first_check_box.checked).toBeFalsy();

    fireEvent.click(first_check_box);
    
    // expect(first_check_box.checked).toBe(true);
    expect(first_check_box.checked).toBeTruthy();
    var first_task = screen.getByText('Learn React');
    expect(first_task).toHaveStyle('textDecoration: line-through');

    var first_check_box = screen.getAllByRole('checkbox')[0];
    fireEvent.click(first_check_box);

    // expect(first_check_box.checked).toBe(false);
    expect(first_check_box.checked).toBeFalsy();
    var first_task = screen.getByText('Learn React');
    expect(first_task).toHaveStyle('textDecoration: none');

  });
});

