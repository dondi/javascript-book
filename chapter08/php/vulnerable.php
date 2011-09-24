<?php
echo "<html>";
echo "  <head>";
echo "    <title>Search Results</title>";
echo "  </head>";
echo "  <body>";
echo "    <p>Your search for products with the name <i>" . stripslashes($_REQUEST["name"]) . "</i>";
echo "    with manufacturer <i>" . stripslashes($_REQUEST["manufacturer"]) . "</i>";
echo "    has produced the following results:</p>";
echo "    <ul>";
echo "      <li><a href=\"dummy\">Acme Road Runner Trap</a></li>";
echo "      <li><a href=\"dummy\">Acme Mousetrap</a></li>";
echo "      <li><a href=\"dummy\">Deluxe Trap Bundle by Acme</a></li>";
echo "    </ul>";
echo "  </body>";
echo "</html>";
?>
