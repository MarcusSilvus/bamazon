var mysql = require("mysql");
var inquirer = require("inquirer");

var connection  = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'squackBox1!',
  database: 'bamazomDB'
});

connection.connect(function(err) {
  if (err) throw err;
  openShop();
});

function openShop() {
  console.log('\n                           * WELCOME *');
  console.log('*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*');
  console.log('|                            Bamazon                        |');
  console.log('|                       Climbing Department                 |');
  console.log('*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*');

  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
  });
  
  connection.end();
}

// when program is run, display welcome and items

// ask shopper what item_id they want

// ask shopper how many of that item they want

//if there is not enough of that item, tell the shopper so
// and direct them back to the original prompt

//if we have the amount in stock, the stock number will update
// and the total will display

