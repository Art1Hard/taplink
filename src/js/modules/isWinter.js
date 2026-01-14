const isWinter = () => {
	const date = new Date();
	const month = date.getMonth() + 1;
	return month >= 12 || month <= 2;
};

export default isWinter;
