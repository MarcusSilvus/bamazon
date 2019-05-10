DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazomDB;

USE bamazomDB;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
stock INT(10) NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products;