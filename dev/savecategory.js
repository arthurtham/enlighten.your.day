/**
 * Created by Arthur on 1/14/17.
 */
function saveChanges(c) {
    // Get a value saved in a form.
    //var category = c;
    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({'value': c}, function() {
        // Notify that we saved.
        //console.log(c);
        //console.log('Settings saved!');
    });
}
saveChanges($_GET('category'));
      