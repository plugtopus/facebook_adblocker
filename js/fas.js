(function () {
	var HIDE_CSS = "display: none !important; visibility: hidden !important";
	var HIDO_CSS = "outline-offset: 2px; outline: .2em dotted red !important";

	function getStorage() {
		chrome.storage.sync.get({
			isEnabled: true,
			blockSponsored: true,
			blockAds: true,
			blockPUMK: true,
			blockRG: true,
			blockSP: true,
			highlightAds: false
		}, function (items) {
			addsponsoredItemsRule("ha2837492i", items);
		});
	}

	var addsponsoredItemsRule = function (id, _v) {
		var style = document.getElementById(id);
		if (!style) {
			style = document.createElement("style");
			style.setAttribute("type", "text/css");
			style.setAttribute("id", id);
			var head = document.querySelector("head") || document.head || document.documentElement;
			if (head) head.appendChild(style);
		}
		if (_v["isEnabled"]) {
			var _rule = '.ha2837492ta';
			if (_v["blockSponsored"]) {
				_rule += ', .ha2837492tn';
			}
			if (_v["blockPUMK"]) {
				_rule += ', .ha2837492tp';
			}
			if (_v["blockAP"]) {
				_rule += ', .ha2837492ta';
			}
			if (_v["blockRG"]) {
				_rule += ', #pagelet_canvas_nav_content';
			}
			if (_v["blockSP"]) {
				_rule += ', #pagelet_ego_pane';
			}
			if (_v["blockAds"]) {
				_rule += ', #pagelet_ego_pane_w, #pagelet_side_ads, .-cx-PRIVATE-snowliftAds__root, .ha2837492ra';
			}
			_rule += '{' + (_v["highlightAds"] ? HIDO_CSS : HIDE_CSS) + '}';
			style.textContent = _rule;
		} else {
			style.textContent = "";
		}
	};

	return {
		initialize: function () {
			chrome.storage.onChanged.addListener(function (changes, namespace) {
				if (changes.isEnabled || changes.blockSponsored || changes.blockAds || changes.blockPUMK || changes.blockRG || changes.highlightAds) {
					getStorage();
				}
			});
			getStorage();
		}
	}

})().initialize()