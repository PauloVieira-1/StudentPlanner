/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ // The require scope
  /******/ var __webpack_require__ = {};
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
  __webpack_require__.r(__webpack_exports__);
  var _this = undefined;
  chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.create({
      url: "index.html",
    });
  });
  var createNotification = function createNotification(message) {
    chrome.notifications.create({
      title: "TEST",
      message: message,
      type: "basic",
      iconUrl: "Logo1.png",
    });
  };
  chrome.runtime.onMessage.addListener(function (request) {
    console.log(request.message);
    if (request.event === "onActivation") {
      createNotification(request.message);
      _this.registration.showNotification("Test", {
        body: "test",
      });
    }
  });
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTkFBLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBQyxVQUFDQyxHQUFHLEVBQUs7RUFDM0NKLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDakJDLEdBQUcsRUFBRTtFQUNQLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLE9BQU8sRUFBSztFQUN0Q1QsTUFBTSxDQUFDVSxhQUFhLENBQUNKLE1BQU0sQ0FBQztJQUM1QkssS0FBSyxFQUFFLE1BQU07SUFDYkYsT0FBTyxFQUFQQSxPQUFPO0lBQ1BHLElBQUksRUFBRSxPQUFPO0lBQ1hDLE9BQU8sRUFBRTtFQUNaLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRGIsTUFBTSxDQUFDYyxPQUFPLENBQUNDLFNBQVMsQ0FBQ1osV0FBVyxDQUFDLFVBQUNhLE9BQU8sRUFBSztFQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ1AsT0FBTyxDQUFDO0VBRTVCLElBQUlPLE9BQU8sQ0FBQ0csS0FBSyxLQUFLLGNBQWMsRUFBRTtJQUNwQ1gsa0JBQWtCLENBQUNRLE9BQU8sQ0FBQ1AsT0FBTyxDQUFDO0lBQ25DVyxLQUFJLENBQUNDLFlBQVksQ0FBQ0MsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO01BQ3pDQyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSjtBQUVGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbiAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICB1cmw6IFwiaW5kZXguaHRtbFwiLFxuICB9KTtcbn0pO1xuXG5jb25zdCBjcmVhdGVOb3RpZmljYXRpb24gPSAobWVzc2FnZSkgPT4ge1xuICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xuXHRcdHRpdGxlOiBcIlRFU1RcIixcblx0XHRtZXNzYWdlLFxuXHRcdHR5cGU6IFwiYmFzaWNcIixcbiAgICBpY29uVXJsOiBcIkxvZ28xLnBuZ1wiLFxuXHR9KTtcbn07XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCkgPT4ge1xuICBjb25zb2xlLmxvZyhyZXF1ZXN0Lm1lc3NhZ2UpO1xuXG4gIGlmIChyZXF1ZXN0LmV2ZW50ID09PSBcIm9uQWN0aXZhdGlvblwiKSB7XG4gICAgY3JlYXRlTm90aWZpY2F0aW9uKHJlcXVlc3QubWVzc2FnZSk7XG4gICAgdGhpcy5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbihcIlRlc3RcIiwge1xuICAgICAgYm9keTogXCJ0ZXN0XCJcbiAgICB9KTtcbiAgfVxuICBcbn0pOyJdLCJuYW1lcyI6WyJjaHJvbWUiLCJhY3Rpb24iLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsInRhYiIsInRhYnMiLCJjcmVhdGUiLCJ1cmwiLCJjcmVhdGVOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwibm90aWZpY2F0aW9ucyIsInRpdGxlIiwidHlwZSIsImljb25VcmwiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsIl90aGlzIiwicmVnaXN0cmF0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9
