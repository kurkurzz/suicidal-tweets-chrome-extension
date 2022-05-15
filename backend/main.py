from fastapi import FastAPI, status, Request
from fastapi.middleware.cors import CORSMiddleware
import spacy


app = FastAPI()

origins = [
    "https://twitter.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

nlp = spacy.load('backend/model-best')

@app.get('/', status_code=status.HTTP_200_OK)
async def ping(request: Request):
	return {
		'status': 'success',
		'made by': 'hafiz <3'
	}

@app.get('/classify', status_code=status.HTTP_200_OK)
async def ping(request: Request, text: str = None):
	if text:
		doc = nlp(text)
		result = 'non-suicidal'
		if doc.cats['POSITIVE'] >= 0.5:
			result = 'suicidal'
			
		return {
				'text': text,
				'result': result
			}