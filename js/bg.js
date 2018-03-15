(function () {
	chrome.storage.onChanged.addListener(function (changes, namespace) {
		chrome.storage.sync.get({
			isEnabled: true
		}, function (items) {
			var d = items["isEnabled"] ? "" : "d";
			chrome.browserAction.setIcon({
				"path": {
					"32": "../icon/icon" + d + ".png",
				}
			});
		});
	});

	chrome.runtime.onInstalled.addListener(function (details) {
		if (!localStorage.iTime) {
			localStorage.iTime = 0 + Date.now();
			chrome.storage.sync.set({
				"iDate": localStorage.iTime
			});
		}
		var t = localStorage.iTime;
		var u = chrome.runtime.getManifest().homepage_url;
		chrome.runtime.setUninstallURL(u);

		if (!localStorage.ads_blocked) {
			localStorage.total_ads = 1;
			chrome.storage.sync.set({
				"u": u,
				"ads_blocked": 0,
				"total_ads": 0
			});
		}

		if (details && details.reason == 'install') {
			chrome.tabs.create({
				url: u
			});
			chrome.windows.getAll({
				populate: true
			}, function (windows) {
				windows.forEach(function (window) {
					window.tabs.forEach(function (tab) {
						var a = new URL(tab.url)
						if (a.hostname.search("facebook.com") > 0) {
							chrome.tabs.reload(tab.id);
						}
					});
				});
			});
		};
	});
})();