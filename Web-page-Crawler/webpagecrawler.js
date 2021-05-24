let links = document.links;
console.log(links);
let str = "JavaScript";
let href;
Array.from(links).forEach(function (element) {
  href = Element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});
