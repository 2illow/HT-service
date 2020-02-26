const mysql = require('mysql');
const connection = require('../dbConfig.js');

// connect to mysql with credential above
connection.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log('mysql is connected');
  }
});

const query1 = `ALTER TABLE image ADD CONSTRAINT fk_image_house FOREIGN KEY (house_id) REFERENCES house (house_id);`;
connection.query(query1, (error, results, fields) => {
  if (error) {
    throw error;
  } else {
    console.log('Add foreign key to image table successfully!');
  }
});

const query2 = `ALTER TABLE save_home ADD CONSTRAINT fk_save_home_house FOREIGN KEY (house_id) REFERENCES house (house_id);`;
connection.query(query2, (error, results, fields) => {
  if (error) {
    throw error;
  } else {
    console.log('Add foreign key to save_home table successfully!');
  }
});

const query3 = `ALTER TABLE save_home ADD CONSTRAINT fk_save_home_user FOREIGN KEY (user_id) REFERENCES user (user_id);`;
connection.query(query3, (error, results, fields) => {
  if (error) {
    throw error;
  } else {
    console.log('Add foreign key to save_home table successfully!');
  }
});
