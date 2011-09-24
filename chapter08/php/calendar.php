<?php
header("Content-Type: application/json");

# Inject the date if supplied.
$dateArg = "";
if (!empty($_REQUEST['date'])) {
    $dateArg = "-t " . $_REQUEST['date'];
}
$output = shell_exec("/usr/bin/calendar -f /usr/share/calendar/calendar.all $dateArg");

# Need to coalesce multiline calendar descriptions.
$rawfields = explode("\n", $output);
$entries = array();

foreach ($rawfields as $rawfield) {
    $fields = explode("\t", $rawfield);

    # Make sure to escape quotes.
    for ($i = 1; $i < count($fields); $i += 1) {
        $fields[$i] = str_replace("\"", "\\\"", $fields[$i]);
    }

    if (empty($fields[0])) {
        # This line is really a continuation of the last one, so append it.
        $lastEntry = array_pop($entries);
        for ($i = 1; $i < count($fields); $i += 1) {
            $lastEntry["description"] .= " " . $fields[$i];
        }
        array_push($entries, $lastEntry);
    } else {
        # Split the date into month, day, movable (trailing "*").
        # Our installation of calendar always uses 3-char months and 2-digit dates.
        $month = substr($fields[0], 0, 3);
        $day = intval(substr($fields[0], 4, 2));
        $movable = (substr($fields[0], strlen($fields[0]) - 1, 1) == "*") ? "true" : "false";
        array_push($entries, array("month" => $month,
            "day" => $day,
            "movable" => $movable,
            "description" => $fields[1]));
    }
}

# *Now* we produce JSON.
echo "[\n";
$lastKey = end(array_keys($entries));
foreach ($entries as $key => $entry) {
    # Safeguard against weird Apache vs. CLI bug, where an entry with empty values may
    # show up in Apache, but not reproducible in CLI.
    if (!empty($entry["month"]) && !empty($entry["day"]) && !empty($entry["movable"]) &&
        !empty($entry["description"])) {
        echo "  {\n";
        echo "    \"month\": \"" . $entry["month"] . "\",\n";
        echo "    \"day\": " . $entry["day"] . ",\n";
        echo "    \"movable\": " . $entry["movable"] . ",\n";
        echo "    \"description\": \"" . $entry["description"] . "\"\n";
        echo "  }";

        # No comma for the last entry.
        if ($key != $lastKey) {
            echo ",";
        }
        echo "\n";
    }
}
echo "]\n";
?>
