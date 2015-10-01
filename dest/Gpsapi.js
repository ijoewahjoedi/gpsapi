var exec = require('cordova/exec');
function Gpsapi() { 
  console.log("Gpsapi.js: is created");
}
Gpsapi.prototype.echo = function(aString){
  console.log("Gpsapi.js: echo");
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
