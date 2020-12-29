var input = document.querySelector('.type');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f3aa466e34978d7e7ce2f8d34ed1a424')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'] - 273.15;
  var x = tempValue.toFixed(0);
  var nameValue = data['name'];

  main.innerHTML = nameValue;
  temp.innerHTML = "Temp :- "+ x + " °C";
 })

.catch(err => alert("Wrong city!"));
})