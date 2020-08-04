function input() {
  document.getElementById("inputdiv").style.display = "block";
}

function create() {
  var task = document.getElementById("mytext").value;
  var div = document.createElement("li");
  div.className = "child";
  div.id = "chilid";
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "childone";
  checkbox.className = "check";
  var para = document.createElement("p");
  para.id = "childtwo";
  para.className = "childTwo";
  para.appendChild(document.createTextNode(task));
  var remove = document.createElement("span");
  remove.id = "rem";
  remove.className = "fa fa-close";
  div.appendChild(checkbox);
  div.appendChild(para);
  div.appendChild(remove);
  document.getElementById("mylist").appendChild(div);
  document.getElementById("mytext").value = "";
  console.log("s");
  var childCount = document.getElementById("mylist").childElementCount;
  console.log(childCount);
  if (childCount < 1) {
    document.getElementById("empty").style.display = "block";
  } else {
    document.getElementById("empty").style.display = "none";
    var cancel = document.getElementsByClassName("fa fa-close");
    var mark = document.getElementsByClassName("check");
    var linethrough = document.getElementsByClassName("childTwo");
    for (let index = 0; index < childCount; index++) {
      cancel[index].onclick = function () {
        var div = this.parentElement;
        div.remove();
        childCount--;
        if (childCount == 0) {
          document.getElementById("empty").style.display = "block";
        }
      };
      mark[index].onclick = function () {
        if (mark[index].checked) {
          linethrough[index].style.textDecoration = "line-through";
        } else {
          linethrough[index].style.textDecoration = "none";
        }
      };
    }
  }
}

function insert() {
  if (document.getElementById("mytext").value === "") {
    alert("The Task is empty!");
  } else {
    create();
  }
}

var inp = document.getElementById("mytext");

inp.addEventListener("keyup",function(e){

  if (e.keyCode === 13){

    document.getElementById("up").click()

  }

})
