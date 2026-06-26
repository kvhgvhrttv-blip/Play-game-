const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let count = 0;
let scale = 1;

noBtn.style.position = "fixed";

noBtn.addEventListener("click", () => {
  count++;

  // ปุ่มใช่ใหญ่ขึ้น
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;

  // ปุ่มไม่หนี
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // ครบ 10 ครั้ง ปุ่มไม่หาย
  if (count >= 10) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  alert("เย้! เข้าเกมเลย 🎮");
});
