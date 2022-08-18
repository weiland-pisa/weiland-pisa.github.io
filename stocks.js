function insertAllLinks() {
	insertLinks(etfs, 'etfs');
	insertLinks(stocks, 'stocks');
	insertLinks(certificates, 'certificates');
}

function insertLinks(json, tag) {
	//var json = JSON.parse(data);
	for (var idx=json.length-1; idx>=0; idx--){
		var head = document.getElementById(tag);
		var link = document.createElement('a');
		link.setAttribute('href', json[idx].url);
		link.setAttribute('target', '_blank');
		link.setAttribute('class', 'button');
		link.innerHTML = json[idx].name;
		head.parentNode.insertBefore(link, head.nextSibling);
		var lbr = document.createElement('br');
		link.parentNode.insertBefore(lbr, link.nextSibling);
	}
}

window.onload = insertAllLinks;