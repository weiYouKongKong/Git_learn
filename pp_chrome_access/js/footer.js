
$("#closebottom").click(function(){
    chrome.runtime.sendMessage({what:"closeTips-bottom-tmp"});
    //$("#top").css('display','none');
    // 往存储中写入数据
});

// Do not show tips forever
$("#none").click(function(){
    chrome.runtime.sendMessage({what:"closeTips-bottom-forever"});
    //$("#top").hide();
});

var submitEmail = function() {
    var sletter = $("#in").val(); //获取表单对象的值
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    isok = reg.test(sletter);
    if (!isok) {
        $("#geshi").text("邮箱格式不正确！");
    }else{
        chrome.runtime.sendMessage({what: "_trackEvent", category: "userdata", action:"usermail", label:$("#in").val()});
        chrome.runtime.sendMessage({what:"closeTips-bottom-forever"});
    }
};


$(document).keydown(function(event){
    if(event.keyCode == 13){
        submitEmail();
    }
});


$("#save").click(function(){
    submitEmail();
});


$("#in").bind("blur",function (){
    var sletter = $("#in").val(); //获取表单对象的值
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        isok = reg.test(sletter);
    if (!isok) {
        $("#geshi").text("邮箱格式不正确！");
    }
});



