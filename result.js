document.body.onload = function() {
	chrome.storage.sync.get("data", function(items) {
		if (!chrome.runtime.error) {
			console.log(items);
			document.getElementById("data").innerText = items.data;
		}
	});
}