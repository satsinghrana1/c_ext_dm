var domain     = "https://app.dropmarket.net/";
var dir    	   = "app/";
	subdomain  = 0 // change to 0 if live or directly pointed to domain
var urlPath    = domain;
if(subdomain){
	urlPath = domain+dir
}






var doc  = document;	
var body = doc.body;	

//ADD THE CSS OF EXTENSION...
var css  = '';
	css += '#dropmarket-floating-icon {position: fixed;top: 25px;right: 25px;width: 50px;height: 50px;z-index: 500000;box-shadow: 0 5px 10px #0505056b;border-radius: 50%;}';
	css += '.floating-icon-img{width: 50px;height: 50px;border-radius: 50%;}';
	css += '#dropmarket-floating-icon:hover{opacity:1;cursor:pointer}';
	css += 'div#product-importing-notify {position: fixed;top: 25px;right: 21px;z-index: 500000;    box-sizing: border-box;border-radius: 2px;background-color: #ffffff;box-shadow: 0 1px 4px 0 rgba(27, 37, 48, 0.4);padding: 10px;width: 260px;}';
	css += '.notifybox .loading-imgHolder {float: left;width: 40px;height: 40px;margin-right: 10px; overflow: hidden;}';
	css += '.notifybox p {font-size: 12px;color: #26c1c9;text-transform: uppercase;margin-bottom: 7px; margin-top: 0px; line-height: 1.3; font-family: "Roboto", sans-serif;}';
	css += '.img-responsive{width:40px}';
	css += '.notifybox .crossBtn {color: #df1857;font-size: 12px;position: absolute;right: 7px;top: 5px;cursor: pointer;}';
	css += '.notifybox .pro-detail {overflow: hidden;padding-left: 0px;line-height: 17px;}';
	css += '.notifybox .pro-detail span {font-family: "Roboto", sans-serif;font-size: 12px;line-height: 1.67;text-align: left;color: #181f26;display: block !important;display: -webkit-box !important; max-width: 100% !important; height: 34px !important;line-height: 1.38; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden !important;text-overflow: ellipsis !important; white-space: initial !important;}';



   	head  = doc.head || doc.getElementsByTagName('head')[0],
    	
    style 	   = doc.createElement('style');
	style.type = 'text/css';
    
    fontawsome 	    = doc.createElement('link');
    fontawsome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css';
	fontawsome.rel  = 'stylesheet';

	googlefont 	    = doc.createElement('link');
    googlefont.href = 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900';
	googlefont.rel  = 'stylesheet';
		
		
	if (style.styleSheet){
		// This is required for IE8 and below.
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	head.appendChild(googlefont);
	head.appendChild(fontawsome);
	head.appendChild(style);

	window.addEventListener("load", pageFullyLoaded, false);

	function pageFullyLoaded(e) {
		
	
		
		
		
		alert( chrome.i18n.getMessage("extensionName") );
		
		
		

		var dropmarketIcon    = doc.createElement("div"); 
		    dropmarketIcon.id = "dropmarket-floating-icon";
		    dropmarketIcon.style  = ""; 
		    
		    body.appendChild(dropmarketIcon);

		var html  = "";
			html += "<span id='import-product-floating-btn'>";
				html += "<img class='floating-icon-img' src='data:image/png;base64,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'>";
			html += "</span>";

	    // WHEN PAGE IS FULLY LOADED.
		
		doc.getElementById('dropmarket-floating-icon').innerHTML = html;		
		
	
		
		var item_ids = get_cart_item_ids();
		
		console.log('item_ids : ',item_ids);
		
		
		// setTimeout(function(){
		// 	// ajax call to delete the cart items.
		// 	var status = delete_the_cart_items(item_ids);
		// 	if (status=='empty_cart') {
		// 		add_to_cart_items();
		// 	}
		// },2000);
		
		
		// New order page patch.

		function get_cart_item_ids(){
			
			//Get all the cart item ids.

			var item_ids = [];
			var url = "https://shoppingcart.aliexpress.com/api/1.0/cart.do";
				
			var xhttp = new XMLHttpRequest();
			
				xhttp.onreadystatechange = function() {

					if (this.readyState == 4 && this.status == 200) {

						var data = JSON.parse(this.response);
						
						var products_in_cart = data.captain.quantity;
						
						if (products_in_cart>0) {				

							
							$.each(data.stores, function(indexStore,dataStore){      		

								$.each(dataStore.storeList, function(indexstoreList,datastoreList){

									$.each(datastoreList.products, function(indexdatastoreListproducts,datastoreListproducts){

										item_ids.push(datastoreListproducts.itemId);
										
									});
								});
							});

						}
						
					}
				};
				  
				xhttp.open("GET", "https://shoppingcart.aliexpress.com/api/1.0/cart.do",true);
				xhttp.setRequestHeader('content-encoding' , 'gzip');
				xhttp.setRequestHeader('content-type', 'application/json;charset=UTF-8');	
				  
				xhttp.send();
				return item_ids;
		}
		// Get the csrf token
 
		function parse_the_csrf_token(){
			var crs =  null;				
			var e = !0,
			t = !1,
			r = void 0;

			for (var n, o = this.document.body.querySelectorAll("script")[Symbol.iterator](); !(e = (n = o.next()).done); e = !0) 
			{
			    var i = n.value, a = i.innerText.match(/\._csrf_token_\s=\s'(\w+)';/);			    
			    if (null !== a) {
			    	crs =  a[1]
			    }
			}			
			return crs;	
		}

		function delete_the_cart_items(item_ids){
			console.log('items to be deleted :', item_ids);
			
			return
			
			if (item_ids.length == 0) {
				console.log('Cart is empty. Go for add to cart');
				return 'empty_cart';
			}
			// Get the _csrf_token_			
			var token = parse_the_csrf_token();			
			
			var items_data = [];
			
			$.each(item_ids, function(i,d){
				items_data.push({itemId : d, quantity:0});
			});

			var prm = '{"updates":'+JSON.stringify(items_data)+',"action":"DELETE_ITEMS","selected":"","_csrf_token_":"'+token+'"}';
			var url = "https://shoppingcart.aliexpress.com/api/1.0/cart.do";
			var xhttp = new XMLHttpRequest();  
				xhttp.open('POST', url, true);
				//Send the proper header information along with the request
				xhttp.setRequestHeader('Content-type', 'application/json');
				xhttp.onreadystatechange = function() {
				    if(xhttp.readyState == 4 && xhttp.status == 200) {
				        console.log('Post request response : ',xhttp.responseText);
				        window.location.reload();
				    }
				}
				xhttp.send(prm);
		}
		
		function add_to_cart_items(){
			console.log('Add to cart...->');
		}

	}
	
	


	
	
	
	


var addButton = doc.getElementById('import-product-floating-btn');

	/*
		addButton.onclick = function(){

			var productImageSrc = doc.querySelector(".ui-image-viewer-thumb-frame img").src;
			
			var productTitle    = doc.getElementsByClassName('product-name')[0].innerHTML;

			console.log(doc.getElementsByClassName('product-name'));
			console.log(doc.getElementsByClassName('product-name')[0]);
			console.log(productTitle);

			importingHtml = '<div class="notifybox">';
				importingHtml += '<span class="closeNotify crossBtn">';
					importingHtml += '<i class="fa fa-times"></i>';
				importingHtml += '</span>';
				importingHtml += '<p class="importing-message"><i class="fa fa-spinner fa-spin" style="font-size:15px"></i> IMPORTING PRODUCT</p>';
				importingHtml += '<div class="loading-imgHolder">';
					importingHtml += '<img class="importing-product-img img-responsive" src="'+productImageSrc+'" />';
				importingHtml += '</div>';
				importingHtml += '<div class="pro-detail">';
					importingHtml += '<span class="loading-product-title">'+productTitle.substring(0, 60)+'...</span>';
				importingHtml += '</div>';
			importingHtml += '</div>';


			var notify    = doc.createElement("div"); 
			    notify.id = "product-importing-notify";

			    body.appendChild(notify);
			    notify.innerHTML = importingHtml;

			    var closeNotifyBtn = doc.getElementsByClassName('crossBtn');


			    closeNotifyBtn[0].onclick = function(){
			    	var element = document.getElementById("product-importing-notify");element.parentNode.removeChild(element);
			    }


				// var productUrl = window.location.href;
				// var pageData = document.getElementsByClassName("store-detail-bd")[0].innerHTML;

				var markup = document.getElementsByTagName("body");

				console.log(markup[0].innerHTML);




				// return;

					chrome.storage.sync.get("installId", (items) => {

						var installId = items["installId"];



						if(installId){
							
							var data = { installId : installId, productData : markup };

							console.log(data);

							var xmlhttp = new XMLHttpRequest();
								// url  	= encodeURIComponent(productUrl);


								xmlhttp.open("POST", urlPath+"new-crawling.php", true);
								
								// xmlhttp.setRequestHeader("Content-Type", "application/json");

								// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
								// xmlhttp.open("POST", "/json-handler");


								xmlhttp.onreadystatechange = function() {

									if (xmlhttp.readyState == XMLHttpRequest.DONE) {	// XMLHttpRequest.DONE == 4
										
										console.log(xmlhttp);

										if (xmlhttp.status == 200) {

											if (xmlhttp.responseText) {
												var res = JSON.parse(xmlhttp.responseText);

												console.log(res);


												if (res.success==0) {

													doc.getElementsByClassName("importing-message")[0].innerHTML 	 = "<span style='color: #ca0673;font-weight: bold;'>Error!.</span>";
													doc.getElementsByClassName("loading-product-title")[0].innerHTML = res.message;

												}
												if (res.success==1) {

													doc.getElementsByClassName("importing-message")[0].innerHTML 	 = "Success!.";
													doc.getElementsByClassName("loading-product-title")[0].innerHTML = res.message;

												}


											}else{
												doc.getElementsByClassName("importing-message")[0].innerHTML 	 = "<span style='color: #ca0673;font-weight: bold;'>Error!.</span>";
												doc.getElementsByClassName("loading-product-title")[0].innerHTML = "Please try again.";
											}
										}
										else{

											doc.getElementsByClassName("importing-message")[0].innerHTML 	 = "<span style='color: #ca0673;font-weight: bold;'>Error!.</span>";
											doc.getElementsByClassName("loading-product-title")[0].innerHTML = "Please try again.";
										}
									

									}
								};
							xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
							xmlhttp.send(JSON.stringify(data));
						}
						else{

							var msg = "Please login to <a href='http://app.dropmarket.net' target='_blank'>app.dropmarket.net</a> to import this product.";

								doc.getElementsByClassName("importing-message")[0].innerHTML ="Login required";
								doc.getElementsByClassName("loading-product-title")[0].innerHTML = msg;
						}
					});
		}

	*/
		
$(function(){

	$(document).on("click", ".floating-icon-img", function(){

		// $("#dropmarket-floating-icon").hide();
		
		
		
	
		var installId = 0;
		var vendor 	  = 0;
		var url 	  = window.location.href;
		var markup 	  = $(document)[0].body.innerHTML;

		var productImageSrc = "";
		var productTitle    = "";

		var	isImportable = true;

		var variantImagesStatus = 0;

		
		if(url.indexOf("aliexpress") != -1){
			
			vendor = "aliexpress";
			productImageSrc = $("#j-image-thumb-list img").attr('src');				
			productTitle    = $(".product-name").text();
			
			

			// check for the variant images...

			variantImagesStatus = $("#j-product-info-sku .item-sku-image").length;

			variantsData 		= {};
			
			/*
			 * GET THE VIEW VERSION. V1 = OLD VERSION, V2 = NEW STORE VIEW
			 */
			 
			/*
			 * V1 PRICE ID = 'j-sku-discount-price'
			 * V2 PRICE class = 'product-price-value'
			 */
			var view_version = null;
			var v1_price_element = $('#j-sku-discount-price');
			var v2_price_element = $('.product-price-value');
			
			
			
			
			if (v1_price_element.length > 0) {
				
				view_version = 'v1';
				
			} else if(v2_price_element.length > 0){
				
				view_version = 'v2';	
						
			} else {
				
				view_version = 'unknown_view';
				
			}
			
			
			

			
			console.log('Product view VERSION : ',view_version);
			
			// return;
			
			
		}else{

			vendor = "dhgate";

			productImageSrc = $(".bimg-inner img").attr('src');
			productTitle    = $(".hinfo h1").text();

			if(!productTitle){
				productTitle    = $(".proname h2").text();
			}
			
			if ($("#defaultQuantity").val() > 1) {

				importingHtml = '<div class="notifybox">';
					importingHtml += '<span class="closeNotify crossBtn">';
						importingHtml += '<i class="fa fa-times"></i>';
					importingHtml += '</span>';
					importingHtml += '<p class="importing-message"><span style="color: #ca0673;font-weight: bold;">Error!</span></p>';
					importingHtml += '<div class="loading-imgHolder">';
						importingHtml += '<img class="importing-product-img img-responsive" src="'+productImageSrc+'" />';
					importingHtml += '</div>';
					importingHtml += '<div class="pro-detail">';
						importingHtml += '<span class="loading-product-title">Only products with minimum order quantity of 1 can be imported.</span>';
					importingHtml += '</div>';
				importingHtml += '</div>';

				$(".body-space").append("<div id='product-importing-notify'>"+importingHtml+"</div>");

				return;
			}

		}

		console.log("Make ajax call");

		// return;

		chrome.storage.sync.get("installId", (items) => {

			installId = items["installId"];

			console.log("chrome.storage items are : ",items);

			console.log('Install id is :'+installId);


			if (installId == undefined || installId == 'null' ) {

				importingHtml = '<div class="notifybox">';
					importingHtml += '<span class="closeNotify crossBtn">';
						importingHtml += '<i class="fa fa-times"></i>';
					importingHtml += '</span>';
					importingHtml += '<p class="importing-message"><i class="fa fa-spinner fa-spin" style="font-size:15px"></i> IMPORTING PRODUCT</p>';
					importingHtml += '<div class="loading-imgHolder">';
						importingHtml += '<img class="importing-product-img img-responsive" src="'+productImageSrc+'" />';
					importingHtml += '</div>';
					importingHtml += '<div class="pro-detail">';
						importingHtml += '<span class="loading-product-title">'+productTitle+'</span>';
					importingHtml += '</div>';
				importingHtml += '</div>';

    			$("body").append("<div id='product-importing-notify'>"+importingHtml+"</div>");
    			$(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
				$(".loading-product-title").text('Please login to dropmarket.');
				
				return;
			}

			

			var data = { html 				 : markup, 
						 vendor 			 : vendor, 
						 installId 			 : installId,
						 product_url 		 : url,
						 mainImage   		 : productImageSrc,
						 variantImagesStatus : variantImagesStatus
						};
						
			/*
			 * VIEW VERSION CHECK FOR ALIEXPRESS PRODUCTS
			 */
			 
			if( vendor == 'aliexpress'){
				
				if (view_version == 'v2') {
					
					var url_parts = url.split('item');
					
					console.log( url_parts );
					
					productImageSrc = $(".images-view-list img").eq(0).attr('src');				
					
					
					var modified_url = url_parts[0]+'item/product-title'+url_parts[1];
					
					console.log(modified_url);
					
					data = { html 				 : null, 
							 vendor 			 : vendor, 
							 installId 			 : installId,
							 product_url 		 : modified_url,
							 mainImage   		 : productImageSrc.replace('_50x50.jpg', ''),
							 variantImagesStatus : null,
							 server_crawling_needed : 1
							};
							
						productTitle    = $(".product-title").text();
					
				}
				
			}

			console.log("Before ajax call");
			console.log(data);
			
			// return;
			

			$.ajax({url:"//app.dropmarket.net/aliRequests/new-crawling.php",
					method:"POST",
					data: data,
					beforeSend :function(){

						console.log('show the pop up of product import');

						importingHtml = '<div class="notifybox">';
							importingHtml += '<span class="closeNotify crossBtn">';
								importingHtml += '<i class="fa fa-times"></i>';
							importingHtml += '</span>';
							importingHtml += '<p class="importing-message"><i class="fa fa-spinner fa-spin" style="font-size:15px"></i> IMPORTING PRODUCT</p>';
							importingHtml += '<div class="loading-imgHolder">';
								importingHtml += '<img class="importing-product-img img-responsive" src="'+productImageSrc+'" />';
							importingHtml += '</div>';
							importingHtml += '<div class="pro-detail">';
								importingHtml += '<span class="loading-product-title">'+productTitle+'</span>';
							importingHtml += '</div>';
						importingHtml += '</div>';

		    			$("body").append("<div id='product-importing-notify'>"+importingHtml+"</div>");
					},
					success: function(res){

						console.log('Inside the success');
						
						if (res == "already exist in importlist") {
							$(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
							$(".loading-product-title").text('The product is already in your import list.');

						}

						if (res == "already exist in store") {
							$(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
							$(".loading-product-title").text('The product is already in your Store.');

						}

						if (res == "success") {
							$(".importing-message").html('<i class="fa fa-check" style="font-size:15px;margin-right: 3px;float: left;"></i>PRODUCT SUCCESSFULLY IMPORTED');
							$(".loading-product-title").text(productTitle);
						}

						if (res == "Max product import reached") {
							$(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
							$(".loading-product-title").text('You have reached the max of 500 products in your Import List.');
						}
					},
					error: function(jqXHR, textStatus, errorThrown){

						console.log('Inside the error');
						console.log(jqXHR);
						console.log(textStatus);
						console.log(errorThrown);

						$(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
						$(".loading-product-title").text('Somthing went wrong please try again!');				

					}
			});
		});
	})
    
    $(document).on("click", ".crossBtn", function(){
	    $("#product-importing-notify").remove();
		$("#dropmarket-floating-icon").show();
	});
});









