

function myFunction() {

  var lightSwitch = document.getElementById("lightSwitch");
  
  if(lightSwitch.value === "🌙")
    {
      lightSwitch.value = "🔆";
    } else lightSwitch.value = "🌙";

  var element = document.body;
  element.classList.toggle("dark-mode");

}
