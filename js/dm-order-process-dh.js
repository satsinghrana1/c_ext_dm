window.addEventListener("load", pageFullyLoaded, false);


function pageFullyLoaded(){

    $(function() {

        // Aliexpress specific.
        var app_url          = 'https://app-stage.dropmarket.net';
        var max_process_time = 180;

        // Fetching animation.

        // Inform the background page to perform an action.
        var port = chrome.extension.connect({name: "Dm extension communication bridge"});

        var dropm_dh = {
            main_id : null,
            _process_state : null,
            init : function (ev, btn_obj) {

                chrome.storage.sync.get('order_process', function(item){
                    
                    if ($.isEmptyObject(item)) {
                        
                        dropm_dh.main_id = dropm_dh.identity();

                        chrome.storage.sync.set( { 'order_process' : dropm_dh.main_id+'start_at'+new Date() } );
                        
                        dropm_dh.update_state('dm_order_button_click');
                        
                        var link = $(btn_obj).attr("href");
                        
                        setTimeout(function(){
                            var id    = $.now();
                            var tempA = "<a id='"+id+"' href='"+link+"' target='_blank'></a>";
                            $('body').append(tempA);
                            setTimeout(function(){
                                $("#"+id)[0].click();                               
                                $("#"+id).remove();
                            },20);
                        },10);

                    } else {


                        var start_at = item.order_process.split('start_at')[1];

                        var d1 = new Date(start_at);
                        var d2 = new Date();

                        res = Math.abs(d1 - d2) /1000;

                        if ( res > max_process_time) {

                            // An in complete order process with max time exist Remove it and go for order.
                            chrome.storage.sync.clear();

                            dropm.main_id = dropm_dh.identity();

                            chrome.storage.sync.set( { 'order_process' : dropm_dh.main_id+'start_at'+new Date() } );
                            
                            dropm_dh.update_state('dm_order_button_click');
                            
                            var link = $(btn_obj).attr("href");
                            
                            setTimeout(function(){
                                var id    = $.now();
                                var tempA = "<a id='"+id+"' href='"+link+"' target='_blank'></a>";
                                $('body').append(tempA);
                                setTimeout(function(){
                                    $("#"+id)[0].click();                               
                                    $("#"+id).remove();
                                },20);

                            },10);

                        } else {

                            dropm_dh._message('An order is already in progress. <br>Try to order after few seconds.', 3, 3);

                        }
                    }

                });
            },
            identity : function () {
                var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                var token = '';
                for(var i = 0; i < 20; i++) {
                    token += chars[Math.floor(Math.random() * chars.length)];
                }
                return token;
            },
            _message : function (message, auto_remove = 0, fa_icon = 1) {

                var icon = 'data:image/png;base64,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';
                
                if ($("#dm-progress-message").length > 0) {
                    $("#dm-progress-message").remove();
                }
            
                if (fa_icon == 1) {
                    fa_icon = '<i class="fa fa-spinner fa-spin" style="font-size: 20px;position: relative;top: -17px;right: -10px;color: #df1657;"></i>';
                }else if (fa_icon == 2){
                    fa_icon = '<i class="fa fa-check" style="font-size: 12px;position: relative;top: -17px;right: -15px;color: rgba(223, 22, 87, 0.67);border: 2px solid;border-radius: 17px;padding: 4px 4px;"></i>';
                }else if (fa_icon == 3){
                    fa_icon = '<i class="fa fa-info" style="font-size: 12px;position: relative;top: -17px;right: -15px;color: rgba(223, 22, 87, 0.67);border: 2px solid;border-radius: 17px;padding: 4px 8px;"></i>';
                }else if (fa_icon == 4){
                    fa_icon = '<i class="fa fa-exclamation-triangle" style="font-size: 14px;position: relative;top: -17px;right: -15px;color: rgba(223, 22, 87, 0.67);border: 2px solid;border-radius: 17px;padding: 6px 6px;"></i>';
                }

                var id = dropm_dh.identity();
            
                var block = '';
            
                block += '<div id="dm-progress-message" class="'+id+'_message" style="cursor: pointer;background: white;position: fixed;right: 20px;top: 80px;z-index: 500000;width: 100%;max-width: 320px;padding: 30px 30px;border-left: 1px solid #e6e1e1;box-shadow: 0 4px 2px rgba(176, 176, 181, 0.16);border-top: 1px solid #e6e1e1;border-right: 1px solid #e6e1e1;border-bottom: 1px solid #e6e1e1;border-radius: 7px;">';
                block += '<span class="notification-close-msg" style="background: rgb(99, 95, 95);padding: 4px 10px;position: absolute;bottom: -28px;font-size: 11px;color: rgb(255, 255, 255);border-radius: 3px;left: 50%;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 3px;display: none;transform: translateX(-50%);width: 100%;max-width: 196px;">Click on the notification to close it.</span><div style="position: relative">';
                block += '<img style="width: 29px;position: absolute;top: 50%;left: -14px;transform: translateY(-50%);" src="'+icon+'"/>';
                
                if (0 != fa_icon) {
                    block += '<div style="position: absolute;top:0;right:0">'+fa_icon+'</div>';
                }
                
                block += '<div style="padding:0 0 0 22px"  class="dm-process-message">'+message+'</div>';
                block += '<div style="padding: 0 0 0 22px;font-size: 11px;color: #d8dae0;bottom: -27px;position: absolute;right: -15px;">Dropmarket Chrome Extension.</div>';
                block += '</div></div>';
                
                $('body #dm-progress-message').remove();
                
                $('body').append( block );
                
                if (auto_remove > 0) {
                    setTimeout(() => {
                        $('.'+id+'_message').fadeOut(500, function() { $(this).remove(); });
                    }, auto_remove * 1000);                    
                }
            },
            process_observer : function (params) {

                chrome.storage.sync.get(null, function(items){

                    if ( undefined != items.order_process ) {

                        if (dropm_dh.its('dropmarket.net/orderHistory.php')) {
                            
                            var start_at = items.order_process.split('start_at')[1];

                            var d1 = new Date(start_at);
                            var d2 = new Date();

                            res = Math.abs(d1 - d2) /1000;

                            console.log('Time : ',res)
                            if (res > max_process_time) {
                                // An in-complete order process with max time exist Remove it and go for order.
                                chrome.storage.sync.clear();
                                dropm_dh._message( 'You can order product now',3,3 );
                                return;
                            } else {
                                dropm_dh._message('An order is already in progress. <br>Try to order after few seconds.', 3, 3);
                                return;
                            }
                        }

                        var c_s = null;

                        $.each(items.dm_order_process_state, function(key,value) {
                            if(value==1){
                                c_s = key;
                            }
                        });
                        
                        dropm_dh._process_state = c_s;
                        dropm_dh.go_next();

                    } else {
                        if(dropm_dh.its('https://app-stage.dropmarket.net/orderHistory.php')) {
                            dropm_dh._message( 'You can order product now',3,3 );
                        }
                    }                    
                });

                
            },
            _show_shipping_address : function () {

      
                


                
            },
            go_next : function () {

                console.log('Process state : ', dropm_dh._process_state)
                
                if ( dropm_dh._process_state == 'dm_order_button_click' ) {

                    if (dropm_dh.its('app-stage.dropmarket.net/order-product-dh.php')) {
                        
                        // Set order data into chrome storage.
                        var order_cookie_data = '';
                        var cookie_name       = 'dm_order_details=';
                        var cookies_all       = document.cookie.split(';');
    
                        for(var i = 0; i < cookies_all.length; i++) {
    
                            var cookie = cookies_all[ i ];
                            
                            while (cookie.charAt(0) == ' ') {
                                cookie = cookie.substring(1, cookie.length);
                            }
                            if (cookie.indexOf( cookie_name ) == 0) {
                                order_cookie_data =  cookie.substring(cookie_name.length, cookie.length);
                            }
                        }
                        
                        var cookie_json = decodeURIComponent(order_cookie_data.replace(/\+/g, ' '));
                        var jsonObj     = JSON.parse(cookie_json);
    
                                       
                        chrome.storage.sync.set({'order_data': jsonObj});                    
                        dropm_dh.update_state('dm_check_dhgate_login');
                        
                    }

                }
                if ( dropm_dh._process_state == 'dm_check_dhgate_login' ) {

                    if (dropm_dh.its('dhgate.com/product/')) {
                        
                        var is_login = dropm_dh.check_dhgate_login();
    
                        if (is_login) {
                            
                            dropm_dh._message('Dhgate login pass.',0,0);
                            
                            dropm_dh.update_state( 'dm_check_cart_status' );
    
                            window.location.href = 'https://shoppingcart.dhgate.com/cart/pageload.do#pu1812_cart';
                            
                        } else {
                            
                            dropm_dh._message('Please login to your Dhgate account. Order process will continue thereafter.',0,3);
    
                        }
                    }
                }

                if ( dropm_dh._process_state == 'dm_check_cart_status' ) {

                    if (dropm_dh.its('shoppingcart.dhgate.com/cart/pageload.do')) {
                        
                        dropm_dh._message('Analyzing the cart.',0,1);
                        
                        var cart_empty = dropm_dh.analyze_cart();

                        if(cart_empty){

                            dropm_dh._message('Cart empty.',0,1);

                        } else{

                            dropm_dh.delete_cart_items();

                        }



                    }

                }

                // if ( dropm_ali._process_state == 'dm_add_to_cart' ) {

                //     if (dropm_ali.its('shoppingcart.aliexpress.com/shopcart/shopcartDetail.htm')) {

                //         dropm_ali._message('Adding product to cart.',0,1);

                //         dropm_ali.add_to_cart();
                //     }

                // }

                // if ( dropm_ali._process_state == 'dm_check_address_status' ) {

                //     if (dropm_ali.its('shoppingcart.aliexpress.com/order/confirm_order.htm')) {

                //         dropm_ali._message('Analyzing the shipping address');

                //         dropm_ali.check_shipping_address();
                //     }
                    
                // }

                // if ( dropm_ali._process_state == 'dm_fill_order_note') {

                //     if (dropm_ali.its('https://shoppingcart.aliexpress.com/order/confirm_order.htm')) {

                //         chrome.storage.sync.get('order_data', function ( item ) {

                //             dropm_ali.dm_fill_order_note( item.order_data.note );
                            
                //             dropm_ali._message('Please verify the details and place the order.',0,2);

                //             // Any excess message.
                //             var aem = '';
                //                 aem = $('.message-spirit.info.level-1').html();

                //                 if (aem) {
                //                     $('.dm-process-message').html( aem )
                //                     $('.dm-process-message .message-spirit-icon').remove();
                //                 }

                //             chrome.storage.sync.clear();
                            
                //         });
                //     }
                // }
            },
            check_dhgate_login : function () {
                if ($('#top-userInfo').text().indexOf('Join Free') > -1) {
                    return false;                    
                } else {
                    return true;
                }                              
            },
            update_state : function (c_state) {

                chrome.storage.sync.get('dm_order_process_state',function(item){
                    
                    if (!$.isEmptyObject( item )) {
                        chrome.storage.sync.remove('dm_order_process_state');
                    }

                    var all_states = {dm_order_button_click   : 0,
                                      dm_check_dhgate_login   : 0,
                                      dm_check_cart_status    : 0,                                        
                                      dm_add_to_cart          : 0,
                                      dm_check_address_status : 0,                                       
                                      dm_fill_order_note      : 0};

                    $.each(all_states, function(state_name, val){
                        if (state_name == c_state) {                    
                            all_states[state_name] = 1 ;
                        } else {
                            all_states[state_name] = 0 ;
                        }
                    });
        
                    chrome.storage.sync.set({dm_order_process_state: all_states});

                });

            },
            analyze_cart : function () {
                if ($('.shopping-cart-no-items').is(':visible')) {
                    return true;
                } else {
                    return false;
                }        
            },
            add_to_cart : function () {
                
                

                

            },
            delete_cart_items : function () {
                console.log('GHJHJDGH')

                var items = $('.shopping-cart-item-table tr').length;

                console.log(items);

                setTimeout(() => {
                    
                    $('.shopping-cart-checkbox').next().attr('id','dsdsdclick')

                    element=document.getElementById('dsdsdclick');

                    var dblclickEvt = document.createEvent("MouseEvents");
                        dblclickEvt.initEvent("click");
                        element.click()
                }, 1000);

       





            },
            its : function (needle){
                
                var current_url = window.location.href; 

                return ( current_url.indexOf(needle) > -1 ) ? true : false;
            },
            check_shipping_address : function (params) {

                

                
            },
            dm_fill_order_note : function (seller_message) {

                
                // Final call.
            },
            delete_shipping_address : function ( id ) {

            
                
            }
        };

        dropm_dh.process_observer();
        
        $('.orderBtn').click(function(ev) {
            if($(this).data('supplier') == 'dh'){
                dropm_dh.init(ev, this);
            }
        });

        

        // Minor functionalities
        $(document).on('mouseover', '#dm-progress-message', function () {
            $('.notification-close-msg').show();
        });
        $(document).on('mouseout', '#dm-progress-message',function () {
            $('.notification-close-msg').hide();
        });
        $(document).on('click', '#dm-progress-message', function (ev) {
            if(ev.target.className != 'fa fa-clone' ){
                $(this).remove();
            }
        });

    });
}