/**
 * Created by Arthur on 1/13/17.
 */

//Inspired by Geoffrey Crofte
//https://www.creativejuiz.fr/blog/en/javascript-en/read-url-get-parameters-with-javascript
//Use just like PHP
function $_GET(param)
{
    var variables = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            variables[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return variables[param] ? variables[param] : null;
    }
    return variables;
}

function category_name_from_id(category_id)
{
    //alert(category_id);
    switch(category_id)
    {
        case '0':
            return "Category 0";
            break;
        case '1':
            return "Comedy";
            break;
        case '2':
            return "Dance";
            break;
		case '3':
            return "Film"; 
            break;			
        case '4':
            return "Geography";
            break;	 
		case '5':
            return "Motivation";
            break;		
		case '6':
            return "Music";
            break;	
		case '7':
            return "Nature";
            break;		
		case '8':
            return "People";
            break;			
		case '9':
            return "Society";
            break;			
		case '10':
            return "Sports";
            break;	

		default:
            return "???";
    }
}

function write_quote_from_id(category_id)
{
    WikiquoteApi.getRandomQuote(category_name_from_id(category_id),
        function (e) {
            //console.log(e);
            //alert(e.quote);
            var quote = e.quote;
            if (quote.length > 300) {
                write_quote_from_id(category_id);
                return;
            }
            else {
                $("#quote").html(e.quote);
            }
            //alert("success!");
        }, function () {
            $("#quote").html("<p>Something went wrong.<br>Please try again later.</p>");
        });
}

function write_category_name(s)
{
    document.write("Category: ");
    document.write(category_name_from_id(s));
}

