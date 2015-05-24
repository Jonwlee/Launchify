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

	//Load page
	loadPage();
});

function loadPage() {
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

		//Add event handler
		console.log($("#addSetButton"));
		$("#addSetButton a").off("click");
		$("#addSetButton a").click(newSetClick);
	});
}

function newSetClick () {
	console.log("click");
	var newName = promt("Please enter name for set", "Social Networks");
	createSet(newName, function() {
		loadPage();
	});
}

function createSet (name, callback) { 
	chrome.storage.sync.get('sets', function(result){
		var sets = result.sets;

		//Init sets if undefined
		if (typeof sets === "undefined") 
			sets = [];

		//Add new set to sets
		sets.push({name:name, sites:[]});

		//Save sets
		result = {sets: sets};
		chrome.storage.sync.set({'sets':result}, callback);
	});
}

// document.getElementById('content').addEventListener('onLoad', #tabs );

// document.getElementById('launchbutt').addEventListener('onClick', launchify);