/**
 * Dropmarket extension process workflow.
 * Developer : Sat Singh Rana
 * Date : 05-08-2019
 */
window.addEventListener("load", pageFullyLoaded, false);   
function pageFullyLoaded(){
    $(function() {
        console.log( "Ready! Dm-orderHistory-stage.js" );
        $('.orderBtn').click(function(){
            chrome.storage.sync.set({'order_process_flow':'order_btn_clicked'});
        });
    });
}
