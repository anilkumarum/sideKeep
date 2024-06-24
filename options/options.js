const eId = document.getElementById.bind(document);
const setLang = (/** @type {string} */ key) => (eId(key).textContent = chrome.i18n.getMessage(key));
setLang("open_keep_in");
setLang("side_panel");
setLang("popup_window");

const openPanelConfig = eId("open_panel_config");
openPanelConfig.addEventListener("change", ({ target }) => {
	const openSidePanel = target.value === "sidePanel";
	chrome.sidePanel
		.setPanelBehavior({ openPanelOnActionClick: openSidePanel })
		.catch((error) => alert(error.message));
});

const openSidePanel = (await chrome.sidePanel.getPanelBehavior()).openPanelOnActionClick;
openSidePanel || (document.querySelector('input[value="popup"]').checked = true);
