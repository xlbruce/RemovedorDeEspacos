document.getElementById("botao").addEventListener("click", stripSpaces);
function stripSpaces() {
  var links = document.getElementById('links').value;
  var stripped = links.replace(/\ /g, '');
  document.getElementById('stripped').value = stripped;
}