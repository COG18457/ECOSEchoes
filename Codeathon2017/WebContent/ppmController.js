function myCtrl($scope, $http) {
	$scope.readCSV = function() {
		// http get request to read CSV file content
		$http.get('/samplePPM.csv').success($scope.processData);
	};

	$scope.processData = function(allText) {
		// split content based on new line
		var allTextLines = allText.split(/\r\n|\n/);
		var headers = allTextLines[0].split(',');
		var lines = [];

		for ( var i = 0; i < allTextLines.length; i++) {
			// split content based on comma
			var data = allTextLines[i].split(',');
			if (data.length == headers.length) {
				var tarr = [];
				for ( var j = 0; j < headers.length; j++) {
					tarr.push(data[j]);
				}
				lines.push(tarr);
			}
		}
		$scope.data = lines;
	};
}