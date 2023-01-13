const elems = ["title-change-color-six", "title-change-color-five", "title-change-color-four",
  "title-change-color-three", "title-change-color-two", "title-change-color-one"];
const colors = [["--main-red-orange", "#ff5e00"], ["--main-darkgreen", "#318c11"], ["--main-red", "#ff0000"],
  ["--main-purple", "#6F0B8D"], ["--main-pink", "#ff00c8"], ["--main-blue", "#002aff"]];
let elemCount = 0;
let colorCount = 0;

/* not working bc doesn't change after one round
function changeColor() {
  document.getElementById(elems[elemCount]).style.stroke = colors[colorCount][1];
  elemCount++;
  colorCount++;
  
  if (elemCount === elems.length) {
    elemCount = 0;
  }
  if (colorCount === colors.length) {
    colorCount = 0;
  }
  console.log("elemCount: " + elemCount);
  console.log("colorCount: " + colorCount);
}
*/

window.onload = setInterval(changeColor, 500);
