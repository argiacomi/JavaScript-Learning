const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
	const cats = JSON.parse(catString);

	let total = 0;
	let male = 0;


	for (let cat of cats) {
		if(cat.name != cats[cats.length-1].name){
			motherInfo += `${cat.name}, `
		}else {
			motherInfo += `& ${cat.name}.` 
		}

		total += cat.kittens.length
	
		for(let kitten of cat.kittens){
			if (kitten.gender === 'm'){
				male += 1;
			} 
		}
	}

	kittenInfo = `They have ${total} total kittens, ${male} male and ${total - male} female.`

	para1.textContent = motherInfo;
	para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);