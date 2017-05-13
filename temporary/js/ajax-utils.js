(function(global) {

	var ajaxutils = {};


	function getrequestObject() {
		if(window.XMLHttpRequest) {
			return (new XMLHtttpRequest());
		}
		else if(window.ActiveXObject) {
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported");
			return(null);
		}
	}

ajaxutils.sendGetRequest = 
			function(requestUrl, responseHandler) {
				var request = getrequestObject();

				request.onreadystatechange = 
					function() {
						handleresponse(request,responseHandler);
					};
				request.open("GET", requestUrl, true);
				request.send(null);
			};

function handleresponse(request,responseHandler) {

	if((request.readystate == 4) && 
		(request.status == 200)) {

		responseHandler(request);
	}
}

global.$ajaxutils = ajaxutils;

global.hello = "hello";

})(window);

console.log("hello");