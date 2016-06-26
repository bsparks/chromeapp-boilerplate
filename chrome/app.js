chrome.app.runtime.onLaunched.addListener(function(launchData) {
    // Center window on screen.
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = 1280;
    var height = 720;
    chrome.app.window.create('index.html', {
        id: 'mainWin',
        frame: 'none',
        bounds: {
            width: width,
            height: height,
            left: Math.round((screenWidth - width) / 2),
            top: Math.round((screenHeight - height) / 2)
        }
    }, function(win) {
        win.contentWindow.launchData = launchData;
    });
});
