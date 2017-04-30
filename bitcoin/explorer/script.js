var xmlhttp = new XMLHttpRequest();
var xmlhttp2 = new XMLHttpRequest();
var xmlhttp3 = new XMLHttpRequest();
var xmlhttp4 = new XMLHttpRequest();
window.onload = function homePageLoading(){
	console.log("test");
	document.getElementById("info").innerHTML = "en attente";
	xmlhttp.open("GET", "https://bitcoin.mubiz.com/info", true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myObj = this.responseText;
	        var jsonPretty = JSON.stringify(JSON.parse(myObj));
	        console.log("test : " + jsonPretty);
	        document.getElementById("info").innerHTML = jsonPretty;
	    }
	};
	xmlhttp2.open("GET", "https://bitcoin.mubiz.com/blockchaininfo", true);
	xmlhttp2.send();
	xmlhttp2.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myObj = this.responseText;
	        var jsonPretty = JSON.stringify(JSON.parse(myObj));
	        console.log("test : " + jsonPretty);
	        document.getElementById("blockchaininfo").innerHTML = jsonPretty;
	    }
	};
	xmlhttp3.open("GET", "https://bitcoin.mubiz.com/peerinfo", true);
	xmlhttp3.send();
	xmlhttp3.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myObj = this.responseText;
	        var jsonPretty = JSON.stringify(JSON.parse(myObj));
	        console.log("test : " + jsonPretty);
	        document.getElementById("mininginfo").innerHTML = jsonPretty;
	    }
	};
	xmlhttp4.open("GET", "https://bitcoin.mubiz.com/mininginfo", true);
	xmlhttp4.send();
	xmlhttp4.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myObj = this.responseText;
	        var jsonPretty = JSON.stringify(JSON.parse(myObj));
	        console.log("test : " + jsonPretty);
	        document.getElementById("peerinfo").innerHTML = jsonPretty;
	    }
	};
}  