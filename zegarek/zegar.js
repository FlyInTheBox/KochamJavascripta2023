function changeHour() {
    var valueHours = document.getElementById('hours_range').value;
    var angleHours = 30 * valueHours + 'deg';
    document.getElementById('hours_output').innerText = valueHours;
    document.getElementById('hours_hand').style.transform = 'rotate(' + angleHours + ')';
    //document.getElementById('hours_range').style.transform = 'rotate(' + angleHours + ')';
    update();
}

function changeMin() {
    var valueMinutes = document.getElementById('minutes_range').value;
    var angleMinutes = 6 * valueMinutes + 'deg';
    document.getElementById('minutes_output').innerText = valueMinutes;
    document.getElementById('minutes_hand').style.transform = 'rotate(' + angleMinutes + ')';
    //document.getElementById('minutes_range').style.transform = 'rotate(' + angleMinutes + ')';
    update();
}
function update() {
    var valueHours = document.getElementById('hours_range').value;
    var valueMinutes = document.getElementById('minutes_range').value;
    angle = Math.abs(30 * valueHours - 11/2 * valueMinutes);
    document.getElementById('angle').innerText = angle + '°';
}
