var div = document.querySelector("div");
var div1 = document.createElement("div");

div.prepend(div1);

var color = [];
for (var i = 0; i < 10; i++) {
    var h3 = document.createElement("h3");
    // div1.prepend(h3);
    var obj = {};
    var rgb = [];
    for (var j = 0; j < 3; j++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        rgb[j] = "rgb(" + r + ", " + g + ", " + b + ")";

    }
    obj = {
        c1: rgb[0],
        c2: rgb[1],
        c3: rgb[2],
        pickColor: rgb[Math.floor(Math.random() * 3)]
    }

    div1.prepend(h3);

    h3.textContent = obj.pickColor;
    var i1 = document.createElement("input");
    i1.setAttribute("for", "pickColor");
    var r1 = document.createElement("input");
    r1.setAttribute("type", "radio");
    r1.setAttribute("name", "colorchoice");
    r1.setAttribute("id", "pickColor");
    r1.setAttribute("value", obj.c1);
    var i4 = document.createElement("br");

    div1.prepend(i1);
    div1.prepend(r1);
    i1.style.background = obj.c1;

    var i2 = document.createElement("input");
    i2.setAttribute("for", "pickColor");
    var r2 = document.createElement("input");
    r2.setAttribute("type", "radio");
    r2.setAttribute("name", "colorchoice");
    r2.setAttribute("id", "pickColor");
    r2.setAttribute("value", obj.c2);
    var i4 = document.createElement("br");

    div1.prepend(i2);
    div1.prepend(r2);
    i2.style.background = obj.c2;

    var i3 = document.createElement("input");
    i3.setAttribute("for", "pickColor");
    var r3 = document.createElement("input");
    r3.setAttribute("type", "radio");
    r3.setAttribute("name", "colorchoice");
    r3.setAttribute("id", "pickColor");
    r3.setAttribute("value", obj.c3);
    var i4 = document.createElement("br");

    div1.prepend(i3);
    div1.prepend(r3);
    i3.style.background = obj.c3;

    h3.textContent=obj.pickColor;
    div1.prepend(i4);
    color.push(obj);
}

// Hide and show another div

const targetDiv1 = document.querySelector(".page1");
const targetDiv2 = document.querySelector(".page2");
const btns = document.getElementById("button");
btns.onclick = function () {
  if (targetDiv1.style.display !== "none") {
    targetDiv1.style.display = "none";
  } else {
    targetDiv2.style.display = "block";
  }
};

// Change button text

const btn = document.getElementById("button");
btn.addEventListener("click", ()=>{
    if(btn.innerText === "Submit"){
        btn.innerText = "Try Again";
    }else{
        btn.innerText= "Submit";
    }
});

// Attempt counts

$(document).ready(function(){
    $("#button").click(function(){
      $("#button1").remove();
      $("#timesClicked").text("1");
    });
  });
  
// function times(){
//     var element = document.getElementById("timesClicked");
//     var value = element.innerHTML;
//     value++;
//     console.log(value);
//     document.getElementById("timesClicked").innerHTML = value;
// }

