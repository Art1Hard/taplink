const initLoading = () => {
	window.addEventListener("load", () => {
		const loader = document.querySelector(".loader");
		setTimeout(() => {
			document.querySelector("main").style.opacity = "1";

			loader.classList.remove("loader--show");
			document.body.classList.remove("locked");
			document.body.classList.add("snowflake--active");
		}, 1500);
	});
};

export default initLoading;
