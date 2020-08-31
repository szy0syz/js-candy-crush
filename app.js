document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 8;
  const squares = [];

  const candyColors = ["red", "yellow", "orange", "purple", "green", "blue"];

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      let randomColor = Math.floor(Math.random() * candyColors.length);
      square.style.backgroundColor = candyColors[randomColor];
      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard();

  // Drag the candies
  let colorBeingDragged;
  let colorBeingReplaced;
  let squareIdBeingDragged;
  let squareIdBeingReplaced;

  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", dragDrop));

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
    squareIdBeingDragged = parseInt(this.id);
    console.log("colorBeingDragged:", colorBeingDragged);
    console.log(this.id, "dragStart");
  }

  function dragEnd() {
    console.log(this.id, "dragEnd");
  }

  function dragOver(e) {
    e.preventDefault();
    console.log(this.id, "dragOver");
  }

  function dragEnter(e) {
    e.preventDefault();
    console.log(this.id, "dragEnter");
  }

  function dragLeave() {
    console.log(this.id, "dragLeave");
  }

  function dragDrop() {
    console.log(this.id, "dragDrop");
    colorBeingReplaced = this.style.backgroundColor;
    squareIdBeingReplaced = parseInt(this.id);
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
  }
});
