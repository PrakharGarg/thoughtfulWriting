import spacy
import json
from flask import Flask, request
app = Flask(__name__)

nlp = spacy.load("en_core_web_sm")


@app.route('/api', methods=['GET', 'POST'])
def analyze():
    text_data = request.json
    # print(text_data)
    doc = nlp(text_data)
    # print("Noun phrases:", [chunk.text for chunk in doc.noun_chunks])
    nouns = list([(str(i)) for i in doc.ents])
    print(nouns)

    # Analyze syntax
    return json.dumps(nouns)


if __name__ == '__main__':
    app.run(debug=True)
