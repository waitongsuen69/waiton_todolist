import unittest
from to_do_app import app

class ToDoListTest(unittest.TestCase):
    def setUp(self):
        app.testing = True
        self.client = app.test_client()
        self.initial_tasks = self.client.get('/get_tasks')

    def test_index(self):
        # Test the index route
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('waiton to do list', response.get_data(as_text=True))
    
    def AddTaskTest(self):
        response = self.client.get('/') 
        self.client.post('/add_new_task', data={'title': 'tasking input'}, follow_redirects=True)
        self.assertEqual('tasking input', response.get_data(as_text=True))

    def test_task_addition(self):
            # Task details to add
            new_task_title = 'New Task'
            new_task = {'title': new_task_title, 'completed': False}

            # Adding a new task
            self.client.post('/add_new_task', data=new_task, follow_redirects=True)

            # Check if new task is in the tasks list
            self.assertTrue(any(task['title'] == new_task_title and task['completed'] == False for task in self.client.get('/get_tasks',{'task_title':new_task_title})), "Task was not added correctly")

if __name__ == '__main__':
    unittest.main()