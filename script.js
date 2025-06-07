function createStrip(id) {
    const strip = document.getElementById(id);
    let num = 9;
    if (id === 'd0') { num = 2; } 
    else if (id === 'd2') { num = 5; }   
    for (let i = 0; i <= num; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        strip.appendChild(span);
    }
}

['d0', 'd1', 'd2', 'd3', 'd4', 'd5'].forEach(createStrip);

function updateClock() {
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, '0');
    const mm = now.getMinutes().toString().padStart(2, '0');
    const ss = now.getSeconds().toString().padStart(2, '0');
    const timeStr = hh + mm + ss;

    for (let i = 0; i < 6; i++) {
        const digit = parseInt(timeStr[i]);
        const strip = document.getElementById(`d${i}`);

        const offset = digit * 60;
        const centerOffset = (600 / 2) - 30;
        strip.style.transform = `translateY(${centerOffset - offset}px)`;
    }
}


setInterval(updateClock, 1000);
updateClock();
