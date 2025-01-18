chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: "index.html",  
  });
});

/**
 * @param {Date} date -
 */
const createAlarm = (date) => {
  
  const dateTime = (new Date(date)).getTime();
  console.log(dateTime);
  console.log(dateTime);

  chrome.alarms.create('NOTIFICATION', {
    when: dateTime,  
})
}

/**
 * @param {string} alarm
 */

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'NOTIFICATION') {
   createNotification("Test");
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received message:", request);
  
  if (request.event === "onActivation") {
    createNotification(request.message);
    sendResponse({ status: "Notification triggered" });
  }
  if (request.event === "sendDate") {
    // console.log(`WORKED: ${request.date}`);
    createAlarm(request.date);
    sendResponse({ status: "Notification triggered" });}
  });
  
  /**
   * 
   * @param {String} message 
   */
  
  const createNotification = (message) => {
    chrome.notifications.create("test", {
      title: "TEST",
      message,
      type: "basic",
      iconUrl: "Logo1.png",  
      priority: 2,
    }, () => {
      console.log("Notification created");
    });
  };