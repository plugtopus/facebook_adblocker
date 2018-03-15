$(function () {
	var mine = {};
	var vars = ["isEnabled", "blockSponsored", "blockAds", "blockPUMK", "blockRG", "blockSP", "highlightAds", "blockYT"];
	vars.forEach(function (e) {
		mine[e] = document.getElementById(e);
	});

	var handleCheckBox = function () {
		for (i = 1; i < vars.length; i++) {
			$('.inputDisabled').prop("disabled", !$(mine["isEnabled"]).is(':checked'));
		}
		var m = {};
		vars.forEach(function (e) {
			m[e] = $(mine[e]).is(':checked');
		});
		chrome.storage.sync.set(m);
	}

	var timeSaved = function (d) {
		var r = [];
		var s = {
			year: 31536000,
			month: 2592000,
			week: 604800,
			day: 86400,
			hour: 3600,
			minute: 60,
			second: 1
		};
		var k = 0;
		Object.keys(s).forEach(function (key) {
			var rk = Math.floor(d / s[key]);
			if (rk > 0) {
				r.push(rk + " " + key + (rk > 1 ? "s" : ""));

			}
			d -= rk * s[key];
		});
		return r.slice(0, 3).join(" ");
	}

	chrome.storage.sync.get({
		isEnabled: true,
		blockSponsored: true,
		blockAds: true,
		blockPUMK: true,
		blockRG: true,
		blockYT: true,
		blockSP: true,
		highlightAds: false,
		FBads: 0,
		YTads: 0,
		TTads: 0
	}, function (items) {
		var TTads = timeSaved(items['TTads']);
		$('#FBAdBlocked').text(items['FBads']);
		if (TTads && TTads != "") {
			$('#TTAdBlocked').text(TTads);
		}
		vars.forEach(function (e) {
			$(mine[e]).prop('checked', items[e]).change();
			$(mine[e]).change(handleCheckBox);
		});
		handleCheckBox();
	});
});