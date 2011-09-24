var regex = /a(((bc)d(e))(f(gh)))i/;
var text = "abcdefghijk";
alert(text.match(regex).join(",")); // abcdefghi,bcdefgh,bcde,bc,e,fgh,gh
