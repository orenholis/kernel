export function randomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export function randomElement(array) {
	return array[randomInt(array.length)];
}

export function randomSubset(array, size) {
	return array
		.map(a => [a, Math.random()])
		.sort((a, b) => a[1] - b[1])
		.slice(0, Math.min(array.length, size))
		.map(a => a[0]);
}
function removeHookCommas(text){
	const withoutDiacritics = ["e", "s", "c", "r", "z", "y", "a", "i", "e", "u", "u", "o", "y", "t", "z", "d", "n"];
	const withDiacritics = ["ě", "š", "č", "ř", "ž", "ý", "á", "í", "é", "ú", "ů", "ó", "ý", "ť", "ž", "ď", "ň"];
	let clearedText = "";
	for(let i=0;i < text.length; i++){
		const letter = text[i];
		const index = withDiacritics.indexOf(letter);
		if(index >= 0){
			clearedText += withoutDiacritics[index];
		} else {
			clearedText += text[i];
		}
	}
	return clearedText;
}
export function compareItems(a, b){
	const aLower = removeHookCommas(a.toLowerCase());
	const bLower = removeHookCommas(b.toLowerCase());
	return aLower.indexOf(bLower) >= 0;
}