from flask import Flask, render_template
import folium
app = Flask(__name__)

@app.route('/')
def Base():
    map = folium.Map(
        location=[7.12539, -73.1198], zoom_start=14
        )
    return map._repr_html_()
def index():
    return reder_template('index.html')
if __name__ == '__main__':
    app.run(port=3000, debug=True)