const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

for (let img of imgArray){
	const newImage = document.createElement('img');
	newImage.setAttribute('src', `./images/${img}`);
	thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (e) => displayedImage.setAttribute('src', e.target.getAttribute('src')));

function drkn(e){
	if (btn.getAttribute('class') == 'dark') {
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} else {
		btn.setAttribute('class', 'dark');
		btn.textContent = 'Darken'
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}

btn.addEventListener('click', drkn);
