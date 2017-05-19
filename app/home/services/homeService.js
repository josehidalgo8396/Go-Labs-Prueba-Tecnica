(function(){
	'use strict';
	angular
		.module("GoLabs")
		.factory("HomeService", ["requestService", "$cookies", function(requestService, $cookies) {
			var setLocalStorage = function(data) {
				var valor = 1;
				if(localStorage.getItem('valorLS')) {
					valor = parseInt(localStorage.getItem('valorLS')) + data;
				}
				localStorage.setItem('valorLS', valor);
			};

			var getLocalStorage = function() {
				if(localStorage.getItem('valorLS'))
					return parseInt(localStorage.getItem('valorLS'));
				else	
					return 0;
			};

			var setSessionStorage = function(data) {
				var valor = 1;
				if(sessionStorage.getItem('valorST')) {
					valor = parseInt(sessionStorage.getItem('valorST')) + data;
				}
				sessionStorage.setItem('valorST', valor);
			};

			var getSessionStorage = function() {
				if(sessionStorage.getItem('valorST'))
					return parseInt(sessionStorage.getItem('valorST'));
				else	
					return 0;
			};

			var setCookie = function(data) {
				var valor = 1;
				if($cookies.get('valorC')){
					valor = parseInt($cookies.get('valorC')) + data;
				}
				$cookies.put('valorC', valor);
			};

			var getCookie = function() {
				if($cookies.get('valorC')){
					return parseInt($cookies.get('valorC'))
				}
				else{
					return 0;
				}
			};

			var setBD = function(pData) {
				var link = "/home";
				return requestService.postRequest({data: pData, params: ""}, {url: link}).then(function(result){
	  				return result;
	  			},
	  			function(result){
	  				return result;
	  			});
			};

			var getBD = function(pData) {
				var link = "/home";
				return requestService.getRequest({params: ""}, {url: link}).then(function(result){
	  				return result;
	  			},
	  			function(result){
	  				return result;
	  			});
			};

			return {
				setBD: function(pData) {
					return setBD(pData);
				},
				getBD: function(pData) {
					return getBD(pData);
				},
				setLocalStorage: function(pData) {
					return setLocalStorage(pData);
				},
				getLocalStorage: function() {
					return getLocalStorage();
				},
				setSessionStorage: function(pData) {
					return setSessionStorage(pData);
				},
				getSessionStorage: function() {
					return getSessionStorage();
				},
				setCookie: function(pData) {
					return setCookie(pData);
				},
				getCookie: function() {
					return getCookie();
				}
			};
		}]);
})();