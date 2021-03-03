import requests
import json

def send_request(strg = None):
    if strg == None:
        body = json.loads(requests.get('http://localhost:3000/casos').text)
    else:
        toGet = f'http://localhost:3000/search?search={strg}'
        print(toGet)
        body = json.loads(requests.get(toGet).text)

    results = body["results"]
    return results
