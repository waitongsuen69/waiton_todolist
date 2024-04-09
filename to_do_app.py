from flask import Flask, render_template

app = Flask(__name__)

tasks = [
    {'id': 1, 'title': 'Do laundry', 'complete': False},
    {'id': 2, 'title': 'Learn Flask', 'complete': True},
    {'id': 3, 'title': 'Read a book', 'complete': False}
]

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

if __name__ == '__main__':
    app.run(debug=True)