let hidden = false;

document.querySelector('.hamburger-wrapper').addEventListener('click', () => {
	document.querySelector('.hamburger-menu').classList.toggle('animate');

	const el = document.querySelector('.sidebar');

	if (hidden) {
		hidden = false;
		el.style.transform = 'translate(-100%, 0)';
	} else if (!hidden) {
		hidden = true;
		el.style.transform = 'translate(0, 0)';
	}
});
