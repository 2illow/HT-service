# CRUD

# CREATE
* Create a new house info for a houseid

/houses/:houseid (POST)
response: N/A
request.body: 
{
  house_id,
  address,
  city,
  state,
  zipcode,
  beds,
  baths,
  area,
  price,
  status
}

* Add photos to a house with specific houseid

/image/:houseid (POST)
response: N/A
request.body:
{
  id,
  image_url,
  house_id
}

# READ
* Get a house info with a specific houseid

/houses/:houseid (GET)
response:
{
  house_id,
  address,
  city,
  state,
  zipcode,
  beds,
  baths,
  area,
  price,
  status
}

* Get photoes for a house with a specific houseid

/image/:houseid (GET)
response:
{
  id,
  image_url,
  house_id
}


# UPDATE
* Update house info with a specific houseid

/houses/:houseId (PUT)
response: none

* Update photoes with a specific houseid

/image/:houseid
response: none

# DELETE
* Delete a house info with a specific houseid

houses/:houseid
response: none

* Delete photoes with a specific houseid

/image/:houseid
response: none

# Schema
## SQL

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
   PRIMARY KEY (house_id), 
);

CREATE TABLE image (
  id INT NOT NULL AUTO_INCREMENT,
  image_url VARCHAR(200) NOT NULL,
  house_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (house_id) REFERENCES house (house_id)
);


CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
);

CREATE TABLE save_home (
  id INT NOT NULL AUTO_INCREMENT,
  house_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (house_id) REFERENCES house (house_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id)
);


## No SQL

{
  id: { type: Number, required: true, unique: true },
  address: { type: String, required: true, unique: true },
  city: String,
  state: String,
  zipcode: Number,
  beds: Number,
  baths: Number,
  area: Number,
  price: Number,
  status: String,
  images: [{ type: String }],
  user: String
}


