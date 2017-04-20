
var shoppingList = [
  {name: "Wheat Bread",
    price: 3.00  },
  {name: "Lunch Meat: Turkey",
    price: 5.00 },
  {name: "Pepperjack Cheese",
    price: 4.00  },
  {name: "Avacado",
    price: 2.50  },
  {name: "Tomatoes",
    price: 3.50  },
  {name: "Furry Boots",
    price: 22.00  },
  {name: "Beer",
    price: 18.99  },
  {name: "Water Bottles",
    price: 3.50  },
  {name: "Neon Shirt",
    price: 14.00  },
  {  name: "Bear Hat",
    price: 15.99},
  ];
  // End of Shopping List

  // Title Div
  var titleDiv = document.getElementsByClassName('div1');
  var titleText = document.createElement('h1');
  titleText.innerHTML = '<h1> Shopping List </h1> <p> Hello, this is my Shopping Cart for an EDM concert.</p>';
  titleText.style.color='white';
  titleText.style.background = 'teal';
  titleText.style.textAlign = 'center';
  document.body.appendChild(titleText);

// Shopping List Div
  shoppingList.forEach( function(item){
        var listItem = document.createElement('h3');
        listItem.innerText = item.name;
        document.body.appendChild(listItem);
      });

  shoppingList.forEach( function(item){
        // console.log(item.name, item.price);
        var listPrice = document.createElement('h3');
        listPrice.innerText = "$ "+ item.price.toFixed(2);
        document.body.appendChild(listPrice);
  });
///////////////////////////////////////////////////////

// Sub-total without Tax
var subTotal= 0;
shoppingList.forEach( function(item){
  subTotal += (item.price);
  // console.log(item.name,item.price);
});
var preTax = document.createElement('h3');
preTax.innerText = "Total:  "+ "$ " + subTotal.toFixed(2) + " (+ tax)";
document.body.appendChild(preTax);

// Tax Calculations
var tax = document.createElement('h3');
tax.innerText = "Tax:  "+ "$ " + (subTotal * 0.06).toFixed(2);
document.body.appendChild(tax);

  var total = (subTotal * 1.06).toFixed(2);

  var billTotal = document.createElement('h2');
  billTotal.innerText = "Total: " + "$ " + total;
  document.body.appendChild(billTotal);
