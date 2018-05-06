/*
 * Entry point for the watch app
 */

console.log("App Started");

import * as messaging from "messaging";

console.log("App Started");
var document = require('document');

function messageCompanion() {
    var data = {'key' : "123"}
      if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
          //Send object as JSON string to companion
          console.log("APP: Sending data");
          messaging.peerSocket.send(JSON.stringify(data));
      }
};

let btnTR = document.getElementById("btn-tr");
let btnTL = document.getElementById("btn-tl");
let btnBR = document.getElementById("btn-br");
let btnBL = document.getElementById("btn-bl");

let emotionBtnTL = document.getElementById("emotion-btn-tl");
let emotionBtnTR = document.getElementById("emotion-btn-tr");
let emotionBtnBL = document.getElementById("emotion-btn-bl");
let emotionBtnBR = document.getElementById("emotion-btn-br");

let screenBreathe = document.getElementById("screen-breathe");
let screenActivity = document.getElementById("screen-activity");
let screenCalendar = document.getElementById("screen-calendar");
let screenHelpline = document.getElementById("screen-helpline");

let popupMedReminder = document.getElementById("popup-med-reminder");
// let popupMoodMeter = document.getElementById("popup-mood-meter");

let btnMED = document.getElementById("btn-med-reminder");


function isInMainMenu() {
  return btnTR.style.visibility == "visible" 
      && btnTL.style.visibility == "visible"
      && btnBR.style.visibility == "visible"
      && btnBL.style.visibility == "visible";
}

function changeScreen(screen) {
  btnTR.style.visibility = "hidden";
  btnTL.style.visibility = "hidden";
  btnBR.style.visibility = "hidden";
  btnBL.style.visibility = "hidden";
  
  // make screen visible
  screen.style.visibility = "visible";
}

function returnToMainMenu() {
  // hide all screens
  screenBreathe.style.visibility = "hidden";
  screenActivity.style.visibility = "hidden";
  screenCalendar.style.visibility = "hidden";
  screenHelpline.style.visibility = "hidden";
  
  emotionBtnTR.style.visibility = "hidden";
  emotionBtnTL.style.visibility = "hidden";
  emotionBtnBR.style.visibility = "hidden";
  emotionBtnBL.style.visibility = "hidden";
 
  btnTR.style.visibility = "visible";
  btnTL.style.visibility = "visible";
  btnBR.style.visibility = "visible";
  btnBL.style.visibility = "visible";
  
  popupMedReminder.style.visibility = "hidden";
  // popupMoodMeter.style.visibility = "hidden";
}

function preparePopUp() {
  btnTR.style.visibility = "hidden";
  btnTL.style.visibility = "hidden";
  btnBR.style.visibility = "hidden";
  btnBL.style.visibility = "hidden";
  
  emotionBtnTR.style.visibility = "hidden";
  emotionBtnTL.style.visibility = "hidden";
  emotionBtnBR.style.visibility = "hidden";
  emotionBtnBL.style.visibility = "hidden";
  
  screenBreathe.style.visibility = "hidden";
  screenActivity.style.visibility = "hidden";
  screenCalendar.style.visibility = "hidden";
  screenHelpline.style.visibility = "hidden";
}

function popUpEmotion() {
  preparePopUp();
  emotionBtnTR.style.visibility = "visible";
  emotionBtnTL.style.visibility = "visible";
  emotionBtnBR.style.visibility = "visible";
  emotionBtnBL.style.visibility = "visible";
  
  // popupMedReminder.style.visibility = "visible";
}

function popUpMoodMeter() {
  preparePopUp();
  popupMoodMeter.style.visibility = "visible";
}

btnTR.onclick = function() {
  changeScreen(screenActivity);
}
btnTL.onclick = function() {
  // changeScreen(screenBreathe);
  
  // TO remove
  popUpEmotion();
}
btnBR.onclick = function() {
  changeScreen(screenHelpline);
}
btnBL.onclick = function() {
  changeScreen(screenCalendar);
}

emotionBtnBR.onclick = function() {
  messageCompanion();
}

// make back btn go back to main menu
document.onkeypress = function(e) {
  console.log("Key pressed: " + e.key);
  if (e.key == "back" && !isInMainMenu()) {
    e.preventDefault();
    returnToMainMenu();
  }
}