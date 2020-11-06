var form_id_js = "contact";

var data_js = {
	"access_token": "a77ils392mgfijpkd2n83qn8"
};

function js_onSuccess() {
 	alert('Thank you for reaching out. We will be in touch soon!')
}

function js_onError(error) {
	alert(`I'm sorry, we weren't able to collect your information right now. Please give us a call at (866) 659-2830.`)
}

var sendButton = document.getElementById("submit");

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

	var nameForm = document.getElementById("name").value; 
	var phoneForm = document.getElementById("phone").value; 
    var emailForm = document.getElementById("email").value;
    var subjectForm = document.getElementById("form-subject").value;
	var msgForm = document.getElementById("message").value;  
	data_js['subject'] = `New Contact Form Submission, Subject: ${subjectForm}`;
    data_js['text'] = `New contact form submission from ${nameForm}.
    Email: ${emailForm}
    Phone: ${phoneForm}
    Message: ${msgForm}`;
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