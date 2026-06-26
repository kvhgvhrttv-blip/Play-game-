const box = document.getElementById("box");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

function showEnding(){
    box.innerHTML = `
        <h1>🎉 เย้! เข้าเกมกันเลย 🎮</h1>
        <button id="again">🔄 เอาใหม่</button>
    `;

    document.getElementById("again").onclick = () => {
        location.reload();
    };
}

yes.onclick = () => {
    showEnding();
};

function moveButton(){
    no.style.position = "fixed";
    no.style.left = Math.random() * (window.innerWidth - 120) + "px";
    no.style.top = Math.random() * (window.innerHeight - 60) + "px";
}

no.addEventListener("mouseover", moveButton);
no.addEventListener("touchstart", moveButton);
