function breakChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1";

    setTimeout(function(){
        chain.innerHTML = "&#xf127";
    }, 1000);
}
// call Animation
breakChain();

setInterval(breakChain, 2000);

function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244";
    setTimeout(function() {
        battery.innerHTML = "&#xf243";
    }, 1000);
    setTimeout(function() {
        battery.innerHTML = "&#xf242";
    }, 2000);
    setTimeout(function() {
        battery.innerHTML = "&#xf241";
    }, 3000);
    setTimeout(function() {
        battery.innerHTML = "&#xf240";
    }, 4000);
}

// call animation
chargeBattery();

// Run animation again
setInterval(chargeBattery, 5000);


// hour glass

function hourGlassTip() {
    let hourGlass = document.getElementById('hourGlass');
    hourGlass.innerHTML = "&#xf251";
    setTimeout(function() {
        hourGlass.innerHTML = "&#xf252";
    }, 1000);
    setTimeout(function() {
        hourGlass.innerHTML = "&#xf253";
    }, 2000);
}
hourGlassTip();

setInterval(hourGlassTip, 4000);