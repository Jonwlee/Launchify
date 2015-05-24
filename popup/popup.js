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
	chrome.storage.sync.get('sets', function(result) {
		var sets = result.sets;

		if (typeof result === "undefined" || typeof sets === "undefined") {
			sets = [];
			result = {sets: sets};
			chrome.storage.sync.set({'sets':result}, function() {
				console.log("added");
			});
		}
		//Generate tabs html
		var tabsHTML = new EJS({url: 'tabs.ejs'}).render(result);
		
		//Insert into page
		$("#content").html(tabsHTML);
	});

	//
});

function launchify () { 

}

// document.getElementById('content').addEventListener('onLoad', #tabs );

// document.getElementById('launchbutt').addEventListener('onClick', launchify);