let zTop = 200;

document.querySelectorAll('.window-bar').forEach(bar => {
    const win = bar.closest('.window')
    let dragging = false, ox = 0, oy = 0;

    bar.addEventListener('mousedown', e => {
        if (e.target.classList.contains('btn')) return;
        dragging = true;
        ox = e.clientX - win.offsetLeft;
        oy = e.clientY - win.offsetTop;
        win.style.zIndex = ++zTop;
        e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
        if (!dragging) return;
        win.style.left = (e.clientX - ox) + 'px';
        win.style.top = Math.max(0, e.clientY - oy) + 'px';
    });
    document.addEventListener('mouseup', () => {
        dragging = false;
    });
})

// might need this (w3 reference)
// function closeOpenWindow() {
//     closeOpenWindow.close();
// }

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(() =>{
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)

