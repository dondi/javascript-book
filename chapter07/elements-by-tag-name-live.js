var doc = document;
var paragraphs = doc.getElementsByTagName("p");
alert(paragraphs.length);
doc.body.appendChild(doc.createElement("p"));
alert(paragraphs.length);
