/*
 * A script that displays the skeleton node structure of the
 * enclosing document, without text nodes containing only
 * whitespace, in the element with id "footer".  The script
 * needs work, though: it is not efficient and it may render
 * some attributes incorrectly.  Fixing it is an exercise for
 * the reader!
 */

var TYPES = ["", "element", "attribute", "text", "cdata",
    "entity_reference", "entity", "processing_instruction",
    "comment", "document", "document_type", "document_fragment",
    "notation"];

/*
 * Adds the subtree rooted at the given node into the given list
 * of nodes, indented four spaces per level.
 */
var showNode = function (list, node, indent) {
    var value = indent + TYPES[node.nodeType] + " ";

    // Handle elements by showing tag names and attributes, if any
    if (node.nodeType === 1) {
        value += node.tagName;
        for (var i = 0; i < node.attributes.length; i += 1) {
            var a = node.attributes[i];
            value += " " + a.name + "=" + a.value;
        }
    }

    // If this is a text node containing all whitespace, bail
    if (node.nodeType === 3 && /^\s*$/.test(node.data)) {
        return;
    }

    // Add node to list and "descend" tree by processing children
    list.push(value);
    for (var i = 0; i < node.childNodes.length; i += 1) {
        showNode(list, node.childNodes[i], indent + "    ");
    }
};

// Puts the outline into the footer element, formatted nicely
var list = [];
showNode(list, document, "");
document.getElementById("footer").innerHTML =
    "<pre>" + list.join("\n") + "</pre>";