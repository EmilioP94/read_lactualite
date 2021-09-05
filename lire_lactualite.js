// ==UserScript==
// @name         Lire l'Actualité
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  allows you to read articles on the l'Actualité website by hiding the paywall
// @author       emilioP94
// @match        https://lactualite.com/*
// @icon         https://www.google.com/s2/favicons?domain=lactualite.com
// @grant        none
// ==/UserScript==

const readLActualite = () => {
        document.body.style.overflow = "auto";
        document.getElementsByClassName("pelcro-app modal")[0].style.display = "none";
}

document.addEventListener("click", readLActualite)

