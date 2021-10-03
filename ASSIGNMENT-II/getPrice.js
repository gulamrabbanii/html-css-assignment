function getPrice() {
  var array = [];
  var checkLists = document.querySelectorAll("input[type='checkbox']:checked");

  var typeOfMember = document.querySelector(
    "input[name='member']:checked"
  ).value;

  switch (typeOfMember) {
    case "internal":
      var totalCharge = 0;
      for (var i = 0; i < checkLists.length; i++) {
        array.push(checkLists[i].getAttribute("data-intrn-price"));
        var prices = array.map(Number);
        totalCharge += prices[i];
      }
      document.getElementById("7-days").innerHTML = "Rs." + totalCharge * 7;
      document.getElementById("15-days").innerHTML = "Rs." + totalCharge * 15;
      document.getElementById("30-days").innerHTML = "Rs." + totalCharge * 30;
      break;

    case "external":
      var totalCharge = 0;
      for (var i = 0; i < checkLists.length; i++) {
        array.push(checkLists[i].getAttribute("data-extn-price"));
        var prices = array.map(Number);
        totalCharge += prices[i];
      }
      document.getElementById("7-days").innerHTML = "Rs." + totalCharge * 7;
      document.getElementById("15-days").innerHTML = "Rs." + totalCharge * 15;
      document.getElementById("30-days").innerHTML = "Rs." + totalCharge * 30;
      break;
  }
}
