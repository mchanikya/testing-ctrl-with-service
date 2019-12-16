(function () {
	'use strict';

	angular.module('ControllerTestingDemoApp',[])
	.controller('testController',testController)
	.service('primeNumberService',primeNumberService);


	testController.$inject=['primeNumberService'];
	function testController(primeNumberService) {
		var $ctrl=this;
		$ctrl.Number='';
		$ctrl.NumberType='';
		$ctrl.checkNumber= function(){
			$ctrl.NumberType= primeNumberService.checkPrimeNumber($ctrl.Number);
		};
	}


	function primeNumberService() {
		var service=this;
		service.checkPrimeNumber=function(num){
			console.log("In service checkPrimeNumber");
			var flag=0;
			for (var i = 2; i <= num / 2 ; i++) {
				if (num%i==0) {
					flag=1;
					break;
				}
			}
			// console.log("Number Type "+$ctrl.NumberType+" Flag: "+$ctrl.flag);
			if (flag == 0) {
				return 'Prime number';
			}else{
				return 'non prime number';
			}
		}
	}

})();