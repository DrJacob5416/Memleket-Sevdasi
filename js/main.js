fetch("https://free-football-soccer-videos.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e154d0a6e7mshfcf54a6652999ccp18e082jsn7d3dc21d9814",
		"x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com"
	}
})
.then(response =>response.json())
.then(data => {
document.getElementById("video").innerHTML=data[0].embed;
document.getElementById("baslik").innerHTML=data[0].title;
})
.catch(err => {
	console.error(err);
});

