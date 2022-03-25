const mainContainer = document.getElementsByTagName('body');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       
       console.log(xhttp)
    }
};
xhttp.open("GET", "https://api.pexels.com/v1/search?query=people", true);
xhttp.setRequestHeader('Authorization','563492ad6f9170000100000117fbdd87182b491c8bf0b2a95c269509')
xhttp.send();