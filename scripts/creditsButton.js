const ui = global.ui;
ui.addMenuButton("YouTube", "link", () => {
	Core.app.openURI("https://youtube.com/channel/UCCsiSHgli1Q77mLFW1WuWMw")
});
ui.addMenuButton("VK", "link", () => {
	Core.app.openURI("https://vk.com/infernodynamics")
});
ui.addMenuButton("My game", "link", () => {
	Core.app.openURI("https://yadi.sk/d/3RxKEBw-xv_3kQ")
});
ui.onLoad(() => {

});