let request = new XMLHttpRequest();
let url = "https://api.adviceslip.com/advice";

request.open("GET", url, true);

request.onload = function() {
  let data = JSON.parse(this.response);
if (request.status >= 200 && request.status < 400) {
  		$("#advice").text(data["slip"]["advice"]);
				}

      
};
request.send();


$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
});