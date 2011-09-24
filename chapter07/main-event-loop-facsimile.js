while (!timeToQuit()) {
    var event = waitForNextEvent();
    if (hasHandler(event)) {
        invokeHandler(getHandlerFor(event));
    }
}
