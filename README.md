# CRUD

# CREATE
* Create a new house info for a houseid
```sh
/houses (POST)
response: N/A
request.body: 
{
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
```

* Add a photo to a house with specific houseid
```sh
/houses/:houseid/image (POST)
response: N/A
request.body:
{
  image_url,
  house_id
}
```

# READ
* Get a house info with a specific houseid
```sh
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
```

* Get photoes for a house with a specific houseid
```sh
/house/:houseid/image (GET)
response:
{
  id,
  image_url,
  house_id
}
```

# UPDATE
* Update house info (address, city, state, zipcode etc...) with a specific houseid
```sh
/houses/:houseId/(any field above) (PUT)
response: none
```

* Update all photoes with a specific houseid
```sh
/houses/:houseid/image/
response: none
```

* Update a photo with a specific houseid
```sh
/houses/:houseId/image/:id
```

# DELETE
* Delete a house info with a specific houseid
```sh
houses/:houseid
response: none
```

* Delete all photoes with a specific houseid
```sh
/house/:houseid/image
response: none
```

* Delete a photo with a specific houseid
```sh
/house/:houseid/image/:id
response: none
```

# Schema
## SQL
```sh
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
  PRIMARY KEY(id),
  FOREIGN KEY (house_id) REFERENCES house (house_id)
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
  PRIMARY KEY (id),
  FOREIGN KEY (house_id) REFERENCES house (house_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id)
);
```

## No SQL
```sh
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
  user: String,
  saveHome: Boolean
}
```