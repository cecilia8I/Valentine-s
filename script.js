const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesSize = 18;

yesBtn.addEventListener("click", () => {
  alert("YAYYYY❤️I won't be able to sleep tonight!!🥳😝🤩😘🥰😍");
});

noBtn.addEventListener("click", () => {
  yesSize += 10;
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = yesSize / 2 + "px";
});
