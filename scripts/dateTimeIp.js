setInterval(showDateTime, 1000);

function showDateTime() {
    var d = new Date();
    document.getElementById('Date').innerHTML = "Mai d\u00e1tum: " + String(d.getDate()).padStart(2, '0') + "." + String(d.getMonth() + 1).padStart(2, '0') + "." + String(d.getFullYear());
    document.getElementById('Time').innerHTML = "Pontos id\u0151: " + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
}

window.onload = showDateTime;