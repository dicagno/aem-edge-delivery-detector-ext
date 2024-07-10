chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'updateIcon') {
    const iconPath = message.hasScript ? 'icons/icon_active.png' : 'icons/icon_default.png';
    chrome.action.setIcon({ path: iconPath, tabId: sender.tab.id });
    chrome.action.setTitle({ title: message.hasScript ? "This page runs on AEM Edge Delivery" : "" });
  }
});
