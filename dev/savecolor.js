/**
 * Created by Arthur on 1/14/17.
 */

function saveColor(c) {
    // Get a value saved in a form.
    //var category = c;
    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({'color': c}, function() {
        // Notify that we saved.
        console.log(c);
        console.log('Color saved!');
        window.location.replace('index.html');
    });
}
saveColor($_GET('color'));
      