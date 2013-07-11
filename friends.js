function init() {
	loadFriends();
}

function loadFriends() {
	console.log('Loading friends');
	
	var req = opensocial.newDataRequest();
	req.add(req.newFetchPersonRequest('VIEWER'), 'viewer');
	req.add(req.newFetchPeopleRequest('VIEWER_FRIENDS'), 'viewerFriends');
	
	console.log('Sending data request');
	req.send(onLoadFriends);
}

function onLoadFriends(data) {
	var viewer = data.get('viewer').getData();
	var viewerFriends = data.get('viewerFriends').getData();
	
	console.log('Retreived data: ' + viewerFriends);
	
	html = new Array();
	html.push('<ul>');
	viewerFriends.each(function(person) {
		html.push('<li>' + person.getDisplayName() + "</li>");
	});
	html.push('</ul>');
	document.getElementById('friends').innerHTML = html.join('');
}

console.log('Started script');