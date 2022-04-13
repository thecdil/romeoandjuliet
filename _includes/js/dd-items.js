/* Load items from Sheets, store in sessionStorage, or load from sessionStorage */
var dd_items = [];
var dd_actscenes = [];

// function to process items from Sheets and store
function dd_items_init(results) {
  dd_items = results.data.filter(item => item["dataline"]);
  dd_actscenes = $.unique(dd_items.map(function (d) {return d.actscene;}));
  sessionStorage.setItem("dd_items_store", JSON.stringify(dd_items));
  sessionStorage.setItem("dd_actscenes_store", JSON.stringify(dd_actscenes));
  sessionStorage.setItem("dd_char_store", JSON.stringify(dd_players));
  pageInit(dd_items,dd_actscenes);
}
// check for sessionStored items
if (sessionStorage.getItem("dd_items_store")) {
  dd_items = JSON.parse(sessionStorage.getItem("dd_items_store"));
  pageInit(dd_items,dd_actscenes);

} else { 
  /* use papaparse to get metadata from google sheets, then init page */
  Papa.parse("{{ site.play | relative_url }}", {
    download: true,
    header: true,
    complete: (results) => dd_items_init(results)
  });
}


function reset_dd_items(){
  sessionStorage.removeItem('dd_items_store');
  location.reload(); 
};