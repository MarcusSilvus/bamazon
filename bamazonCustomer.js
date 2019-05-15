var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'squackBox1!',
  database: 'bamazomDB'
});

connection.connect(function (err) {
  if (err) throw err;
  openShop();
});

// function that displays welcome and items
function openShop() {
  console.log('\n                                        * WELCOME *');
  console.log('*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*');
  console.log('|                                         Bamazon                                     |');
  console.log('|                                   Climbing Department                               |');
  console.log('*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*');
  console.log('\n');
  console.log(
    'Item Number',
    '||Product',
    '||Deparment',
    '||Price',
    '||Stock'
  );


  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // console.log(res);
    for (var i = 0; i < res.length; i++) {
      console.log(
        "" + res[i].item_id,
        "     ||" + res[i].product_name,
        "  ||" + res[i].department_name,
        "  || $ " + res[i].price,
        "  ||" + res[i].stock
      );
    }
    console.log('\n');
    shopping();
  });
}

// function to ask shopper what item_id they want
function shopping() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "How can we help you?",
      choices: [
        "Purchase gear",
        "Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Purchase gear":
          buyGear();
          break;

        case "Exit":
          console.log('\n\n      Thanks for shopping with us!');
          console.log('         Come back any time!');        
          console.log('\n\n'); 
          connection.end();
          break;
      }
    });
}

// ask shopper which item they want
function buyGear() {
  inquirer
    .prompt({
      name: "gear",
      type: "input",
      message: "Please enter item number:"
    })
    .then(function(){
    // ask shopper how many of that item they want
    });
}



//if there is not enough of that item, tell the shopper so
// and direct them back to the original prompt

//if we have the amount in stock, the stock number will update
// and the total will display

