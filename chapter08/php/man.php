<?php
    // This PHP script is intentionally minimal to allow for maximum
    // client-side parsing/manipulation using JavaScript.
    system("man " . (int)$_REQUEST['section'] . " " . htmlspecialchars($_REQUEST['entry']));
?>
