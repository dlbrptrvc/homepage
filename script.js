let imgs = Array.from(document.querySelectorAll('.projectImage'));
imgs.forEach((img) => {
	img.addEventListener('click', (e) => {
		let link =
			e.target.parentElement.querySelector('.projectLinks').children[0];
		link.click();
	});
});
