/*
 Font changer v1.0.0
 Copyright 2019 Font changer
 MIT License (https://raw.githubusercontent.com/Huy-Ngo/font-changer/master/LICENSE)
*/

let enlarge = document.querySelector('button#enlarge')
let day = document.querySelector('button#day')
let night = document.querySelector('button#night')

enlarge.onclick = function(element) {
	chrome.tabs.insertCSS(details = {
		file: 'css/enlarge.css',
		allFrames: true,
		matchAboutBlank: true
	})
}

day.onclick = function(element) {
	chrome.tabs.insertCSS(details = {
		file: 'css/day_mode.css',
		allFrames: true,
		matchAboutBlank: true
	})
}

night.onclick = function(element) {
	console.log('this word')
	chrome.tabs.insertCSS(details = {
		file: 'css/night_mode.css',
		allFrames: true,
		matchAboutBlank: true
	})
}