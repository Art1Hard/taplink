import initLoading from "./modules/loading.js";
import isWebp from "./modules/webp.js";

isWebp();
initLoading();

// Интервальная проверка для офлайн режима
setInterval(() => {
	if (navigator.onLine === false) {
		document.getElementById("online-status").style.display = "block";
	} else {
		document.getElementById("online-status").style.display = "none";
	}
}, 5000);

const taplinks = document.querySelectorAll(".taplink");

taplinks.forEach((taplink) => {
	taplink.addEventListener("click", () => {
		navigator.vibrate([60, 40, 60]);
	});
});
