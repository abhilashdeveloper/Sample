let httpcreate = new XMLHttpRequest();

httpcreate.open('GET',"abhilash.txt");
httpcreate.onload = function name(params) {
    alert(this.responseText)
}

httpcreate.send()