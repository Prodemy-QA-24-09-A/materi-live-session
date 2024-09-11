let title = document.querySelector("#title");
title.innerHTML = "Belajar DOM <i>Manipulation</i>";

let image = document.querySelector("img");
image.setAttribute(
  "src",
  "https://awsimages.detik.net.id/community/media/visual/2022/11/20/rijsttafel-indonesia-2.jpeg?w=1200"
);

function getInput() {
  let inputAge = document.querySelector("#age");
  inputAge.value = "Minuman";
}

// console.log(title);

// let description = document.querySelector(".description");
// console.log(description);

// let button = document.querySelector("button");
// console.log(button);
