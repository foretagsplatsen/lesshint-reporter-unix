'use strict';

module.exports = {
	name: 'unix',
	report: function report(results) {
		results.forEach(function(result) {
			var output = '';
			output += process.cwd() + '/' + result.fullPath;

			if (result.line && result.column) {
				output += ':' + result.line;
				output += ':' + result.column;
			}

			output += ': ';
			output += result.message;
			output += ' [';

			if (result.severity === 'error') {
				output += 'Error/';
			} else {
				output += 'Warning/';
			}

			output += result.linter;
			output += ']';

			console.log(output);
		});
	}
};
