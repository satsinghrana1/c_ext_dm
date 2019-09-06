(function(){

    console.log('Inside home.js');
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var store_id = readCookie('dm_store_id');


    var items = {};
        items["store_id"] = store_id;

    console.log(items);

        
        chrome.storage.sync.set(items);

    // ExtensionAvailable = document.createElement('div');
    // ExtensionAvailable.setAttribute("id", "dropmExtensionAvailable");
    // document.body.appendChild(ExtensionAvailable); 

    
})();