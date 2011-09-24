var tinyXML = 
    '<tinydoc name="test">' +
        "<body>hello</body>" +
    "</tinydoc>";

var parser = new DOMParser();
var tinyDoc = parser.parseFromString(tinyXML, "text/xml");

alert(tinyDoc.getElementsByTagName("tinydoc")[0].getAttribute("name"));
alert(tinyDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue);
