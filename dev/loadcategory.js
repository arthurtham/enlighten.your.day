/**
 * Created by Arthur on 1/14/17.
 */
function getChanges() {
    chrome.storage.local.get('value', function(v) {
        // Notify that we loaded.
        if (v.value == undefined){
            gohome();
        }
        else {
            //console.log('Settings loaded!');
            //console.log(v.value);
            //console.log('results.html?category=' + v.value);
            window.location.replace('results.html?category=' + v.value);
        }
    })
}
getChanges();