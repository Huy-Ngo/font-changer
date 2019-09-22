'use strict';

chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({
		day_mode: {
			bg_color: '#fff !important',
			font_color: '#000 !important'
		},
		night_mode: {
			bg_color: '#2d2d2d !important',
			font_color: '#eee !important'
		},
		font_size: {
			p_size: '1.25 em',
			h1_size: '2 em',
			h2_size: '1.8 em',
			h3_size: '1.4 em'
		}
	}, function() {
		console.log("Formatter.");
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {
					hostEquals: 'docs.sqlalchemy.org'
				},
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});
