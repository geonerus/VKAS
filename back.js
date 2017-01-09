
var f=function fff(data){
KEYWORDS=data['filter'].split(',')

};
chrome.storage.sync.get({'filter':'mdk,сsgo,раздача,опцион'},f);

$.get(chrome.extension.getURL('/main.js'),
	function(data) {
		var script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.innerHTML = data;
		document.getElementsByTagName("head")[0].appendChild(script);
		document.getElementsByTagName("body")[0].setAttribute("onLoad", "main('"+KEYWORDS.toString()+"');");
	}
);
