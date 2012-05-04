/* Author:  @coto

*/
function insertParam(key, value)
{
    key = escape(key); value = escape(value);

    var kvp = document.location.search.substr(1).split('&');

    var i=kvp.length; var x;
    while(i--) {
        x = kvp[i].split('=');

        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join('=');}

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&');
}


$(document).ready(function() {

    /***** Choose language @ footer ****/
    $("#select_language").change(function() {
        newLang = $(this).val();
        if ($(this).attr("current") != newLang) {
            insertParam("hl", newLang)
        }
    });

});


