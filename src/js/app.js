import initLoading from "./modules/loading.js";
import isWebp from "./modules/webp.js";

isWebp();
initLoading();

const taplinks = document.querySelectorAll(".taplink");

taplinks.forEach((taplink) => {
	taplink.addEventListener("click", () => {
		navigator.vibrate([60, 40, 60]);
	});
});
