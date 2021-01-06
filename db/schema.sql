-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Created the DB "burgers_db" (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the DB burgers_db for all the rest of the script
USE burgers_db;

-- Created the table "schools"
CREATE TABLE burgers (
  id INT auto_increment NOT NULL,
  burger_name VARCHAR(45) NOT NULL,
  devoured BOOLEAN DEFAULT false
  PRIMARY KEY(id)
);
