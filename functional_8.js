
function duckCount() {
	let identifier = Array.from(arguments).map(arg => arg.hasOwnProperty('quack'));
	return identifier.reduce((a,b) => a+b, 0);
}
    
module.exports = duckCount
