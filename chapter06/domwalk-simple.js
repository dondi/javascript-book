/*
 * A script that displays the skeleton node structure of the
 * enclosing document in the element with id "footer".  This
 * is not an efficient script, and it leaves out some useful
 * information, such as attributes.  It is meant only to be a
 * first introduction to working with DOM nodes.
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
    if (node.nodeType === 1) {
        value += node.tagName;
    }
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