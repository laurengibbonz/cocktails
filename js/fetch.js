// Tip: update url with your API & API key (if needed)
const url = 'js/cocktails.json';

// Tip: if headers needed, update to fetch(url, urlInit) on line 34
// const urlInit = {
// 	headers: {
// 		"x-rapidapi-key": "e95e6c166dmsh69ad2ab6fea5001p13e801jsn8fa2aabbe830",
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"useQueryString": true
// 	},
// };

function handleErrors(response) {
	console.log(response);
	if(!response.ok) {
		throw (`${response.status}: ${response.statusText}`);
	}
	return response.json();
}

function updateUI(data) {
	console.log(data);
	document.querySelector('#content').innerHTML += `${data[0].cocktail}`;
	// Tip: If data returns API, uncomment code below
	for(let i = 0; i < data.length; i++) {
		document.querySelector('#content').innerHTML += `${data[0].ingredients[i]}`;
	}
}

function failUI(error) {
	console.log(error);
}

fetch(url)
.then(function(response) {
   return handleErrors(response);
})
.then(function(data) {
   return updateUI(data);
})
.catch(function(error) {
   return failUI(error);
});