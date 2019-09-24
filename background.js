/*
 Font changer v1.0.0
 Copyright 2019 Font changer
 MIT License (https://raw.githubusercontent.com/Huy-Ngo/font-changer/master/LICENSE)
*/

'use strict';

chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {
					hostContains: '.'
				},
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});
