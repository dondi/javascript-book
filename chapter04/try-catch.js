try {
    // This is a contrived example that just illustrates a point
    alert("Welcome to my script");
    throw "Ha ha ha";
    alert("You will never see this message");
} catch (e) {
    alert("Caught : " + e);
}
