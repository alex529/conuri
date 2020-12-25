const calculate = () => {
    document.getElementById("dMic").setCustomValidity("")
    const dMic = parseFloat(document.getElementById("dMic").value);
    const dMare = parseFloat(document.getElementById("dMare").value);
    const oO = parseFloat(document.getElementById("oO").value);

    if (dMic > dMare) {
        document.getElementById("dMic").setCustomValidity("Diametrul mare este mai mic decat diametrul mic. Va rog introduceti datele corect");
        document.getElementById("dMare").setCustomValidity("Diametrul mare este mai mic decat diametrul mic. Va rog introduceti datele corect");
        return;
    }

    const rMic = dMic / 2;
    const rMare = dMare / 2;
    const u = Math.atan((rMare - rMic) / oO);
    const va = rMare / Math.sin(u);
    const aA = (rMare - rMic) / Math.sin(u);
    const vA = va - aA;
    const vO = Math.cos(u) * vA;
    const vo = Math.cos(u) * va;

    const laA = document.getElementById("laA");
    const s1 = document.getElementById("s1");
    const s2 = document.getElementById("s2");
    const s3 = document.getElementById("s3");
    const uavo = document.getElementById("uavo");
    const vol = document.getElementById("vol");
    const cMic = document.getElementById("cMic");
    const cMare = document.getElementById("cMare");

    vol.value = (Math.PI / 3 * ((rMare * rMare * vo) - (rMic * rMic * vO))).toFixed(3);
    cMic.value = (2 * Math.PI * rMic).toFixed(3);
    cMare.value = (2 * Math.PI * rMare).toFixed(3);
    laA.value = aA.toFixed(3);
    uavo.value = (u * (360 / (2 * Math.PI))).toFixed(3);
    s1.value = vA.toFixed(3);
    s2.value = va.toFixed(3);
    s3.value = ((360 * (rMare - rMic)) / Math.sqrt((rMare - rMic) * (rMare - rMic) + oO * oO)).toFixed(3);
}

window.onload = () => {
    document.getElementById("dMic").value = 10;
    document.getElementById("dMare").value = 20;
    document.getElementById("oO").value = 5;
}