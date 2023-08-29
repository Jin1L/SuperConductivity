var magnet = document.getElementById("magnet");
var superConductivity = document.getElementById("superConductivity");
document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    magnet.style.top = y + "px";
    magnet.style.left = x + "px";
});
if (superConductivity) {
    var maxDistance_1 = 200; // Maximum distance of repelling effect
    var repelStrength_1 = 0.7; // Strength of the repelling effect
    document.addEventListener("mousemove", function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        var rect = superConductivity.getBoundingClientRect();
        var elemX = rect.left + rect.width / 2;
        var elemY = rect.top + rect.height / 2;
        var distanceX = mouseX - elemX;
        var distanceY = mouseY - elemY;
        var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        if (distance < maxDistance_1) {
            var angle = Math.atan2(distanceY, distanceX);
            var repelDistance = maxDistance_1 - distance;
            var offsetX = Math.cos(angle) * repelDistance * repelStrength_1;
            var offsetY = Math.sin(angle) * repelDistance * repelStrength_1;
            var targetX = elemX - offsetX;
            var targetY = elemY - offsetY;
            superConductivity.style.left = targetX - rect.width / 2 + "px";
            superConductivity.style.top = targetY - rect.height / 2 + "px";
        }
    });
}
else {
    console.error("Element not found!");
}
