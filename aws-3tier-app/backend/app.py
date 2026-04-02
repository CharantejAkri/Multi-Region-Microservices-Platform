from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/users')
def users():
    return jsonify({
        "status": "success",
        "users": [
            {"id": 1, "name": "Charan"},
            {"id": 2, "name": "DevOps User"}
        ]
    })

@app.route('/')
def home():
    return "Backend API Running"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
