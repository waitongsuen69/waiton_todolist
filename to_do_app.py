from flask import Flask, render_template, request, redirect, url_for
import sys

app = Flask(__name__)

# tasks container
tasks = [
    {"id": 1, "title": "Learn Flask", "completed": False},
    {"id": 2, "title": "Read documentation", "completed": False}
]

# connect html page 
@app.route('/')
def index():
    return render_template('index.html', tasks=tasks )

# add test function 
@app.route('/add_new_task', methods=['POST'] )
def add_new_task():
    if request.form['title']:
        id_num = len(tasks) + 1 if tasks else 1
        new_task = {"id": id_num, "title": request.form['title'], "completed" : False }
        tasks.append(new_task)
    return redirect(url_for('index'))

@app.route('/complete_task/<int:task_id>')
def complete_task(task_id):
    for task in tasks:
        if task['id'] == task_id:
            task['completed'] = True
            break
    return redirect(url_for('index'))

# warning: having bugs
@app.route('/delete_task/<int:task_id>')
def delete_task(task_id):
    for task in tasks:
        if task['id'] == task_id:
            tasks.remove(task)
            break
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)