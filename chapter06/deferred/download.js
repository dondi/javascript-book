/* Values that we need throughout the life of the page. */
var downloadTimeoutId;

var startDownload = function () {
    downloadTimeoutId = setTimeout("doDownload();", 5000);
    document.getElementById("before").style.display = "none";
    document.getElementById("after").style.display = "block";
};

var cancelDownload = function () {
    clearTimeout(downloadTimeoutId);
    setStateToBeforeDownload();
};

var doDownload = function () {
    alert("If you were really downloading something, it would start now!");
    setStateToBeforeDownload();
};

var setStateToBeforeDownload = function () {
    document.getElementById("after").style.display = "none";
    document.getElementById("before").style.display = "block";
};
