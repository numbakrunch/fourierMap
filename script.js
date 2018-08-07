var mouseDown = 0;
document.onmousedown = function() { 
  mouseDown = 1;
}
document.onmouseup = function() {
  mouseDown = 0;
}

window.onload = function init(){
	var gridSize = 64;
	var i, j;
	var root = document.getElementById('root');
	var div = document.createElement("div");
	for (i = 0; i < gridSize; i++) {
		var row = document.createElement("div");
		row.className = "row";
		row.setAttribute("id", "row" + i);
		root.appendChild(row);
		for (j = 0; j < gridSize; j++) {
			var row = document.getElementById("row" + i);
			var column = document.createElement("div");
			column.className = "column";
			column.setAttribute("id", i + ", " + j);
			//column.setAttribute("onMouseOver", "displayInfo(" + i + ", " + j + ")");
			column.setAttribute("onMouseOver", "toggleCell(" + i + ", " + j + ")");
			row.appendChild(column);
		}
	}
	var display = document.createElement("div");
	display.className = "display";
	display.setAttribute("id", "display");
	root.appendChild(display);
};

function toggleCell(x, y) {
	var cell = document.getElementById(x + ", " + y);
	if (cell.classList.contains('on')) {
		//console.log('on');
		if (mouseDown) {cell.classList.remove('on')};
	} else {
		//console.log('off');
		if (mouseDown) {cell.classList.add('on')};
	}
	console.log(mouseDown);
}