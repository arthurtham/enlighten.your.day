/**
 * Created by Arthur on 1/14/17.
 */
function colorList(i) {
    switch (i)
    {
        case '0': return "darkred";
        case '1': return "#5cbf94";
        case '2': return "#b77373";
        case '3': return "#84c0d7";
        case '4': return "black";
        case '5': return "cornflowerblue";
        case '6': return "rebeccapurple";
        case '7': return "darkgray";
        case '8': return "#5c2533";
    }
}

function getColor() {
    chrome.storage.local.get('color', function(v) {
        // Notify that we loaded.
        //console.log(v);
        if (v.color == undefined){
            v.color = 0;
        }
        //console.log('Color loaded!');
        //console.log(v.color);
        //console.log(colorList(v.color));
        document.getElementById('bgimg').style.backgroundColor = colorList(v.color);

    })
}
getColor();