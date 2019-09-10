window.addEventListener("load", pageFullyLoaded, false);

function pageFullyLoaded(){

    $(function() {

        var location = window.location.href;
        var app_url  = 'https://app-stage.dropmarket.net';
        var dm_icon  = 'data:image/png;base64,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';
        var doc      = document;
        var body     = doc.body;
        if (location.indexOf('dropmarket.net')==-1) {
            
            //ADD THE CSS OF EXTENSION...
            var doc  = document;	
            var body = doc.body;
            
            var css  = '';
                css += '.dm-copy-s-a{color:#aaaaaa}.dm-copy-s-a:hover{color:#000!important}#dropmarket-floating-icon {position: fixed;top: 25px;right: 25px;width: 50px;height: 50px;z-index: 500000;box-shadow: 0 5px 10px #0505056b;border-radius: 50%;}.floating-icon-img{width: 50px;height: 50px;border-radius: 50%;}#dropmarket-floating-icon:hover{opacity:1;cursor:pointer}div#product-importing-notify {position: fixed;top: 25px;right: 21px;z-index: 500000;    box-sizing: border-box;border-radius: 2px;background-color: #ffffff;box-shadow: 0 1px 4px 0 rgba(27, 37, 48, 0.4);padding: 10px;width: 260px;}.notifybox .loading-imgHolder {float: left;width: 40px;height: 40px;margin-right: 10px; overflow: hidden;}.notifybox p {font-size: 12px;color: #26c1c9;text-transform: uppercase;margin-bottom: 7px; margin-top: 0px; line-height: 1.3; font-family: "Roboto", sans-serif;}.img-responsive{width:40px}.notifybox .crossBtn {color: #df1857;font-size: 12px;position: absolute;right: 7px;top: 5px;cursor: pointer;}.notifybox .pro-detail {overflow: hidden;padding-left: 0px;line-height: 17px;}.notifybox .pro-detail span {font-family: "Roboto", sans-serif;font-size: 12px;line-height: 1.67;text-align: left;color: #181f26;display: block !important;display: -webkit-box !important; max-width: 100% !important; height: 34px !important;line-height: 1.38; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden !important;text-overflow: ellipsis !important; white-space: initial !important;}';
            
            var style 	   = doc.createElement('style');
                style.type = 'text/css';
            
            var fontawsome      = doc.createElement('link');
                fontawsome.rel  = 'stylesheet';
                fontawsome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css';
            
            var googlefont      = doc.createElement('link');
                googlefont.href = 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900';
                googlefont.rel  = 'stylesheet';
        
            if (style.styleSheet){
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head = doc.head || doc.getElementsByTagName('head')[0];
            head.appendChild(googlefont);
            head.appendChild(fontawsome);
            head.appendChild(style);

        }

        // Add aliexpress import icon.
        if (location.indexOf('aliexpress.com/item/') > -1) {
            
            var product_image     = $('.images-view-wrap .images-view-list li img').eq(0).attr('src').replace('_50x50.jpg','');
            var no_variant        = 0;            
            var dropmarketIcon    = doc.createElement("div");            
            var html              = "";
            dropmarketIcon.id     = "dropmarket-floating-icon";
            dropmarketIcon.style  = ""; 
            
            body.appendChild(dropmarketIcon);

            html += "<span id='import-product-floating-btn'><img class='floating-icon-img' src='"+dm_icon+"'></span>";

            // WHEN PAGE IS FULLY LOADED.
            
            doc.getElementById('dropmarket-floating-icon').innerHTML = html;

            $(document).on("click", ".floating-icon-img", function(){
                
                var scripts         = document.getElementsByTagName("script");
                var product_options = [];
                var variant_data    = [];
                var product_url     = window.location.href;
                var product_specification = '';
                var product_title      = $('.product-title').text();
                var product_main_image = $('.images-view-wrap .images-view-item').eq(0).find('img').attr('src').replace('_50x50.jpg','');
                var product_id         = null;
                var specification = $('.product-specs .product-specs-list li');


                $.each(scripts, function(index,script){
                    var paragraph         = $(script).text();
                    var regex             = /("productSKUPropertyList":.*?\"warrantyDetailJson\")/g;
                    var found             = paragraph.match(regex);
                    var regex_product_id  = /("productId":.*?,")/g;
                    var found_product_id  = paragraph.match(regex_product_id);
                    var regex_description = /("specsModule":.*?\"storeModule\")/;
                    var found_description = paragraph.match(regex_description);

                    if (null != found_description) {

                        var description_data = JSON.parse( found_description[0].replace(',"storeModule"','').replace('"specsModule":','')).props;
                        
                        product_specification += '<ul>';
                        $.each( description_data, function(i,d){
                            
                            product_specification += '<li><b>'+d.attrName+'</b> : '+d.attrValue+'</li>';

                        });
                        product_specification += '</ul>';

                    }
                    if (null != found_product_id) {
                        product_id = found_product_id[0].replace('"productId":','').replace(',"','');                        
                    }
                    if (null != found) {

                        var data   = found[0].replace('"productSKUPropertyList":','');
                            data   = data.replace(',"warrantyDetailJson"','');           
                        var part_1 = data.substring(0,data.indexOf(',"skuPriceList"'));
                        var part_2 = data.substring(data.indexOf('"skuPriceList"'), data.length);


                        product_options = JSON.parse(part_1);
                        variant_data    = JSON.parse('{'+part_2+'}');

                    }else {
                        var regex = /("skuPriceList":.*?\"warrantyDetailJson\")/g;
                        var found = paragraph.match(regex);
                        if (null != found) {
                            var data = found[0].replace('""skuPriceList":','');
                                data = data.replace(',"warrantyDetailJson"','');
                            variant_data = JSON.parse('{'+data+'}');
                        }
                    }
                });


                // Filter the option make single string for Skuids

                var f_options = [];

                for (let index = 0; index < product_options.length; index++) {
                    var skuPropertyValues = product_options[index].skuPropertyValues;                    
                    for (let index_1 = 0; index_1 < skuPropertyValues.length; index_1++) {                        
                        var option_id    = skuPropertyValues[ index_1 ].propertyValueId;                        
                        var option_image = ( undefined != skuPropertyValues[ index_1 ].skuPropertyImagePath ) ? skuPropertyValues[ index_1 ].skuPropertyImagePath : null;
                        var option_value = skuPropertyValues[ index_1 ].propertyValueDisplayName;                        
                        f_options.push(option_id+'@dm_divider@'+option_image+'@dm_divider@'+option_value);
                    }
                }
         
                var variant_has_images = false;

                for (let index = 0; index < variant_data.skuPriceList.length; index++) {
                    var variant_sku_ids   = variant_data.skuPriceList[ index ].skuPropIds.split(',');                    
                    var option_index = 1;
                    $.each( variant_sku_ids, function( i, c_skuid ){
                        for (let index_1 = 0; index_1 < f_options.length; index_1++) {
                            var option_data = f_options[ index_1 ].split('@dm_divider@');
                            if(c_skuid == option_data[0]) {
                                if ('null' != option_data[1]) {
                                    variant_data.skuPriceList[ index ].variant_image = option_data[1];
                                    variant_has_images = true;
                                }
                                if (option_index==1) {
                                    variant_data.skuPriceList[ index ].option1 = option_data[2];
                                }
                                if (option_index==2) {
                                    variant_data.skuPriceList[ index ].option2 = option_data[2];
                                }
                                if (option_index==3) {
                                    variant_data.skuPriceList[ index ].option3 = option_data[2];
                                }
                            }
                        }                      
                        option_index++;
                    });
                }

                var product_images = [];

                $.each($('.images-view-wrap .images-view-item img'), function(i,d){
                    var src = $(d).attr('src').replace('_50x50.jpg','') ;
                    product_images.push( src)
                });

                if (!variant_has_images) {
                    for (let index = 0; index < variant_data.skuPriceList.length; index++) {
                        variant_data.skuPriceList[ index ].variant_image = product_main_image;     
                    }
                }

                // check if any one variant has image then add main image to those don't have image.

                var how_many_have_variant_image = 0;

                for (let index = 0; index < variant_data.skuPriceList.length; index++) {
                    if (variant_data.skuPriceList[ index ].variant_image != undefined) {
                        how_many_have_variant_image++;                        
                    }  
                }

                if( variant_data.skuPriceList.length != how_many_have_variant_image){
                    for (let index = 0; index < variant_data.skuPriceList.length; index++) {
                        if (variant_data.skuPriceList[ index ].variant_image == undefined) {
                            variant_data.skuPriceList[ index ].variant_image = product_main_image; 
                        }    
                    }
                }

                if (product_options.length == 0) {
                    no_variant = 1;
                }

                var product_data = { product_url           : product_url,
                                     product_id            : product_id,
                                     product_main_image    : product_main_image,
                                     product_specification : product_specification,
                                     product_title         : product_title,
                                     product_images        : JSON.stringify(product_images),
                                     product_weight        : null,
                                     product_options       : JSON.stringify(product_options),
                                     variant_data          : JSON.stringify(variant_data.skuPriceList),
                                     no_variant            : no_variant,
                        }



                noti = '<div class="notifybox"><span class="closeNotify crossBtn"><i class="fa fa-times"></i></span>';
                noti += '<p class="importing-message"><i class="fa fa-spinner fa-spin" style="font-size:15px"></i> IMPORTING PRODUCT</p>';
                noti += '<div class="loading-imgHolder"><img class="importing-product-img img-responsive" src="'+product_main_image+'" /></div>';
                noti += '<div class="pro-detail"><span class="loading-product-title">'+product_title.substring(0, 60)+'...</span></div></div>';

                var notify    = doc.createElement("div"); 
                    notify.id = "product-importing-notify";

                    body.appendChild(notify);
                    notify.innerHTML = noti;

                var closeNotifyBtn   = doc.getElementsByClassName('crossBtn');
                closeNotifyBtn[0].onclick = function(){
                    var element = document.getElementById("product-importing-notify");
                        element.parentNode.removeChild(element);
			    }

                $.ajax({
                    url : app_url+'/product-import/import-aliexpress-product.php',
                    method : 'POST',
                    data : product_data,
                    beforeSend : function(xhr) {},
                    success : function(response) {
						
						if (response == "already exist in importlist") {
							$(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
							$(".loading-product-title").text('The product is already in your import list.');

						}
						if (response == "already exist in store") {
							$(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
							$(".loading-product-title").text('The product is already in your Store.');

						}
						if (response == "success") {
							$(".importing-message").html('<i class="fa fa-check" style="font-size:15px;margin-right: 3px;float: left;"></i>PRODUCT SUCCESSFULLY IMPORTED');
							$(".loading-product-title").text(product_title);
						}
						if (response == "Max product import reached") {
							$(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
							$(".loading-product-title").text('You have reached the max of 500 products in your Import List.');
						}
                    },
                    error : function(e,x){}
                }); 
            })
        }
        
        // Add Dhgate import icon.
        if (location.indexOf('dhgate.com/product/') > -1) {

            console.log('Dhgate product page.')

            var dropmarketIcon        = doc.createElement("div");            
                dropmarketIcon.id     = "dropmarket-floating-icon";
                dropmarketIcon.style  = ""; 
            
            var html = "<span id='import-product-floating-btn-dhgate'><img class='floating-icon-img' src='"+dm_icon+"'></span>";
            
            body.appendChild(dropmarketIcon);
            // WHEN PAGE IS FULLY LOADED.
            doc.getElementById('dropmarket-floating-icon').innerHTML = html;

            $(document).on("click", ".floating-icon-img", function(){

                var product_title      = $('.hinfo h1').text();                
                var product_main_image = 'https:'+$('#simgList img').eq(0).attr('src').replace('/100x100/','/');

                chrome.storage.sync.get('store_id', function(item){

                    console.log(item);

                    if ($.isEmptyObject(item)) {

                        noti = '<div class="notifybox"><span class="closeNotify crossBtn"><i class="fa fa-times"></i></span>';
                        noti += '<p class="importing-message"><span style="color: #ca0673;font-weight: bold;">Login required.</span></p>';
                        noti += '<div class="loading-imgHolder"><img class="importing-product-img img-responsive" src="'+product_main_image+'" /></div>';
                        noti += '<div class="pro-detail">Please login to <b>app.dropmarket.net</b></div></div>';

                        var notify    = doc.createElement("div"); 
                            notify.id = "product-importing-notify";

                        body.appendChild(notify);
                        notify.innerHTML = noti;

                        var closeNotifyBtn   = doc.getElementsByClassName('crossBtn');
                        closeNotifyBtn[0].onclick = function(){
                            var element = document.getElementById("product-importing-notify");
                            element.parentNode.removeChild(element);
                        }

                    }else {

                        // Login check.
                        if (item.store_id == null) {

                            noti = '<div class="notifybox"><span class="closeNotify crossBtn"><i class="fa fa-times"></i></span>';
                            noti += '<p class="importing-message"><span style="color: #ca0673;font-weight: bold;">Login required.</span></p>';
                            noti += '<div class="loading-imgHolder"><img class="importing-product-img img-responsive" src="'+product_main_image+'" /></div>';
                            noti += '<div class="pro-detail">Please login to <b>app.dropmarket.net</b></div></div>';

                            var notify    = doc.createElement("div"); 
                                notify.id = "product-importing-notify";

                            body.appendChild(notify);
                            notify.innerHTML = noti;

                            var closeNotifyBtn   = doc.getElementsByClassName('crossBtn');
                            closeNotifyBtn[0].onclick = function(){
                                var element = document.getElementById("product-importing-notify");
                                element.parentNode.removeChild(element);
                            }
                            return;
                        }


                        // Quantity check.
                        var default_quantity = $('#defaultQuantity').val();

                        if (default_quantity != 1) {

                            noti = '<div class="notifybox"><span class="closeNotify crossBtn"><i class="fa fa-times"></i></span>';
                            noti += '<p class="importing-message"><span style="color: #ca0673;font-weight: bold;">Error!.</span></p>';
                            noti += '<div class="loading-imgHolder"><img class="importing-product-img img-responsive" src="'+product_main_image+'" /></div>';
                            noti += '<div class="pro-detail">Product with minimum quantity required more then 1 can\'t be imported.</div></div>';

                            var notify    = doc.createElement("div"); 
                                notify.id = "product-importing-notify";

                            body.appendChild(notify);
                            notify.innerHTML = noti;

                            var closeNotifyBtn   = doc.getElementsByClassName('crossBtn');
                            closeNotifyBtn[0].onclick = function(){
                                var element = document.getElementById("product-importing-notify");
                                element.parentNode.removeChild(element);
                            }
                            return
                        }


                        // Dropmarket login ok.
                        var product_url        = window.location.href.substring(0, (window.location.href.indexOf('.html')+5) );
                        var product_id         = null;
                        var md5product_id      = $('#productid').val();
                        var product_images     = [];
                        var product_specification = '';
        
                        var data  = $(document).text();
                        var regex = /(identifier:.*?',)/g;
                        var found = data.match(regex);
                            
                        if (null != found) {
                            product_id = found[0].replace("identifier: '",'').replace("',",'');
                        }


                        product_specification += '<ul>';
                            
                        $.each( $('.item-specifics.js-item-specifics ul li'), function(i,d){
                            console.log(d);

                            var title = $(d).find('strong').text();
                            var value = $(d).find('.des-wrap').html().replace(/<b>/g,'').replace(/<\/b>/g,'').replace(/&nbsp;/g,'');

                            // replace(/\+/g, ' ');
                            console.log(value)

                            product_specification += '<li><b>'+title+'</b>'+value+'</li>';
                            // product_specification += '<li>'+$(d).find('strong').contents().unwrap().html()+'</li>';
                        });

                        product_specification += '</ul>';


                        $.each($('#simgList li img'), function(i,d){
                            product_images.push( $(d).attr('src').replace('100x100','0x0') );
                        });

                        var price = 0.00;
                            price = $('.js-wholesale-list li').eq(0).attr('price');
                        
                            var all_data                = [];
                            var variant_images          = [];
                            var variant_id_name         = [];
                            var variant_images_status   = 0;
                            var variant_images_with_sku = [];

                            $.each($('.js-selectionWrapper'), function (i, d) {
                                
                                var small_array    = []
                                
                                $.each($(d).find('li'), function(li_i, li_d){

                                    small_array.push($(li_d).attr('attrvalid'));                                  

                                    if ($(li_d).data('bimg')) {

                                        variant_images_status = 1;
                                        
                                        variant_images.push( $(li_d).attr( 'attrvalid')+'-dmDivider-'+'https:'+$(li_d).data('bimg') );

                                        variant_images_with_sku.push( $(li_d).attr( 'attrvalid' )+'-dmDivider-'+'https:'+$(li_d).data( 'bimg' ) );
                                        
                                    }

                                    variant_id_name.push($(li_d).attr('attrvalid')+'-dmDivider-'+$(li_d).attr('csname'));

                                })

                                all_data.push( small_array );
                                
                            });

                            // Combination maker.
                            function allPossibleCases(arr) {

                                if (arr.length == 1) {
                                    return arr[0];
                                } else {
                                    var result = [];
                                    var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
                                    for (var i = 0; i < allCasesOfRest.length; i++) {
                                        for (var j = 0; j < arr[0].length; j++) {
                                            result.push(arr[0][j] +'-dmDivider-'+ allCasesOfRest[i]);
                                        }
                                    }
                                    return result;
                                }

                            }

                            // Product with more then 3 options can't be imported.

                            if (all_data.length > 3) {
                                
                                noti = '<div class="notifybox"><span class="closeNotify crossBtn"><i class="fa fa-times"></i></span>';
                                noti += '<p class="importing-message"><span style="color: #ca0673;font-weight: bold;">error!</span></p>';
                                noti += '<div class="loading-imgHolder"><img style="height:33px;position:relative;top:1px" src="'+product_main_image+'"></div>';
                                noti += '<div class="pro-detail">Product with more then 3 options can\'t be imported as per Shopify\'s settings.</div></div>';

                                var notify    = doc.createElement("div"); 
                                    notify.id = "product-importing-notify";

                                body.appendChild(notify);
                                notify.innerHTML = noti;

                                var closeNotifyBtn   = doc.getElementsByClassName('crossBtn');
                                closeNotifyBtn[0].onclick = function(){
                                    var element = document.getElementById("product-importing-notify");
                                    element.parentNode.removeChild(element);
                                }
                                return;
                            }

                            if(all_data >0){

                                var variant_data  = allPossibleCases(all_data).sort();
                                var final_variant = [];
    
                                if (variant_images.length > 0) {
                                    
                                    $.each(variant_images, function(i,d){
        
                                        var data      = d.split('-dmDivider-');
                                        var attr_id   = data[0];
                                        var image_src = data[1];
        
                                        for (let index = 0; index < variant_data.length; index++) {
                                            
                                            const variant = variant_data[index];
    
                                            
    
                                            if ( $.inArray( attr_id, variant.split('-dmDivider-') ) > -1) {
                                                
                                                final_variant.push(variant+'-dmDivider-'+'https:'+image_src);
                                                
                                            }
                                        }
                                    });
    
                                } else {
                                    console.log('No variant image');
    
                                    for (let index = 0; index < variant_data.length; index++) {
                                        
                                        final_variant.push(variant_data[index]+'-dmDivider-'+product_main_image);    
    
                                    }
    
                                }
                            }
                        
                            var product_data = { 
                                md5product_id : md5product_id, 
                                price : price, 
                                product_url : product_url, 
                                product_id : product_id, 
                                product_main_image : product_main_image, 
                                product_title : product_title,
                                product_images : JSON.stringify( product_images ),
                                variant_data : JSON.stringify( final_variant ),
                                variant_images_with_sku : JSON.stringify( variant_images_with_sku ),
                                variant_images_status : variant_images_status,
                                product_specification : product_specification
                            };
        
                        noti = '<div class="notifybox"><span class="closeNotify crossBtn"><i class="fa fa-times"></i></span>';
                        noti += '<p class="importing-message"><i class="fa fa-spinner fa-spin" style="font-size:15px"></i> IMPORTING PRODUCT</p>';
                        noti += '<div class="loading-imgHolder"><img class="importing-product-img img-responsive" src="'+product_main_image+'" /></div>';
                        noti += '<div class="pro-detail"><span class="loading-product-title">'+product_title.substring(0, 60)+'...</span></div></div>';
        
                        var notify    = doc.createElement("div"); 
                            notify.id = "product-importing-notify";
        
                            body.appendChild(notify);
                            notify.innerHTML = noti;
        
                        var closeNotifyBtn   = doc.getElementsByClassName('crossBtn');
                        closeNotifyBtn[0].onclick = function(){
                            var element = document.getElementById("product-importing-notify");
                            element.parentNode.removeChild(element);
                        }
        
                        $.ajax({
                            url : app_url+'/product-import/import-dhgate-product.php',
                            method : 'POST',
                            data : product_data,
                            success : function(response) {

                                response = response.replace('_start', '');
                                if (response == "already exist in importlist") {
                                    $(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
                                    $(".loading-product-title").text('The product is already in your import list.');
                                }
                                if (response == "already exist in store") {
                                    $(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
                                    $(".loading-product-title").text('The product is already in your Store.');
                                }
                                if (response == "success") {
                                    $(".importing-message").html('<i class="fa fa-check" style="font-size:15px;margin-right: 3px;float: left;"></i>PRODUCT SUCCESSFULLY IMPORTED');
                                    $(".loading-product-title").text(product_title);
                                }
                                if (response == "max product import reached") {
                                    $(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
                                    $(".loading-product-title").text('You have reached the max limit of 10 products in your Import List.');
                                }
                                if (response == "login required") {
                                    $(".importing-message").html("<span style='color: #ca0673;font-weight: bold;'>Error!</span>");
                                    $(".loading-product-title").html('You need to login at <b>app.dropmarket.net</b>.');
                                }

                            },
                            error : function(e,x){
                                console.log('Inside error')
                                console.log(e)
                                console.log(x)
                            }
                        }); 
                    }
                
                });
            });
        }

    });
}