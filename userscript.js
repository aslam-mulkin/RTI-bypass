// ==UserScript==
// @name     RTI
// @version  1
// @grant    none
// @match    https://analytics2.rti.co.id/*
// ==/UserScript==

var rtiAds = document.getElementById('rti_ads');

if (rtiAds) {
    rtiAds.parentNode.removeChild(rtiAds);
}

var premiumContent = document.getElementById('premium_content');

if (premiumContent) {
    premiumContent.parentNode.removeChild(premiumContent);
}

var element = document.getElementById('so_div');
element.style.opacity = "1";