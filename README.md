# Suicidal Tweets Detector

A continuation to [suicidal text classification project](https://github.com/kurkurzz/suicidal-text-classification). Will change potential suicidal tweets to red.


`manifest.json` is the configuration for the chrome extension

`main.js` is the script fo the chrome extension

`backend` folder contains fastapi application that serves the inferencing model. It is deployed on Heroku (http://suicide-classification.byhafiz.com/classify?text=some_text)