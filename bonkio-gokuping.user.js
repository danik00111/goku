// ==UserScript==
// @name         Ping On Username Mention
// @namespace    https://danik00111.github.io/
// @version      0.0.1
// @description  Will play a fnuuy sound every time your nickname is mentioned in the chat. Sound and icon directly taken from the $30 website, because I'm lazy.
// @author       danik0011
// @icon         https://thirtydollar.website/icons/ultrainstinct.png
// @match        https://bonk.io/gameframe-release.html
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let gokuHowl = new Howl({src: "https://thirtydollar.website/sounds/ultrainstinct.wav"});
  gokuHowl.play();
  setTimeout(function(){
    gokuHowl.play();
  }, 10000);
//  var observer = new MutationObserver(function(mutations) {
//    if (document.contains(myElement)) { // example use of the mutation observer
//      console.log("It's in the DOM!"); // no idea how to use that
//      observer.disconnect(); // *yawn* nah its 11pm imma do this tomorrow
//    }
//  });
})();
