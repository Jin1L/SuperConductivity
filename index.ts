const magnet = document.getElementById("magnet");
const superConductivity = document.getElementById("superConductivity")

document.addEventListener("mousemove", function(e){
    var x = e.clientX;
    var y = e.clientY;
    magnet.style.top = y + "px";
    magnet.style.left = x + "px";

})


if (superConductivity) {
    const maxDistance = 200; // Maximum distance of repelling effect
    const repelStrength = 0.7; // Strength of the repelling effect

    document.addEventListener("mousemove", function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const rect = superConductivity.getBoundingClientRect();
        const elemX = rect.left + rect.width / 2;
        const elemY = rect.top + rect.height / 2;

        const distanceX = mouseX - elemX;
        const distanceY = mouseY - elemY;

        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < maxDistance) {
            const angle = Math.atan2(distanceY, distanceX);
            const repelDistance = maxDistance - distance;

            const offsetX = Math.cos(angle) * repelDistance * repelStrength;
            const offsetY = Math.sin(angle) * repelDistance * repelStrength;

            const targetX = elemX - offsetX;
            const targetY = elemY - offsetY;

            superConductivity.style.left = targetX - rect.width / 2 + "px";
            superConductivity.style.top = targetY - rect.height / 2 + "px";
        }
    });
} else {
    console.error("Element not found!");
}