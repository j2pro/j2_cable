
function ValidateInfo(formObject) {
	if (formObject.value == "") 
	{
		alert("Required Field!");
		
		//formObject.focus();
	}
}






function getCookie(tag) {
	var value = null;
	var c = document.cookie +";";
	var find = tag + "=";
	if (c.length > 0) {
	var begin = c.indexOf(find);
	if (begin != -1) {
	begin = begin + find.length;
	end = c.indexOf(";", begin);
	if (end == -1)	 end = c.length;
	value = unescape(c.substring(begin, end));
	}
	}
	return value;
	}

	function setCookie(tag, value, days) {
	var expireDate = new Date();
	var expString = "";
	var x = 1000*60*60*24*days;
	expireDate.setTime(expireDate.getTime()+x);
	expireString = "expires=" + expireDate.toGMTString();
	document.cookie = tag + "=" + escape(value) + ";" + expireString + ";"
}
