from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

API_KEY = "720007f5cf7095de7cbf19cb694faffa"  # Movie API key (TMDB or others)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/movies')
def movies():
    url = f"https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&language=en-US&page=1"
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
