const d = new Date();
const formatter = new Intl.DateTimeFormat('hu-HU', { dateStyle: 'short' });
const formattedDate = formatter.format(d);
document.getElementById("Date").innerHTML = formattedDate;