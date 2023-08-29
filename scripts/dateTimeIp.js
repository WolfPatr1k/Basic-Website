const d = new Date();

function showDateTime() {
    document.getElementById('Date').innerHTML = String(d.getDate())+"."+String(d.getMonth()+1)+"."+String(d.getFullYear());
}

window.onload = showDateTime;