console.log("capturing");
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];

    const width = tab.width;
    const height = tab.height;

    const widthRatio = width / 400;
    const updatedHeight = widthRatio * height;

    const screenshot = document.getElementById("screenshot");
    const img = document.getElementById("screenshot_image");

    screenshot.style.height = updatedHeight;
    screenshot.style.backgroundImage = '';
    screenshot.style.backgroundColor = '#FFFFFF';
    img.style.height = updatedHeight;

    const session_info = document.getElementById("session_info");
    session_info.innerHTML = `Title: "${tab.title}"\nURL: "${tab.url}"\n`;
});

chrome.tabs.captureVisibleTab(null, {format: "png", quality: 70}, function (image) {
    // You can add that image HTML5 canvas, or Element.
    console.log("captured");

    const img = document.getElementById("screenshot_image");
    img.src = image;
    img.style.visibility = 'visible';
});