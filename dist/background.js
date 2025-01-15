/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.create({
    url: "index.html"
  });
});
var createNotification = function createNotification(message) {
  chrome.notifications.create({
    title: "TEST",
    message: message,
    type: "basic",
    iconUrl: "Logo1.png"
  });
};
chrome.runtime.onMessage.addListener(function (request) {
  console.log(request.message);
  if (request.event === "onActivation") {
    createNotification(request.message);
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQUEsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLFVBQUNDLEdBQUcsRUFBSztFQUMzQ0osTUFBTSxDQUFDSyxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUNqQkMsR0FBRyxFQUFFO0VBQ1AsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsT0FBTyxFQUFLO0VBQ3RDVCxNQUFNLENBQUNVLGFBQWEsQ0FBQ0osTUFBTSxDQUFDO0lBQzVCSyxLQUFLLEVBQUUsTUFBTTtJQUNiRixPQUFPLEVBQVBBLE9BQU87SUFDUEcsSUFBSSxFQUFFLE9BQU87SUFDWEMsT0FBTyxFQUFFO0VBQ1osQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEYixNQUFNLENBQUNjLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDWixXQUFXLENBQUMsVUFBQ2EsT0FBTyxFQUFLO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDUCxPQUFPLENBQUM7RUFFNUIsSUFBSU8sT0FBTyxDQUFDRyxLQUFLLEtBQUssY0FBYyxFQUFFO0lBQ3BDWCxrQkFBa0IsQ0FBQ1EsT0FBTyxDQUFDUCxPQUFPLENBQUM7RUFDckM7QUFFRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gIGNocm9tZS50YWJzLmNyZWF0ZSh7XG4gICAgdXJsOiBcImluZGV4Lmh0bWxcIixcbiAgfSk7XG59KTtcblxuY29uc3QgY3JlYXRlTm90aWZpY2F0aW9uID0gKG1lc3NhZ2UpID0+IHtcbiAgY2hyb21lLm5vdGlmaWNhdGlvbnMuY3JlYXRlKHtcblx0XHR0aXRsZTogXCJURVNUXCIsXG5cdFx0bWVzc2FnZSxcblx0XHR0eXBlOiBcImJhc2ljXCIsXG4gICAgaWNvblVybDogXCJMb2dvMS5wbmdcIixcblx0fSk7XG59O1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QpID0+IHtcbiAgY29uc29sZS5sb2cocmVxdWVzdC5tZXNzYWdlKTtcblxuICBpZiAocmVxdWVzdC5ldmVudCA9PT0gXCJvbkFjdGl2YXRpb25cIikge1xuICAgIGNyZWF0ZU5vdGlmaWNhdGlvbihyZXF1ZXN0Lm1lc3NhZ2UpO1xuICB9XG4gIFxufSk7Il0sIm5hbWVzIjpbImNocm9tZSIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwidGFiIiwidGFicyIsImNyZWF0ZSIsInVybCIsImNyZWF0ZU5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJub3RpZmljYXRpb25zIiwidGl0bGUiLCJ0eXBlIiwiaWNvblVybCIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==