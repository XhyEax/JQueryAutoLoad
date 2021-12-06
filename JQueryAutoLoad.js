// ==UserScript==
// @namespace    https://github.com/XhyEax/JQueryAutoLoad
// @name         JQueryAutoLoad
// @version      0.1
// @description  Load JQuery after checking JQuery and $
// @author       Xhy
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';
    if (typeof jQuery == 'undefined' || typeof $ == 'undefined') {
        loadJQuery();
    }
    else {
        console.log("JQuery has been loaded.");
    }

    function loadJQuery() {
        console.log("JQuery or $ not found, try to load.")
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js";
        var parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
        parent.appendChild(script);
        script.onload = function () { console.log("JQuery loaded."); }
    }
})();