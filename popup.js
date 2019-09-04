var domain = "http://app.dropmarket.net/";
var dir    = "app/";
subdomain  = 0 // change to 0 if live or directly pointed to domain
var urlPath = domain;
if(subdomain){
	urlPath = domain+dir
}

curUrl = "";

function getCurrentTabUrl(callback) {
	// Query filter to be passed to chrome.tabs.query - see
	// https://developer.chrome.com/extensions/tabs#method-query
	var queryInfo = {
		active: true,
		currentWindow: true
	};

	chrome.tabs.query(queryInfo, (tabs) => {

		var tab = tabs[0];


		var url = tab.url;

		// tab.url is only available if the "activeTab" permission is declared.
		// If you want to see the URL of other tabs (e.g. after removing active:true
		// from |queryInfo|), then the "tabs" permission is required to see their
		// "url" properties.
		console.assert(typeof url == 'string', 'tab.url should be a string');

		callback(url);
	});
	// Most methods of the Chrome extension APIs are asynchronous. This means that
	// you CANNOT do something like this:
	//
	// var url;
	// chrome.tabs.query(queryInfo, (tabs) => {
	//   url = tabs[0].url;
	// });
	// alert(url); // Shows "undefined", because chrome.tabs.query is async.
}




// function hideAll(){
// 	var x = document.getElementsByClassName("hidden");
// 	for(i = 0 ; i<x.length; i++){
// 		x[i].style.display = "none";
// 	}
// }

document.addEventListener('DOMContentLoaded', () => {
	getCurrentTabUrl((url) => {
	// Get the current URL of website
		chrome.tabs.query({active : true, currentWindow: true}, function (tabs) {
			var str = curUrl = tabs[0].url;


			console.log(str)
			//var urlArr = ["aliexpress.com/item","aliexpress.com/store/product","dhgate.com/product","dhgate.com/store/product"];

			if(str.indexOf('dhgate.com/product') != -1 || str.indexOf('dhgate.com/store/product') != -1){

				chrome.tabs.executeScript(null,{
					code: "document.getElementById('minQuantity').value"
				}, function (minQuantity) {


						var x = document.getElementById("otherPages");

						if(minQuantity == 1)
						{
							x = document.getElementById("productPage");
						}
						else{
							x = document.getElementById("minimumOrder");
						}

						x.style.display = "block";

				});

			}
			else{

				var x = document.getElementById("otherPages");

				if(str.indexOf('aliexpress.com/item') != -1 || str.indexOf('aliexpress.com/store/product') != -1){

					x = document.getElementById("productPage");

				}
				else{

					x = document.getElementById("otherPages");

				}
				x.style.display = "block";
			}
		});
	});
});



$(function(){

	var installId = 0;
	var vendor 	  = 0;
	var url 	  = '';
	var markup 	  = $(document)[0].body.innerHTML;

	var productImageSrc = "";
	var productTitle    = "";



	$(".addProductBut").click(function(){

		chrome.tabs.query({active : true, currentWindow: true}, function (tabs) {

			url = tabs[0].url;
			alert(url)

			console.log(tabs[0])
		});


		chrome.tabs.getCurrent(function(tab) {
		    alert(tab.title);
		    console.log(tab);
		});



	});




});
