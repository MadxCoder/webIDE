const gtcode = document.getElementById('download');
var modal = document.getElementById('modal');
var modal2 = document.getElementById('Errormodal');
gtcode.onclick = function image(){
    modal.style.display = "block";

};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};span2.onclick = function() {
    modal2.style.display = "none";
};
var rs = document.getElementById('draggable');
rs.onresize = function(){
  console.log(editor.getValue());
  editor.style.height = "100%";
};
/*const headerhtml = document.getElementById('htmlheader');
console.log(headerhtml.innerHTML);
headerhtml.ondrag = function () {
  console.log('hip');*/
$(document).ready( function() {
  $( ".html" ).resizable();
  $( ".css" ).resizable();
  $( ".js" ).resizable();
   //$( ".html" ).draggable();
   //$( ".css" ).draggable();
   //$( ".js" ).draggable();
});
//};
var z = document.querySelector(".code .css,.code .js,.code .html");
  var s = "3";
/*z.onmousedown = function () {
  this.style.zIndex = s;
  s++;
  return s;
};*/
