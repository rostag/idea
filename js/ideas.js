/*
	Ideas Rating 
	November 18, 2015

	Sort

	Recent ideas
	Ideas rated by points
	Other ideas
*/

'use strict';

var ideas = [];

function getIdea() {
	var idea = {
		name: 'Idea ' + Math.round(Math.random() * 100),
		dateCreated: new Date(),
		dateUpdated: new Date(),
		rating: Math.round(Math.random() * 100),
		link: 'http://'
	};
	console.log(idea);
	return idea;
}

function generateRandomIdeas(num) {
	var ideas = [];
	for (var i = num - 1; i >= 0; i--) {
		ideas.push(getIdea());
	}
	return ideas;
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

	var el = document.getElementsByClassName('ideas-tbody')[0];
	
	for (var idx=0; idx<ideas.length; idx++) {
		var i = ideas[idx];
		var html = ['<tr>',
			'<td>', idx, '</td>',
			'<td><a href=', i.link, '>', i.name, '</a></td>',
			'<td>', i.rating, '</td>',
			'<td>', i.dateCreated.toDateString(), '</td>',
			'<td>', i.dateUpdated.toDateString(), '</td>',
			'</tr>'
		].join('');
		
		var tr = document.createElement('tr');

		tr.innerHTML = html;
		el.appendChild( tr );
	}
}

var ideas = generateRandomIdeas(30);
console.log(ideas);

renderToHtml();