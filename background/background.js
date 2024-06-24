const setInstallation = ({ reason }) => {
	chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error));
	chrome.runtime.openOptionsPage();
};

// installation setup
chrome.runtime.onInstalled.addListener(setInstallation);
