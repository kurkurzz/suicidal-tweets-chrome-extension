console.log("Initializing suicidal tweets detector!");

// problem with http, need to use https
// backend_url = "http://suicide-classification.byhafiz.com/classify?text="

backend_url = "https://suicidal-chrome-extension.herokuapp.com/classify?text="

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

