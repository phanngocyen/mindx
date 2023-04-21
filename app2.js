function numberOneTriangle() {
    const number = document.getElementById("number-input").value;
    let triangle = "";
    for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= i; j++) {
        triangle += "* ";
      }
      triangle += "<br>";
    }
    document.getElementById("triangle").innerHTML = triangle;
  }