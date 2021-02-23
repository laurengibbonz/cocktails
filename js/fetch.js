// Tip: update url with your API & API key (if needed)
const url = 'js/cocktails.json';

function handleErrors(response) {
	console.log(response);
	if(!response.ok) {
		throw (`${response.status}: ${response.statusText}`);
	}
	return response.json();
}

function updateUI(data) {
	console.log(data);
	// Tip: If data returns API, uncomment code below
	for(let i = 0; i < data.length; i++) {
		document.querySelector('#content').innerHTML += `<h1>${data[i].cocktail}<br></h1>`;
		for(let j = 0; j < data[i].ingredients.length; j++) {
			document.querySelector('#content').innerHTML += `${data[i].ingredients[j]} `;
		}
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