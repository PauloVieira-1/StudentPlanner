chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: "index.html",
  });
});

const createNotification = (message) => {
  chrome.notifications.create({
    title: "TEST",
    message,
    type: "basic",
    iconUrl: "Logo1.png",
  });
};

chrome.runtime.onMessage.addListener((request) => {
  console.log(request.message);

  if (request.event === "onActivation") {
    createNotification(request.message);
    this.registration.showNotification("Test", {
      body: "test",
    });
  }
});
