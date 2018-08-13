

function countWords(inputWords) {
	// make array of uniques from inputWords called uniques
	let uniques = inputWords.filter((v, i, a) => a.indexOf(v)===i);
	// make object with keys as elements of uniques and values as sum of booleans achieved from map
	return uniques.reduce((o, key) => Object.assign(o, {[key]: inputWords.map(word => word===key).reduce((a,b) => a+b,0)}), {});
}

    
module.exports = countWords
