describe("Prime",function(){
	
	beforeEach(function(){
		module(function($provide){
			$provide.service('checkPrimeNumberMockService',function(){
				var service = this;
				service.checkPrimeNumber=function(num){
					console.log("In service checkPrimeNumber mock service");
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
			});
		});

		module('ControllerTestingDemoApp');
	});
	
	var $controller;
	var ctrlTesting;

	beforeEach(inject(function(_$controller_,checkPrimeNumberMockService){
		$controller=_$controller_;
		ctrlTesting=$controller('testController',{primeNumberService:checkPrimeNumberMockService});
		ctrlTesting.Number=10;
	}));

	it('It should be No Prime Number',function () {
		ctrlTesting.checkNumber()
		expect(ctrlTesting.NumberType).toBe('non prime number');
	});

	it('It should be Prime Number',function () {
		ctrlTesting.Number=13;
		ctrlTesting.checkNumber()
		expect(ctrlTesting.NumberType).toBe('Prime number');
	});

});