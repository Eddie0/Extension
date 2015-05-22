 
document.getElementById("send").onclick = function() {
	var d = document.getElementById("text").value;
	chrome.storage.sync.set({ "data" : d }, function() {
		if (chrome.runtime.error) {
			console.log("Runtime error.");
		}
	});
	window.location = "result.html";
}