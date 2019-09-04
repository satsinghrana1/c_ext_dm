
chrome.extension.onConnect.addListener(function(port) {

	console.log("Connected .....");

	port.onMessage.addListener(function(msg) {
		 
		var action = msg[0];


		var data_object = { _csrf_token_: msg[1].shipping_address['_csrf_token_'],
							phoneCountry: msg[1]['store_country_code'],
							contactPerson: msg[1].shipping_address['first_name']+' '+msg[1].shipping_address['last_name'],
							mobileNo: msg[1]['store_phone_number'],
							address: msg[1].shipping_address['address1'] ,
							address2: msg[1].shipping_address['address2'] ,
							zip: msg[1].shipping_address['zip'] ,
							country: msg[1].shipping_address['country_code'] ,
							province: msg[1].shipping_address['province'] ,
							city: msg[1].shipping_address['city'] ,
							features: '{"ruPassport":"taxNumber","locale":"en_US"}',
							shipcompany: 'Other',
							useLocalAddress: true
						};

		var str = [];


		for (var p in data_object)
		{
			if (data_object.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent( data_object[p]) );
			}
		}

		var address_details = str.join("&");

		if (action == 'create-aliexpress-address') {

			var ALIEXPRESS_SHIPPING_ADDRESS_URL = 'https://ilogisticsaddress.aliexpress.com/ajaxSaveOrUpdateBuyerAddress.htm';

			var url = ALIEXPRESS_SHIPPING_ADDRESS_URL;
			var xhttp = new XMLHttpRequest();  
				xhttp.open('POST', url, false);
				xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
				xhttp.onreadystatechange = function() {

					if(xhttp.readyState == 4 && xhttp.status == 200) {
						
						console.log('Address create response : ',xhttp.responseText);




						port.postMessage([{ response : xhttp.responseText }]);

					}
				}
			xhttp.send( address_details );

		}
	});
})

