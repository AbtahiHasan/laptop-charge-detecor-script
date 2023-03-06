const chargeLevel = document.getElementById("charge-level");
const charge = document.getElementById("charge");
const chargingTimeRef = document.getElementById("charging-time");

window.onload = () => {
    if(!navigator.getBattery) {
        alert("Battery Status Api Is Not Supported In Your Browser");
        return false;
    }
    
    navigator.getBattery().then((batter) => {
        function changeChargingInfo () {
            changeStatus();
            updateLevelInfo();
        }
        changeChargingInfo();
        function changeStatus() {
            if(batter.charging) {
                charge.classList.add("active");
            }  else {
                charge.classList.remove("active");

            }
        }
         if (parseInt(batter.dischargingTime)) {
        let hr = parseInt(batter.dischargingTime / 3600);
        let min = parseInt(batter.dischargingTime / 60 - hr * 60);
        chargingTimeRef.innerText = `${hr}hr ${min}mins remaining`;
      }
      function updateLevelInfo() {
        let batteryLevel = `${parseInt(batter.level * 100)}%`;
        charge.style.width = batteryLevel;
        chargeLevel.textContent = batteryLevel;
      }
  0
        batter.addEventListener("chargingchange", () => changeChargingInfo())
        batter.addEventListener("chargelavel", () => changeChargingInfo())
    })
}