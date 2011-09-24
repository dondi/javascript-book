window.onload = function () {
    var i, paragraphs = document.getElementsByTagName("p"),
    
    getParagraphElement = function (touchTarget) {
        // Touch events may register with the paragraph text also,
        // we make sure that we reach the paragraph (P) element.
        return (touchTarget.tagName === "P") ?
            touchTarget : touchTarget.parentNode;
    },
    
    markParagraph = function (event) {
        var element = getParagraphElement(event.target),
            elementStyle = window.getComputedStyle(element);
        element.style["font-style"] = "italic";

        // Remember the initial font size and unit, plus opacity.
        element.startSize = parseFloat(elementStyle["font-size"]);
        element.sizeUnit = elementStyle["font-size"]
            .substring(elementStyle["font-size"].length - 2,
                elementStyle["font-size"].length);
        element.startOpacity = elementStyle.opacity;
    },
    
    unmarkParagraph = function (event) {
        getParagraphElement(event.currentTarget)
            .style["font-style"] = "normal";
    },
    
    changeParagraph = function (event) {
        var element = getParagraphElement(event.target), newOpacity;
        element.style["font-size"] = (element.startSize * event.scale) +
            element.sizeUnit;

        // Make 180 degrees of rotation correspond to 100% opacity.
        newOpacity = +element.startOpacity + (event.rotation / 180.0);
        newOpacity = (newOpacity < 0.0) ? 0.0 :
            ((newOpacity > 1.0) ? 1.0 : newOpacity);
        element.style.opacity = newOpacity;
    },

    preventTouchDefault = function (event) {
        event.preventDefault();
    };

    // Assign the event handlers for all paragraph elements.
    for (i = 0; i < paragraphs.length; i += 1) {
        paragraphs[i].ongesturestart = markParagraph;
        paragraphs[i].ongesturechange = changeParagraph;
        paragraphs[i].ongestureend = unmarkParagraph;
    }
    
    // Prevent possible default touch behaviors like scrolling and resizing.
    document.body.ontouchmove = preventTouchDefault;
    document.body.ongesturechange = preventTouchDefault;
};
