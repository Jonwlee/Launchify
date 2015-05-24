var launchStorageKey = "launches";
// [{
// 	"name": "Step one"
// 	"sites": ["twitter.com","google.com"]
// },
// {
// 	"name": "Step one"
// 	"sites": ["twitter.com","google.com"]
// }]

$(document).ready(function () {
	$('#tabs').tab();

	//Retrieve data
	chrome.storage.sync.get(launchStorageKey, function(items) {
		if (typeof items.sets === "undefined") {
			items.sets = [];
			chrome.storage.set({launchStorageKey: items.sets});
			
		};
		console.log(sets);
	});

});

function launchify () { 

}

// document.getElementById('content').addEventListener('onLoad', #tabs );

// document.getElementById('launchbutt').addEventListener('onClick', launchify);