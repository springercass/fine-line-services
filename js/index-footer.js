var form_id_js = "index-newsletter";

var data_js = {
	"access_token": "8bucouqgr2hyqfbs05jqxpes"
};

function js_onSuccess() {
 	alert('Thank you for subscribing!')
}

function js_onError(error) {
	alert(`I'm sorry, we couldn't subscribe you at the moment. Please try again.`)
}

var sendButton = document.getElementById("index-subscribe");

function js_send() {
	sendButton.disabled=true;
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			js_onSuccess();
		} else
		if(request.readyState == 4) {
			js_onError(request.response);
		}
	};

	 
    var indexEmail = document.getElementById("index-email").value;
    
	data_js['subject'] = `New Newsletter Subscriber`;
    data_js['text'] = `New email newsletter subscription from ${indexEmail}.
    Please add them to your email marketing list.`;
	var params = toParams(data_js);

	request.open("POST", "https://postmail.invotes.com/send", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
    console.log(data_js)

	return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
	var form_data = [];
	for ( var key in data_js ) {
		form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
	}

	return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
	e.preventDefault();
});