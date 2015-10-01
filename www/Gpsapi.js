var exec = require('cordova/exec');
function Gpsapi() { 
  console.log("Gpsapi.js: is created");
}
Gpsapi.prototype.getLocation = function(aString){
  console.log("Gpsapi.js: getLocation");
  exec(
      function(result){ 
        /*alert("OK" + reply);*/ 
      }, 
      function(result){ 
        /*alert("Error" + reply);*/ 
      },
      "Gpsapi",aString,[]
      );
} 
var gpsapi = new Gpsapi(); 
module.exports = gpsapi;
