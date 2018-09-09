document.getElementById('output').style.visibility = 'hidden'; // if no data is entered, the cards will be hidden

document.getElementById('lbsInput').addEventListener('input', e => {
	document.getElementById('output').style.visibility = 'visible'; // on input the cards will appear
	let lbs = e.target.value;

	// grams conversion with max decimals of 2
	document.getElementById('gramsOutput').innerHTML = (lbs / 0.0022046).toFixed(
		2
	);

	// kilograms conversion with max decimals of 2
	document.getElementById('kgOutput').innerHTML = (lbs / 2.2046).toFixed(2);

	// ounces conversion with max decimals of 2
	document.getElementById('ozOutput').innerHTML = (lbs * 16).toFixed(2);
});
