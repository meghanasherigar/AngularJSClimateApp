myapp.service("climateService", function ($q, $http) {

	var temp;
	var apiKey = "52f6bcc9fafb17fee9fdab6c92ab5be1";
	this.getCities = function (cityName) {
		if (cityName != undefined) {
			var d = $q.defer();
			var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
			console.log(url);
			$http.get(url).
			then(function success(result) {
				d.resolve(result);
			}, function error(result) {
				d.reject(result)
			})
			return d.promise;
		}
	}
	// var API_KEY = "AIzaSyC1yJfO1ZbT3Z6ZQ5lJ-vH2pt4sV1y9_3M";
	// this.getReferenceImages = function (cityName) {
    // var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=sights+in+" + cityName + "&key=" + API_KEY;

	// 	console.log(url);
	// 	$http.get(url).
	// 	then(function success(result) {
	// 		d.resolve(result);
	// 	}, function error(result) {
	// 		d.reject(result)
	// 	})
	// 	return d.promise;

	// }
	// this.getImages = function (refernce) {
	// 	console.log(refernce);
    // 	var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + refernce + "&key=" + API_KEY;
	// 	console.log(url);
	// 	$http.get(url).
	// 	then(function success(result) {
	// 		d.resolve(result);
	// 	}, function error(result) {
	// 		d.reject(result)
	// 	})
	// 	return d.promise;

	// }

	this.setData = function (data) {
		this.temp = data;
	}
	this.getData = function () {
		return this.temp;
	}


})