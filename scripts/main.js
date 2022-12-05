var backgroundSwitchButton = document.getElementById("backgroundSwitchButton")
var container = document.getElementById("containerRight")
var todo = document.getElementById("todo")
var i = 2;

todo.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        create();
    }
});

backgroundSwitchButton.onclick = function () {
    document.body.style.backgroundImage = 'url(images/bg' + (i + 1) + '.jpg)';
    i++;
    if (i > 4) {
        i = 1;
    }
}

function create() {
    var text = document.getElementById("todo");
    var divClass = document.createAttribute("class");
    divClass.value = 'div';
    var div = document.createElement("div");
    div.setAttributeNode(divClass);
    container.appendChild(div);
    div.innerHTML = text.value;
}

//添加注释测试
