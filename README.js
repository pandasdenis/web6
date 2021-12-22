function updatePrice() {
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  let radioDiv = document.getElementById("radios");
  if (select.value == "3") {
    radioDiv.style.display = "block";
  }
  else {
    radioDiv.style.display = "none";
  }
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    if (radio.checked) {
        let optionPrice = prices.size[radio.value];
        if (optionPrice !== undefined) {
            price += optionPrice;
        }
    }
  });
  let checkDiv = document.getElementById("checkboxes");
  if (select.value == "2") {
    checkDiv.style.display = "block";
  }
  else {
    checkDiv.style.display = "none";
  }
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
            price += propPrice;
          }
    }
  });
  let prodPrice = document.getElementById("prodPrice");
  let n = document.getElementById("kol").value;
  if(n!=null){
  prodPrice.innerHTML = price * n + " рублей";
  }
}
function getPrices() {
  return {
    prodTypes: [1000, 50000, 25000],
size: {
option1: 2000,
option2: 4500,
option3: 8000,
    },
    prodProperties: {
      prop1: 1500,
      prop2: 4000,
      prop3: 10000,
    }
  };
}


window.addEventListener('DOMContentLoaded', function (event) {
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";
  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let v = event.target;
      console.log(v.value);
      updatePrice();
    });
  });
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

    updatePrice();
});
