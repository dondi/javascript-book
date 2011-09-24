window.onload = function () {
    var i, paragraphs = document.getElementsByTagName("p"),
    
    getParagraphElement = function (touchTarget) {
        // Touch events may register with the paragraph text also,
        // we make sure that we reach the paragraph (P) element.
        return (touchTarget.tagName === "P") ?
            touchTarget : touchTarget.parentNode;
    },
    
    markParagraph = function (event) {
        var i, element;
        for (i = 0; i < event.changedTouches.length; i += 1) {
            element = getParagraphElement(event.changedTouches[i].target);
            element.style["font-style"] = "italic";

            // Remember where the touch started.
            element.startX = event.changedTouches[i].pageX;
        }
    },
    
    unmarkParagraph = function (event) {
        for (var i = 0; i < event.changedTouches.length; i += 1) {
            getParagraphElement(event.changedTouches[i].target)
                .style["font-style"] = "normal";
        }
    },
    
    shiftParagraph = function (event) {
        var i, element;
        for (i = 0; i < event.changedTouches.length; i += 1) {
            element = getParagraphElement(event.changedTouches[i].target);
            element.style["margin-left"] = (event.changedTouches[i].pageX -
                element.startX) + "px";
        }
    },
    
    preventTouchDefault = function (event) {
        event.preventDefault();
    };

    // Assign the event handlers for all paragraph elements.
    for (i = 0; i < paragraphs.length; i += 1) {
        paragraphs[i].ontouchstart = markParagraph;
        paragraphs[i].ontouchmove = shiftParagraph;
        paragraphs[i].ontouchend = unmarkParagraph;
    }
    
    // Prevent possible default touch behaviors like scrolling and resizing.
    document.body.ontouchmove = preventTouchDefault;
    document.body.ongesturechange = preventTouchDefault;
};
