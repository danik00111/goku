// ==UserScript==
// @name         Ping On Username Mention
// @namespace    https://danik00111.github.io/
// @version      0.0.2
// @description  Will play a fnuuy sound every time your nickname is mentioned in the chat. Sound and icon directly taken from the $30 website, because I'm lazy.
// @author       danik0011
// @icon         https://thirtydollar.website/icons/ultrainstinct.png
// @match        https://bonk.io/gameframe-release.html
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let gokuHowl = new Howl({src: "https://thirtydollar.website/sounds/ultrainstinct.wav"});
  // Select the target node you want to observe (in this case, the chatbox).
const chatbox = document.getElementById('newbonklobby_chat_content');

// Create a new Mutation Observer.
const observer = new MutationObserver((mutationsList, observer) => {
  // Loop through the mutations that have occurred.
  for (const mutation of mutationsList) {
    // Check if nodes were added.
    if (mutation.type === 'childList') {
      // Loop through the added nodes.
      mutation.addedNodes.forEach((node) => {
        // Check if the added node is a... uhhhh... yeah idk
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Read the innerHTML of the <span> element inside the <div>.
          const message = node.querySelector('.newbonklobby_chat_msg_txt').innerHTML;
          // Do something with the message, e.g., check if it contains the word "sus".
          console.log(`message ${message} found`)
          if(message.toLowerCase().contains('sus')) {
            gokuHowl.play();
            console.log('"sus" found');
          }
        }
      });
    }
  }
});

// Configure the observer to watch for changes in child nodes of the chatbox.
const config = { childList: true };

// Start observing the chatbox for mutations.
observer.observe(chatbox, config);

})();
