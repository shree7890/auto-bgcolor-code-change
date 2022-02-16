window.onload = () => {
  handleClickChange();
};

const handleClickChange = () => {
  const main = document.getElementById("main");
  const changeColor = document.getElementById("change-color");
  const autoChange = document.getElementById("auto-change");
  const stopChangeColor = document.getElementById("stop-btn");
  const textColorCodeChange = document.getElementById("text-color");
  stopChangeColor.style.display = "none";
  changeColor.addEventListener("click", function () {
    const rgbColor = hecxaDecColorChange();
    main.style.backgroundColor = rgbColor;
    textColorCodeChange.innerText = rgbColor;
  });
  autoChange.addEventListener("click", function () {
    stopChangeColor.style.display = "block";
    autoChange.style.display = "none";
    const interval = setInterval(() => {
      const rgbColor = hecxaDecColorChange();
      main.style.backgroundColor = rgbColor;
      textColorCodeChange.innerText = rgbColor;
    }, 3000);
    stopChangeColor.addEventListener("click", function () {
      stopChangeColor.style.display = "none";
      autoChange.style.display = "block";
      clearInterval(interval);
    });
  });
};

// rgb color randomly function

const hecxaDecColorChange = () => {
  //hexacode #45ejl2
  //rgb color code rgb(red,green,blue) lowest number rgb(0,0,0) and highest number rgb(255,255,255)
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
