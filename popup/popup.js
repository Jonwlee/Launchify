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

	//Dynamically add click handler
	$(document).on('submit', ".form" , handleFormSubmit);
});

function loadPage() {
	chrome.storage.sync.get('sets', function(result) {
		var sets = result.sets;
		console.log(sets);
		//If sets does not exist, create it and push
		if (typeof result === "undefined" || typeof sets === "undefined") {
			sets = [];
			result.sets = sets;

			chrome.storage.sync.set(result, function() {
				console.log("added");
			});
		}

		//Generate tabs html
		console.log(result);
		new EJS({url: 'tabs.ejs'}).update($("#content")[0], {sets:sets});

		//Add event handler for adding set
		var addSetButton = $("#addSetButton");
		addSetButton.off("click");
		addSetButton.click(handleNewSet);

		//event handler for add input button

		var addInputButton = $("#addInputButton");
		addInputButton.off("click");
		addInputButton.click(createInput);

		var addLaunchify = $("#launchbutt");
		addLaunchify.off("click");
		addLaunchify.click(createNewUrlTab);
	});
}

//create new sets
function handleNewSet () {
	var newName = prompt("Please enter name for set", "Social Networks");
	createSet(newName, function() {
		loadPage();
	});
}


function handleFormSubmit (event) {
	console.log("hafjk");
	var inputs = $(this).children("input");

	chrome.storage.sync.get('sets', function(result) {
		var sites = [];
		for (var i = inputs.length - 1; i >= 0; i--) {
			sites.push($(inputs[i]).val());
		};

		var sets = result.sets;
		sets.sites = sites;
		result.sets = sets;
		console.log("gotttt");
		console.log(result);
		chrome.storage.sync.set(result, function() {
			loadPage();
			console.log("added");
		});
	});

	console.log("hey now borasdfasdf");
	event.preventDefault();
	event.stopImmediatePropagation();
}

function createSet (name, callback) { 
	chrome.storage.sync.get('sets', function(result){
		var sets = result.sets;	
		console.log("creating new set");
		console.log(sets);

		//Init sets if undefined
		if (typeof sets === "undefined") {
			sets = [];
			console.log("undef")
		}

		//Add new set to sets
		var set = new Set(name);
		sets.push(set);
		console.log(sets);

		//Save sets
		result.sets = sets;
		chrome.storage.sync.set(result, callback);
	});
}

function Set (name) {
	this.name = name;
	this.sites = [];
}

function createInput () { 


		//Init sets if undefined
	

var input = document.createElement("input");
input.type = "text";
input.className = "siteUrl"; // set the CSS class
content.appendChild(input);
input.placeholder = "Add site url"; // put it into the DOM

} 



function createNewUrlTab(){
	var url = document.getElementById('siteUrl').value ;
chrome.tabs.create(
	
	{'url': url }
	)
console.log("new url mang");

} ;




// document.getElementById('content').addEventListener('onLoad', #tabs );

// document.getElementById('launchbutt').addEventListener('onClick', launchify);
