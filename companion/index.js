import * as messaging from "messaging";
import { me } from "companion"

console.log("Companion Running ");

// The Device application caused the Companion to start
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

if (me.launchReasons.peerAppLaunched) {
  // The Device application caused the Companion to start
  console.log("Device application was launched!")
}

//When the watch sends a message
messaging.peerSocket.onmessage = evt => {
  console.log("Data recieved: " + evt.data); //Log it
  var url = "https://light-n.herokuapp.com/store"; // add a path to the URL
  fetch(url, {
      method : "GET",
      headers : myHeaders}) // Build the request
    .then(function(response){
      return response.json();}) //Extract JSON from the response
    .then(function(data) {             
      console.log("Got response from server:", JSON.stringify(data))}) // Log ig
    .catch(function(error) {
      console.log(error);}); // Log any errors with Fetch
}