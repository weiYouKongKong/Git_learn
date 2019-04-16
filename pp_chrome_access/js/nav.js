/**
 * Created by HP on 2019/2/20.
 */
$("#closetop").click(function(){
    chrome.runtime.sendMessage({what:"closeTips-top"});

})

$(".know").click(function(){
    chrome.runtime.sendMessage({what:"closeTips-top"});

})







