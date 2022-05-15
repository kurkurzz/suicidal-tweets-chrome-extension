console.log("News credibility extension started !!");
backend_url = "http://127.0.0.1:8000/classify?text="

function checkTweets() {
	let tweets = document.querySelectorAll("article");

	tweets.forEach(function (tweet) {
		try {
			text = tweet.querySelector('[data-testid="tweetText"]').innerText;
			fetch( backend_url + text )
				.then(async r => await r.json())
				.then((data) => {  
					console.log(data)      
					if (data["result"] == "suicidal"){
						tweet.setAttribute(
								"style",
								"background-color: rgb(255, 134, 134);"
							);
					}
				})
				.catch(e=>console.error(e));
		}
		catch(err) {
			console.log(err);
		}
		
	
	})
}

let timer = setInterval(checkTweets, 2000);

