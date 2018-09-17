const gtcode = document.getElementById('download');
var modal = document.getElementById('modal');
gtcode.onclick = function image(){
    modal.style.display = "block";

};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
var rs = document.getElementById('draggable');
rs.onresize = function(){
  console.log(editor.getValue());
  editor.style.height = "100%";
};
$(document).ready( function() {
  $( ".html" ).resizable();
  $( ".css" ).resizable();
  $( ".js" ).resizable();
   $( ".html" ).draggable();
   $( ".css" ).draggable();
   $( ".js" ).draggable();
} );
var z = document.querySelector(".code .css,.code .js,.code .html");
  var s = "3";
/*z.onmousedown = function () {
  this.style.zIndex = s;
  s++;
  return s;
};*/
