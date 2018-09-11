
function update(){
  var idoc = document.getElementById('iframe').contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.write("<style>"+editorcss.getValue()+"</style>");
	idoc.write("<script>"+editorjs.getValue()+"</script>");
  idoc.close();
}
var frame = document.getElementById('iframe');
function setupEditor(){
  window.editorjs = ace.edit("editorjs");
  editorjs.setTheme("ace/theme/monokai");
  editorjs.session.setMode("ace/mode/javascript");
  editorjs.getSession().on('change', function() {
    update();
  });

  window.editorcss = ace.edit("editorcss");
  editorcss.setTheme("ace/theme/monokai");
  editorcss.session.setMode("ace/mode/css");
  editorcss.getSession().on('change', function() {
    update();
  });
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
<html>
<head>

</head>
<body>

</body>
</html>`,1); //1 = moves cursor to end

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();

  editor.setOptions({
  fontSize: "12pt",
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableEmmet:true,
});
editorcss.setOptions({
fontSize: "12pt",
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
enableEmmet:true,
});
editorjs.setOptions({
fontSize: "12pt",
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
enableEmmet:true,
});



}
