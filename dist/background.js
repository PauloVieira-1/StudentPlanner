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
var createAlarm = function createAlarm(date) {
  var dateTime = new Date(date).getTime();
  console.log(dateTime);
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
  if (request.event === "onActivation") {
    createNotification(request.message);
    sendResponse({
      status: "Notification triggered"
    });
  }
  if (request.event === "sendDate") {
    // console.log(`WORKED: ${request.date}`);
    createAlarm(request.date);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQUEsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLFVBQUNDLEdBQUcsRUFBSztFQUMzQ0osTUFBTSxDQUFDSyxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUNqQkMsR0FBRyxFQUFFO0VBQ1AsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxJQUFJLEVBQUs7RUFFNUIsSUFBTUMsUUFBUSxHQUFJLElBQUlDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLENBQUVHLE9BQU8sQ0FBQyxDQUFDO0VBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osUUFBUSxDQUFDO0VBQ3JCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osUUFBUSxDQUFDO0VBRXJCVixNQUFNLENBQUNlLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDLGNBQWMsRUFBRTtJQUNuQ1UsSUFBSSxFQUFFTjtFQUNWLENBQUMsQ0FBQztBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBVixNQUFNLENBQUNlLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDZCxXQUFXLENBQUMsVUFBQ2UsS0FBSyxFQUFLO0VBQzNDLElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxLQUFLLGNBQWMsRUFBRTtJQUNsQ0Msa0JBQWtCLENBQUMsTUFBTSxDQUFDO0VBQzNCO0FBQ0YsQ0FBQyxDQUFDO0FBRUZwQixNQUFNLENBQUNxQixPQUFPLENBQUNDLFNBQVMsQ0FBQ25CLFdBQVcsQ0FBQyxVQUFDb0IsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBSztFQUN0RVosT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVTLE9BQU8sQ0FBQztFQUV6QyxJQUFJQSxPQUFPLENBQUNHLEtBQUssS0FBSyxjQUFjLEVBQUU7SUFDcENOLGtCQUFrQixDQUFDRyxPQUFPLENBQUNJLE9BQU8sQ0FBQztJQUNuQ0YsWUFBWSxDQUFDO01BQUVHLE1BQU0sRUFBRTtJQUF5QixDQUFDLENBQUM7RUFDcEQ7RUFDQSxJQUFJTCxPQUFPLENBQUNHLEtBQUssS0FBSyxVQUFVLEVBQUU7SUFDaEM7SUFDQWxCLFdBQVcsQ0FBQ2UsT0FBTyxDQUFDZCxJQUFJLENBQUM7SUFDekJnQixZQUFZLENBQUM7TUFBRUcsTUFBTSxFQUFFO0lBQXlCLENBQUMsQ0FBQztFQUFDO0FBQ3JELENBQUMsQ0FBQzs7QUFFRjtBQUNGO0FBQ0E7QUFDQTs7QUFFRSxJQUFNUixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJTyxPQUFPLEVBQUs7RUFDdEMzQixNQUFNLENBQUM2QixhQUFhLENBQUN2QixNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ2xDd0IsS0FBSyxFQUFFLE1BQU07SUFDYkgsT0FBTyxFQUFQQSxPQUFPO0lBQ1BJLElBQUksRUFBRSxPQUFPO0lBQ2JDLE9BQU8sRUFBRSxXQUFXO0lBQ3BCQyxRQUFRLEVBQUU7RUFDWixDQUFDLEVBQUUsWUFBTTtJQUNQcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICB1cmw6IFwiaW5kZXguaHRtbFwiLCAgXG4gIH0pO1xufSk7XG5cbi8qKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIC1cbiAqL1xuY29uc3QgY3JlYXRlQWxhcm0gPSAoZGF0ZSkgPT4ge1xuICBcbiAgY29uc3QgZGF0ZVRpbWUgPSAobmV3IERhdGUoZGF0ZSkpLmdldFRpbWUoKTtcbiAgY29uc29sZS5sb2coZGF0ZVRpbWUpO1xuICBjb25zb2xlLmxvZyhkYXRlVGltZSk7XG5cbiAgY2hyb21lLmFsYXJtcy5jcmVhdGUoJ05PVElGSUNBVElPTicsIHtcbiAgICB3aGVuOiBkYXRlVGltZSwgIFxufSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWxhcm1cbiAqL1xuXG5jaHJvbWUuYWxhcm1zLm9uQWxhcm0uYWRkTGlzdGVuZXIoKGFsYXJtKSA9PiB7XG4gIGlmIChhbGFybS5uYW1lID09PSAnTk9USUZJQ0FUSU9OJykge1xuICAgY3JlYXRlTm90aWZpY2F0aW9uKFwiVGVzdFwiKTtcbiAgfVxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBtZXNzYWdlOlwiLCByZXF1ZXN0KTtcbiAgXG4gIGlmIChyZXF1ZXN0LmV2ZW50ID09PSBcIm9uQWN0aXZhdGlvblwiKSB7XG4gICAgY3JlYXRlTm90aWZpY2F0aW9uKHJlcXVlc3QubWVzc2FnZSk7XG4gICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiBcIk5vdGlmaWNhdGlvbiB0cmlnZ2VyZWRcIiB9KTtcbiAgfVxuICBpZiAocmVxdWVzdC5ldmVudCA9PT0gXCJzZW5kRGF0ZVwiKSB7XG4gICAgLy8gY29uc29sZS5sb2coYFdPUktFRDogJHtyZXF1ZXN0LmRhdGV9YCk7XG4gICAgY3JlYXRlQWxhcm0ocmVxdWVzdC5kYXRlKTtcbiAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6IFwiTm90aWZpY2F0aW9uIHRyaWdnZXJlZFwiIH0pO31cbiAgfSk7XG4gIFxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFxuICAgKi9cbiAgXG4gIGNvbnN0IGNyZWF0ZU5vdGlmaWNhdGlvbiA9IChtZXNzYWdlKSA9PiB7XG4gICAgY2hyb21lLm5vdGlmaWNhdGlvbnMuY3JlYXRlKFwidGVzdFwiLCB7XG4gICAgICB0aXRsZTogXCJURVNUXCIsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdHlwZTogXCJiYXNpY1wiLFxuICAgICAgaWNvblVybDogXCJMb2dvMS5wbmdcIiwgIFxuICAgICAgcHJpb3JpdHk6IDIsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gY3JlYXRlZFwiKTtcbiAgICB9KTtcbiAgfTsiXSwibmFtZXMiOlsiY2hyb21lIiwiYWN0aW9uIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJ0YWJzIiwiY3JlYXRlIiwidXJsIiwiY3JlYXRlQWxhcm0iLCJkYXRlIiwiZGF0ZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJsb2ciLCJhbGFybXMiLCJ3aGVuIiwib25BbGFybSIsImFsYXJtIiwibmFtZSIsImNyZWF0ZU5vdGlmaWNhdGlvbiIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZXZlbnQiLCJtZXNzYWdlIiwic3RhdHVzIiwibm90aWZpY2F0aW9ucyIsInRpdGxlIiwidHlwZSIsImljb25VcmwiLCJwcmlvcml0eSJdLCJzb3VyY2VSb290IjoiIn0=