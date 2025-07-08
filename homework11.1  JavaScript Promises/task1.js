function printTextDelay(text, delay) {
	setTimeout(function () {
		console.log(text);
	}, delay);
}

const timerId = printTextDelay('Затримка на 2 секунди', 2000);
clearTimeout(timerId);
