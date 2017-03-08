var sample_string = 'sample.png?123';
var sample_string2 = 'sample.png?v=1.2.3';

function string_replace (input_string, version) {
	var result = '';

	// abc?123 => abc
	result = input_string.replace(/png\?[0-9]+/gi, 'png');
	//console.log(result);

	// abc?v=1.2.3 => abc
	result = result.replace(/png\?v=[0-9]+.[0-9]+.[0-9]+/gi, 'png');
	//console.log(result);

	// abc => abc?v=4.5.6
	result = result.replace(/png/gi, 'png?' + version);
	//console.log(result);
	return result;
}

var version = '4.5.6';
console.log(string_replace(sample_string, version));
console.log(string_replace(sample_string2, version));
