var url = window.location.href;

var cut_url = url.split('#')[1];

var parent = document.getElementById(cut_url).parentElement;
var child = parent.children[1];

child.classList.add("show");