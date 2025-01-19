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
var createAlarm = function createAlarm(date, time, name) {
  var dateTime = new Date("".concat(date, "T").concat(time, ":00")).getTime();
  chrome.alarms.create(name.split(" ").join("_"), {
    when: dateTime
  }, function () {});
};

/**
 * @param {string} alarm
 */

chrome.alarms.onAlarm.addListener(function (alarm) {
  createNotification(alarm.name.split("_").join(" "));
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Received message:", request);
  if (request.event === "sendDate") {
    createAlarm(request.date, request.time, request.reminder);
    sendResponse({
      status: "Notification triggered"
    });
  } else if (request.event === "removeDate") {
    chrome.alarms.clear(request.reminder.split(" ").join("_"));
    sendResponse({
      status: "Notification removed"
    });
  }
});

/**
 * 
 * @param {String} message 
 */

var createNotification = function createNotification(message) {
  chrome.notifications.create("Notification_".concat(message), {
    title: "Class Compass",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQUEsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLFVBQUNDLEdBQUcsRUFBSztFQUMzQ0osTUFBTSxDQUFDSyxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUNqQkMsR0FBRyxFQUFFO0VBQ1AsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFLO0VBRXhDLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxJQUFJLElBQUFDLE1BQUEsQ0FBSUwsSUFBSSxPQUFBSyxNQUFBLENBQUlKLElBQUksUUFBSyxDQUFDLENBQUNLLE9BQU8sQ0FBQyxDQUFDO0VBRXpEZixNQUFNLENBQUNnQixNQUFNLENBQUNWLE1BQU0sQ0FBRUssSUFBSSxDQUFFTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNoREMsSUFBSSxFQUFFUDtFQUNSLENBQUMsRUFBRSxZQUFNLENBRVQsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUFaLE1BQU0sQ0FBQ2dCLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDakIsV0FBVyxDQUFDLFVBQUNrQixLQUFLLEVBQUs7RUFDMUNDLGtCQUFrQixDQUFDRCxLQUFLLENBQUNWLElBQUksQ0FBQ00sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDO0FBRUZsQixNQUFNLENBQUN1QixPQUFPLENBQUNDLFNBQVMsQ0FBQ3JCLFdBQVcsQ0FBQyxVQUFDc0IsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBSztFQUN0RUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUVKLE9BQU8sQ0FBQztFQUV6QyxJQUFJQSxPQUFPLENBQUNLLEtBQUssS0FBSyxVQUFVLEVBQUU7SUFDaEN0QixXQUFXLENBQUNpQixPQUFPLENBQUNoQixJQUFJLEVBQUVnQixPQUFPLENBQUNmLElBQUksRUFBRWUsT0FBTyxDQUFDTSxRQUFRLENBQUM7SUFDekRKLFlBQVksQ0FBQztNQUFFSyxNQUFNLEVBQUU7SUFBeUIsQ0FBQyxDQUFDO0VBQ3BELENBQUMsTUFBTSxJQUFJUCxPQUFPLENBQUNLLEtBQUssS0FBSyxZQUFZLEVBQUU7SUFDekM5QixNQUFNLENBQUNnQixNQUFNLENBQUNpQixLQUFLLENBQUNSLE9BQU8sQ0FBQ00sUUFBUSxDQUFDZCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRFMsWUFBWSxDQUFDO01BQUVLLE1BQU0sRUFBRTtJQUF1QixDQUFDLENBQUM7RUFDbEQ7QUFFQSxDQUFDLENBQUM7O0FBRUY7QUFDRjtBQUNBO0FBQ0E7O0FBRUUsSUFBTVYsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSVksT0FBTyxFQUFLO0VBQ3RDbEMsTUFBTSxDQUFDbUMsYUFBYSxDQUFDN0IsTUFBTSxpQkFBQVEsTUFBQSxDQUFpQm9CLE9BQU8sR0FBSTtJQUNyREUsS0FBSyxFQUFFLGVBQWU7SUFDdEJGLE9BQU8sRUFBUEEsT0FBTztJQUNQRyxJQUFJLEVBQUUsT0FBTztJQUNiQyxPQUFPLEVBQUUsV0FBVztJQUNwQkMsUUFBUSxFQUFFO0VBQ1osQ0FBQyxFQUFFLFlBQU07SUFDUFgsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICB1cmw6IFwiaW5kZXguaHRtbFwiLCAgXG4gIH0pO1xufSk7XG5cbi8qKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIC1cbiAqL1xuY29uc3QgY3JlYXRlQWxhcm0gPSAoZGF0ZSwgdGltZSwgbmFtZSkgPT4ge1xuICBcbiAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShgJHtkYXRlfVQke3RpbWV9OjAwYCkuZ2V0VGltZSgpO1xuICBcbiAgY2hyb21lLmFsYXJtcy5jcmVhdGUoKG5hbWUpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKSwge1xuICAgIHdoZW46IGRhdGVUaW1lLCAgXG4gIH0sICgpID0+IHtcbiAgICAgIFxuICB9KVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBhbGFybVxuICovXG5cbmNocm9tZS5hbGFybXMub25BbGFybS5hZGRMaXN0ZW5lcigoYWxhcm0pID0+IHtcbiAgIGNyZWF0ZU5vdGlmaWNhdGlvbihhbGFybS5uYW1lLnNwbGl0KFwiX1wiKS5qb2luKFwiIFwiKSk7XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG1lc3NhZ2U6XCIsIHJlcXVlc3QpO1xuICBcbiAgaWYgKHJlcXVlc3QuZXZlbnQgPT09IFwic2VuZERhdGVcIikge1xuICAgIGNyZWF0ZUFsYXJtKHJlcXVlc3QuZGF0ZSwgcmVxdWVzdC50aW1lLCByZXF1ZXN0LnJlbWluZGVyKTtcbiAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6IFwiTm90aWZpY2F0aW9uIHRyaWdnZXJlZFwiIH0pO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuZXZlbnQgPT09IFwicmVtb3ZlRGF0ZVwiKSB7XG4gICAgY2hyb21lLmFsYXJtcy5jbGVhcihyZXF1ZXN0LnJlbWluZGVyLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKSk7XG4gICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiBcIk5vdGlmaWNhdGlvbiByZW1vdmVkXCIgfSk7XG4gIH1cbiAgXG4gIH0pO1xuICBcbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBcbiAgICovXG4gIFxuICBjb25zdCBjcmVhdGVOb3RpZmljYXRpb24gPSAobWVzc2FnZSkgPT4ge1xuICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNyZWF0ZShgTm90aWZpY2F0aW9uXyR7bWVzc2FnZX1gLCB7XG4gICAgICB0aXRsZTogXCJDbGFzcyBDb21wYXNzXCIsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdHlwZTogXCJiYXNpY1wiLFxuICAgICAgaWNvblVybDogXCJMb2dvMS5wbmdcIiwgIFxuICAgICAgcHJpb3JpdHk6IDIsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gY3JlYXRlZFwiKTtcbiAgICB9KTtcbiAgfTsiXSwibmFtZXMiOlsiY2hyb21lIiwiYWN0aW9uIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJ0YWIiLCJ0YWJzIiwiY3JlYXRlIiwidXJsIiwiY3JlYXRlQWxhcm0iLCJkYXRlIiwidGltZSIsIm5hbWUiLCJkYXRlVGltZSIsIkRhdGUiLCJjb25jYXQiLCJnZXRUaW1lIiwiYWxhcm1zIiwic3BsaXQiLCJqb2luIiwid2hlbiIsIm9uQWxhcm0iLCJhbGFybSIsImNyZWF0ZU5vdGlmaWNhdGlvbiIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwicmVtaW5kZXIiLCJzdGF0dXMiLCJjbGVhciIsIm1lc3NhZ2UiLCJub3RpZmljYXRpb25zIiwidGl0bGUiLCJ0eXBlIiwiaWNvblVybCIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==