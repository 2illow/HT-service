const connection = require('../dbConfig.js');

connection.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log('mysql is connected');
  }
});

// seed house table
const query1 = `LOAD DATA LOCAL INFILE '/Users/wenhaopiao/Desktop/hrsf125/SDC/HT-service/csv/house.csv' INTO TABLE house FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (house_id, address, city, state, zipcode, beds, baths, area, price, status);`
connection.query(query1, (error, results, fields) => {
  if (error) {
    throw error;
  } else {
    console.log('Seed house table succeed!');
  }
});

// seed image table
const query2 = `LOAD DATA LOCAL INFILE '/Users/wenhaopiao/Desktop/hrsf125/SDC/HT-service/csv/image.csv' INTO TABLE image FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id, image_url, house_id);`
connection.query(query2, (error, results, fields) => {
  if (error) {
    throw error;
  } else {
    console.log('Seed image table succeed!');
  }
});

// seed user table
const query3 = `LOAD DATA LOCAL INFILE '/Users/wenhaopiao/Desktop/hrsf125/SDC/HT-service/csv/user.csv' INTO TABLE user FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (user_id, name);`
connection.query(query3, (error, results, fields) => {
  if (error) {
    throw error;
  } else {
    console.log('Seed user table succeed!');
  }
});

// seed saveHome table
const query4 = `LOAD DATA LOCAL INFILE '/Users/wenhaopiao/Desktop/hrsf125/SDC/HT-service/csv/saveHome.csv' INTO TABLE save_home FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id, house_id, user_id);`
connection.query(query4, (error, results, fields) => {
  if (error) {
    throw error;
  } else {
    console.log('Seed saveHome table succeed!');
  }
});
