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
  PRIMARY KEY (house_id)
);

CREATE TABLE image (
  id INT NOT NULL AUTO_INCREMENT,
  image_url VARCHAR(200) NOT NULL,
  house_id INT NOT NULL,
  PRIMARY KEY(id)
  -- FOREIGN KEY (house_id) REFERENCES house (house_id)
);


CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE save_home (
  id INT NOT NULL AUTO_INCREMENT,
  house_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (house_id) REFERENCES house (house_id),
  -- FOREIGN KEY (user_id) REFERENCES user (user_id)
);