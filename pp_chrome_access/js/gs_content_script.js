chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.what == "closeTips-bottom-forever") {
        iframebottom.remove();
        $('html').css('margin-bottom', '0px');
        fengSetStorage('closedTips-bottom-forever' ,true);
    } else if (request.what == "closeTips-bottom-tmp") {
        iframebottom.remove();
        $('html').css('margin-bottom', '0px');
    }
});

// 从存储中读取数据
var ifrUrlbottom = chrome.extension.getURL('footer.html');
var iframebottom = $('<iframe src="' + ifrUrlbottom + '" class="eb_tips" style="border: 0px; overflow: visible; padding: 0px; right: auto; z-index: ' + (2147483647) + '; bottom: 0px; left: 0px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 3px 10px; position: fixed; height:100px; width: 100%; display: inline; background: transparent;"></iframe>');

var pip_end = new Date().getTime();
var installTime = fengGetStorage("current_update_time");
if (!installTime) {
    installTime = 0;
}
if (pip_end - installTime > 10000) {
    var closedTipsForever = fengGetStorage('closedTips-bottom-forever');
    if (!closedTipsForever) {
        $('body').append(iframebottom);
        $('html').css('margin-bottom', '100px');
    }
}

