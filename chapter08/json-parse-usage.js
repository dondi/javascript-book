var searchResultString = '{ \
  "products": [ \
    { \
      "name": "Acme Roadrunner Trap", \
      "manufacturer": "Acme Corporation", \
      "price": 500, \
      "availability": "in stock" \
    }, \
    { \
      "name": "Acme Roadrunner Decoy", \
      "manufacturer": "Acme Corporation", \
      "price": 750, \
      "availability": "backorder" \
    } \
  ], \
  "suggestions": [ \
    { \
      "name": "Ultimate Fake Tunnel", \
      "manufacturer": "Ultimate Fakers Corporation", \
      "price": 200, \
      "availability": "in stock" \
    } \
  ], \
  "categories": [ "Cages", "Traps", "Signs" ] \
}';

alert(searchResultString);
var searchResult = JSON.parse(searchResultString);
alert(searchResult.products[0].availability);
alert(searchResult.suggestions[0].price);
alert(searchResult.categories[1]);
