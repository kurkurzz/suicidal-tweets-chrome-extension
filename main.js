console.log("Initializing suicidal tweets detector!");

// problem with http, need to use https
// backend_url = "http://suicide-classification.byhafiz.com/classify?text="

backend_url = "https://suicidal-chrome-extension.herokuapp.com/classify?text="

var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = './style.css';
link.media = 'all';
head.appendChild(link);

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
						const check_label = tweet.getElementsByClassName("depressionLabel")[0]
						if(typeof(check_label) == "undefined" || check_label == null){
							const label = document.createElement("span")
							label.className = "depressionLabel"
							label.innerHTML = "depression"
							tweet.appendChild(label)
						}
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

