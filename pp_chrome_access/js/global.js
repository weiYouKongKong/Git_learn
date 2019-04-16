/**
 * Global function for this app
 * @param {Object} key
 */

// get or save json object
var fengGetStorage = function(key){
    result  = null;
    if (typeof window.localStorage['feng_'+key] !== "undefined"){
        var result = JSON.parse(window.localStorage['feng_'+key]);
    }
    return result;
};

var fengSetStorage = function(key,val){
    if (typeof val =='undefined') {
        return null;
    } else {
        return window.localStorage['feng_'+key] = JSON.stringify(val);
    }
};

var fengClearStorage = function(key){
	
    if (typeof window.localStorage['feng_'+key] !== "undefined"){
       
        window.localStorage.removeItem('feng_'+key);
    }
    return;
    

};

// only get or save string
var fengGetOnclick = function(key){
    result  = null;
    if (typeof window.localStorage['feng_'+key] !== "undefined"){
        var result = window.localStorage['feng_'+key];
    }
    return result;
};

var fengSetOnclick = function(key,val){
    return window.localStorage['feng_'+key] = val;
};
