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

/**
 * @param {Date} date -
 */
var createAlarm = function createAlarm(date, time) {
  console.log(date);
  console.log(time);
  var dateTime = new Date("".concat(date, "T").concat(time, ":00")).getTime();
  console.log(dateTime);
  chrome.alarms.create('NOTIFICATION', {
    when: dateTime
  });
};

/**
 * @param {string} alarm
 */

chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === 'NOTIFICATION') {
    createNotification("Test");
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Received message:", request);
  if (request.event === "sendDate") {
    createAlarm(request.date, request.time);
    sendResponse({
      status: "Notification triggered"
    });
  }
});

/**
 * 
 * @param {String} message 
 */

var createNotification = function createNotification(message) {
  chrome.notifications.create("test", {
    title: "TEST",
    message: message,
    type: "basic",
    iconUrl: "Logo1.png",
    priority: 2
  }, function () {
    console.log("Notification created");
  });
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQUEsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLFVBQUNDLEdBQUcsRUFBSztFQUMzQ0osTUFBTSxDQUFDSyxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUNqQkMsR0FBRyxFQUFFO0VBQ1AsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxJQUFJLEVBQUVDLElBQUksRUFBSztFQUVsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztFQUNqQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUVqQixJQUFNRyxRQUFRLEdBQUcsSUFBSUMsSUFBSSxJQUFBQyxNQUFBLENBQUlOLElBQUksT0FBQU0sTUFBQSxDQUFJTCxJQUFJLFFBQUssQ0FBQyxDQUFDTSxPQUFPLENBQUMsQ0FBQztFQUN6REwsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQztFQUdyQmIsTUFBTSxDQUFDaUIsTUFBTSxDQUFDWCxNQUFNLENBQUMsY0FBYyxFQUFFO0lBQ25DWSxJQUFJLEVBQUVMO0VBQ1YsQ0FBQyxDQUFDO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUFiLE1BQU0sQ0FBQ2lCLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDaEIsV0FBVyxDQUFDLFVBQUNpQixLQUFLLEVBQUs7RUFDM0MsSUFBSUEsS0FBSyxDQUFDQyxJQUFJLEtBQUssY0FBYyxFQUFFO0lBQ2xDQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7RUFDM0I7QUFDRixDQUFDLENBQUM7QUFFRnRCLE1BQU0sQ0FBQ3VCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDckIsV0FBVyxDQUFDLFVBQUNzQixPQUFPLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFLO0VBQ3RFaEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVhLE9BQU8sQ0FBQztFQUV6QyxJQUFJQSxPQUFPLENBQUNHLEtBQUssS0FBSyxVQUFVLEVBQUU7SUFDaENwQixXQUFXLENBQUNpQixPQUFPLENBQUNoQixJQUFJLEVBQUVnQixPQUFPLENBQUNmLElBQUksQ0FBQztJQUN2Q2lCLFlBQVksQ0FBQztNQUFFRSxNQUFNLEVBQUU7SUFBeUIsQ0FBQyxDQUFDO0VBQUM7QUFDckQsQ0FBQyxDQUFDOztBQUVGO0FBQ0Y7QUFDQTtBQUNBOztBQUVFLElBQU1QLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlRLE9BQU8sRUFBSztFQUN0QzlCLE1BQU0sQ0FBQytCLGFBQWEsQ0FBQ3pCLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDbEMwQixLQUFLLEVBQUUsTUFBTTtJQUNiRixPQUFPLEVBQVBBLE9BQU87SUFDUEcsSUFBSSxFQUFFLE9BQU87SUFDYkMsT0FBTyxFQUFFLFdBQVc7SUFDcEJDLFFBQVEsRUFBRTtFQUNaLENBQUMsRUFBRSxZQUFNO0lBQ1B4QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztFQUNyQyxDQUFDLENBQUM7QUFDSixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICBjaHJvbWUudGFicy5jcmVhdGUoe1xuICAgIHVybDogXCJpbmRleC5odG1sXCIsICBcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgLVxuICovXG5jb25zdCBjcmVhdGVBbGFybSA9IChkYXRlLCB0aW1lKSA9PiB7XG4gIFxuICBjb25zb2xlLmxvZyhkYXRlKTtcbiAgY29uc29sZS5sb2codGltZSk7XG5cbiAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShgJHtkYXRlfVQke3RpbWV9OjAwYCkuZ2V0VGltZSgpO1xuICBjb25zb2xlLmxvZyhkYXRlVGltZSk7XG4gIFxuXG4gIGNocm9tZS5hbGFybXMuY3JlYXRlKCdOT1RJRklDQVRJT04nLCB7XG4gICAgd2hlbjogZGF0ZVRpbWUsICBcbn0pXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGFsYXJtXG4gKi9cblxuY2hyb21lLmFsYXJtcy5vbkFsYXJtLmFkZExpc3RlbmVyKChhbGFybSkgPT4ge1xuICBpZiAoYWxhcm0ubmFtZSA9PT0gJ05PVElGSUNBVElPTicpIHtcbiAgIGNyZWF0ZU5vdGlmaWNhdGlvbihcIlRlc3RcIik7XG4gIH1cbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbWVzc2FnZTpcIiwgcmVxdWVzdCk7XG4gIFxuICBpZiAocmVxdWVzdC5ldmVudCA9PT0gXCJzZW5kRGF0ZVwiKSB7XG4gICAgY3JlYXRlQWxhcm0ocmVxdWVzdC5kYXRlLCByZXF1ZXN0LnRpbWUpO1xuICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogXCJOb3RpZmljYXRpb24gdHJpZ2dlcmVkXCIgfSk7fVxuICB9KTtcbiAgXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgXG4gICAqL1xuICBcbiAgY29uc3QgY3JlYXRlTm90aWZpY2F0aW9uID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoXCJ0ZXN0XCIsIHtcbiAgICAgIHRpdGxlOiBcIlRFU1RcIixcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0eXBlOiBcImJhc2ljXCIsXG4gICAgICBpY29uVXJsOiBcIkxvZ28xLnBuZ1wiLCAgXG4gICAgICBwcmlvcml0eTogMixcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBjcmVhdGVkXCIpO1xuICAgIH0pO1xuICB9OyJdLCJuYW1lcyI6WyJjaHJvbWUiLCJhY3Rpb24iLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsInRhYiIsInRhYnMiLCJjcmVhdGUiLCJ1cmwiLCJjcmVhdGVBbGFybSIsImRhdGUiLCJ0aW1lIiwiY29uc29sZSIsImxvZyIsImRhdGVUaW1lIiwiRGF0ZSIsImNvbmNhdCIsImdldFRpbWUiLCJhbGFybXMiLCJ3aGVuIiwib25BbGFybSIsImFsYXJtIiwibmFtZSIsImNyZWF0ZU5vdGlmaWNhdGlvbiIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZXZlbnQiLCJzdGF0dXMiLCJtZXNzYWdlIiwibm90aWZpY2F0aW9ucyIsInRpdGxlIiwidHlwZSIsImljb25VcmwiLCJwcmlvcml0eSJdLCJzb3VyY2VSb290IjoiIn0=