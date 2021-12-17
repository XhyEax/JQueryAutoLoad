// ==UserScript==
// @namespace    https://github.com/XhyEax/JQueryAutoLoad
// @name         JQueryAutoLoad
// @version      0.1
// @description  Load JQuery after checking $
// @author       Xhy
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';
    // unused
    /*var jQueryFound = typeof jQuery != 'undefined';*/
    var dollarFound = typeof $ != 'undefined';
    if (!dollarFound) {
        console.log("$ undefined, try to load JQuery.")
        loadJQuery();
    }
    else {
        console.log("$ has been loaded, pass to avoid errors.");
    }

    function loadJQuery() {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js";
        var parent = document.head || document.body;
        parent.appendChild(script);
        script.onload = function () { console.log("JQuery loaded."); }
    }
})();