// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {

	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) { 
			alert('our form is amazing');
		}

	};

});

//create angular app
var ppmApp = angular.module('ppmApp', []);

// create angular controller
ppmApp.controller('mainController', function($scope,$http) {
		// http get request to read CSV file content
		$http.get('samplePPM.csv').success($scope.processData);
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
		
		
	});

	
