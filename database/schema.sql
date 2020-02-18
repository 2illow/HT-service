DROP DATABASE IF EXISTS houses;
 
CREATE DATABASE houses;
 
USE houses;
 
CREATE TABLE house (
   house_id INT NOT NULL AUTO_INCREMENT,
   address VARCHAR(100) NOT NULL,
   city VARCHAR(20) NOT NULL,
   state VARCHAR(20) NOT NULL,
   zipcode INT NOT NULL,
   beds INT NOT NULL,
   baths INT NOT NULL,
   area INT NOT NULL,
   price INT NOT NULL,
   status VARCHAR(20) NOT NULL,
   save_home VARCHAR(5) NOT NUll,
   PRIMARY KEY(house_id)   
);

CREATE TABLE image (
  id INT NOT NULL AUTO_INCREMENT,
  image_url VARCHAR(200) NOT NULL,
  house_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (house_id) REFERENCES house(house_id)
);