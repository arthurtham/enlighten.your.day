/**
 * Created by Arthur on 1/14/17.
 */
// Save it using the Chrome extension storage API.

function resetstorage() {
chrome.storage.local.remove("value", function() {
    // Notify that we saved.
    //console.log('Settings reset!');
});
}
resetstorage();