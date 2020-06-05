var $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320;

$(document).ready(function ($) {
	$body = $('body');

	//developer funcitons
	pageWidget(['index']);
	getAllClasses('html', '.elements_list');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
			(image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

			image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
		});
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
var message = 'Developed by Glivera-team https://glivera-team.com/';

console.info('%c%s', styles, message);

//js

function clickList(btn, list) {
	$(list).slideToggle();
	$(btn).toggleClass('active')
}

$(".header_tels_main").click(function () {
	clickList(this, ".header_tels")
})
$(".lang_select").click(function () {
	clickList(this, ".lang_select_inner")
})

$(".sort_select_btn").click(function () {
	clickList(this, ".sort_select_list")
})

$(".sort_select_item").click(function () {
	clickList(".sort_select_btn")
})

$(".icon-burger.header_icon").click(function () {
	clickList(".header_menu_list", ".header_menu_list")
})


$(".aside_menu_link").click(function (event) {
	const item = $(this)
	if (item.siblings('.aside_menu_subcats').length > 0) {
		event.preventDefault(),
			item.siblings(".aside_menu_subcats").slideToggle(),
			item.toggleClass("active")

	}
});