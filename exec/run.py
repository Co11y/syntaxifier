import json


def main(sentence):
    outpdata = {
        "sentence": sentence
    }
    # json.dumps also converts strings to unicode-like (\u0000)
    return json.dumps(outpdata)
