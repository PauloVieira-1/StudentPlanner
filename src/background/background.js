chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: "index.html",  
  });
});

/**
 * @param {Date} date -
 */
const createAlarm = (date, time) => {
  
  console.log(date);
  console.log(time);

  const dateTime = new Date(`${date}T${time}:00`).getTime();
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
  
  if (request.event === "sendDate") {
    createAlarm(request.date, request.time);
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