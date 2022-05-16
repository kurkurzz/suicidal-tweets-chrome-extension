# Suicidal Tweets Detector

A continuation to [suicidal text classification project](https://github.com/kurkurzz/suicidal-text-classification). Will change potential suicidal tweets to red.


`manifest.json` is the configuration for the chrome extension

`main.js` is the script fo the chrome extension

`backend` folder contains fastapi application that serves the inferencing model. It is deployed on Heroku (http://suicide-classification.byhafiz.com/classify?text=some_text)

## Steps to Reproduce

1. Have `Python` installed and run ```pip install -r requirements.txt```
1. For backend, Run ```uvicorn backend.main:app --reload```
1. For extension, go to `chrome://extensions/` and enable `Developer Mode`. Click `Load Unpacked` and select this directory.
1. Refresh Twitter and Done!