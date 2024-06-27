// var content = document.getElementsByClassName(".content");
// content.style.width = width;

var container = document.getElementsByClassName("container");
var tabs = document.getElementsByClassName("tabs");

//alert(container[0].offsetWidth);
document.getElementById("content").style.width =
  container[0].offsetWidth / 1.5 + "px";
tabs[0].style.marginLeft = container[0].offsetWidth / 10 + "px";

const onresize = (dom_elem, callback) => {
  const resizeObserver = new ResizeObserver(() => callback());
  resizeObserver.observe(dom_elem);
};

// function setWidth() {
//   var container = document.getElementsByClassName("container");
//   var tabs = document.getElementsByClassName("tabs");

//   alert(container[0].offsetWidth);
//   document.getElementById("content").style.width =
//     container[0].offsetWidth / 2 + "px";
//   tabs[0].style.marginLeft =
//     tabs[0].style.marginLeft - container[0].offsetWidth / 4 + "px";
// }
onresize(container[0], function () {
  var container = document.getElementsByClassName("container");
  var tabs = document.getElementsByClassName("tabs");

  document.getElementById("content").style.width =
    container[0].offsetWidth / 1.5 + "px";
  tabs[0].style.marginLeft = container[0].offsetWidth / 10 + "px";
  //   tabs[0].style.marginLeft = container[0].offsetWidth / 4 + "px";
});

// content[0].style.width = container[0].offsetWidth;
// div[0].addEventListener("resize", (event) => alert(div[0].width));

// function checkResize(mutations) {
//   var el = mutations[0].target;
//   var w = el.clientWidth;
//   var h = el.clientHeight;

//   var isChange = mutations
//     .map((m) => m.oldValue + "")
//     .some(
//       (prev) =>
//         prev.indexOf("width: " + w + "px") == -1 ||
//         prev.indexOf("height: " + h + "px") == -1
//     );

//   if (!isChange) return;

//   var event = new CustomEvent("resize", { detail: { width: w, height: h } });
//   el.dispatchEvent(event);
// }

// var observer = new MutationObserver(checkResize);
// observer.observe(div[0], {
//   attributes: true,
//   attributeOldValue: true,
//   attributeFilter: ["style"],
// });
