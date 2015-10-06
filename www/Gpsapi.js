// var exec = require('cordova/exec');
// function Gpsapi() { 
//   console.log("Gpsapi.js: is created");
// }
// // Gpsapi.prototype.getLocation = function(aString){
//   console.log("Gpsapi.js: getLocation");
//   exec(
//       function(result){ 
//         /*alert("OK" + reply);*/ 
//       }, 
//       function(result){ 
//         /*alert("Error" + reply);*/ 
//       },
//       "Gpsapi",aString,[]
//       );
// } 
// var gpsapi = new Gpsapi(); 
// module.exports = gpsapi;
//


// // cordova.define('cordova/plugin/Gpsapi', function(require, export, module){
//   var exec = require('cordova/exec');

//   var Gpsapi = function() {};

//   Gpsapi.prototype.getLocation = function(onSuccess, onFailed){
//     exec(onSuccess, onFailed, 'Gpsapi', 'getLocation', []);
//   }

//   module.exports = new Gpsapi();

// });
//

/*global cordova, module*/

module.exports = {
    getLocation : function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Gpsapi", "getLocation", []);
    }
};
