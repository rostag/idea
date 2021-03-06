/*
	Ideas Rating 
	November 18, 2015

	Sort

	Recent ideas
	Ideas rated by points
	Other ideas
*/

var idea = {
	aim: aim
	date: date,
	rating: rating
}

function getIdea() {
	var idea = {
		name: 'Idea ' + Math.random() * 100,
		dateCreated: new Date(),
		dateUpdated: new Date(),
		rating: Math.random() * 100,
		link: 'http://'
	}
	console.log(idea);
	return idea;
}

function generateRandomIdeas(num) {
	for (var i = num - 1; i >= 0; i--) {
		ideas.push(getIdea());
	};
}

/* Sort

	Recent ideas
	Ideas rated by points
	Other ideas (1-100)
*/
function sortIdeas(ideas) {
	// /Users/rost/Library/Mobile Documents/com~apple~CloudDocs/BrainMade/ux/ideas/git/idea/app.js
}

function renderToHtml() {

	var el = document.getElementByClassName('ideas-tbody');
	
	for (var idx=0; idx<ideas.length; idx++) {
		var i = ideas[idx];
		var html = ['<tr>',
			'<td>', i.name, '</td>' +
			'<td>', i.dateCreated, '</td>' +
			'<td>', i.rating, '</td>' +
			'<td>', i.dateUpdated, '</td>' +
			'<td>', i.link, '</td>' +
			'</tr>'
		].join();
		
		var tr = document.createElement('tr');

		tr.innerHtml = html;
		el.appendChild( tr );
	}
}

var ideas = generateRandomIdeas(10);
console.log(ideas);

	