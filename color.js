
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  const button = document.getElementById("button");
  button.addEventListener("click", function() {
    const canvas = document.getElementById("canvas");
    const randomNumber = parseInt(Math.random() * colors.length);
    canvas.style.backgroundColor = colors[randomNumber];
  });
