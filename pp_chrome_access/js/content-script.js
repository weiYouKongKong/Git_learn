
var ifrUrltop = chrome.extension.getURL('nav.html');
var iframetop = $('<iframe src="'+ifrUrltop+'" class="eb_tips" style="border: 0px; overflow: visible; padding: 0px; right: auto; z-index: '+(2147483647)+'; top: 0px; left: 0px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 3px 10px; position: fixed; height:200px; width: 100%; display: inline; background: transparent;"></iframe>');
	
// 从存储中读取数据
	chrome.storage.local.get('closedTips-top', function(result) {
		 if (result['closedTips-top']) {

		 } else {
			 $('body').append(iframetop);
			 $('html').css('margin-top','200px');
		 }
	});

	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.what == "closeTips-top") {
			iframetop.remove();
			$('html').css('margin-top','0px');
			chrome.storage.local.set({'closedTips-top': true}, function() {
				console.log('保存成功');
			});
		}
	});


