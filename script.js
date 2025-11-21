function showPage(page, ev) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("visible"));
    document.getElementById(page).classList.add("visible");

    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    const e = ev || window.event;
    if (e && e.target) e.target.classList.add("active");
}
const staticImage = "TNTUmain.jpg";
const imgEl = document.getElementById("slide");
if (imgEl) {
    imgEl.src = staticImage;
}
function generateMultiplicationTable(variant = 3) {
    const tbody = document.getElementById('mult-table-body');
    if (!tbody) return;
    const topRow = [];
    for (let i = 11; i <= 20; i++) topRow.push(i * variant);
    const leftCol = [];
    let num = 14;
    for (let i = 0; i < 10; i++) { leftCol.push(num); num += 7; }

    tbody.innerHTML = '';

    const headerRow = document.createElement('tr');
    const emptyTh = document.createElement('th');
    emptyTh.textContent = '';
    headerRow.appendChild(emptyTh);
    topRow.forEach(v => {
        const th = document.createElement('th');
        th.textContent = v;
        headerRow.appendChild(th);
    });
    tbody.appendChild(headerRow);

    for (let r = 0; r < leftCol.length; r++) {
        const tr = document.createElement('tr');
        const leftTh = document.createElement('th');
        leftTh.textContent = leftCol[r];
        tr.appendChild(leftTh);
        for (let c = 0; c < topRow.length; c++) {
            const td = document.createElement('td');
            td.textContent = leftCol[r] * topRow[c];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

generateMultiplicationTable(3);
