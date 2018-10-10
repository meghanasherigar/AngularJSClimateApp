myapp.controller("climateController",function(climateService,$scope){
   
     $scope.showClimateDetails=function(cityName){
        console.log(cityName);
        climateService.getCities(cityName).then(function(response){
        $scope.citieslist=response.data;
        console.log($scope.citieslist);

        })
    }
    $scope.showClimateDetails("Pune");

    // $scope.getCityImages=function(cityName){
    //     climateService.getReferenceImages(cityName).then(function(response){
    //     $scope.cityImages=response.data;
    //     console.log($scope.cityImages);
    //     var photoReference=$scope.cityImages.results[1].photos[0].photo_reference;
    //     // climateService.setData(photoReference);
    //     // var reference=climateService.getData();
    //     // console.log(photoReference);
    //     climateService.getImages(photoReference).then(function(response){
    //     $scope.cityImages=response.data;
    //     console.log($scope.cityImages);
    // })
    //   })
    // }
    
    
})