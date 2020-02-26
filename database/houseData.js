const faker = require('faker');
const fs = require('fs');

const writeHouses = fs.createWriteStream('./csv/house.csv');
writeHouses.write('house_id,address,city,state,zipcode,beds,baths,area,price,status\n', 'utf8');

function writeTenMillionHouses(writer, encoding, callback) {
  // 2 million records for house table
  let i = 2000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const house_id = id;
      const address = faker.address.streetAddress();
      const city = faker.address.city();
      const state = faker.address.stateAbbr();
      const zipcode = Math.floor(Math.random() * 89999) + 10000;
      const beds = Math.floor(Math.random() * 5) + 1;
      const baths = Math.floor(Math.random() * 5) + 1;
      const area = Math.floor(Math.random() * 4000) + 1000;
      const price = Math.floor(Math.random() * 500000) + 100000;
      const status = ['For Sale', 'Sold', 'For Rent', 'New Construction'][Math.floor(Math.random() * 4)];
      const data = `${house_id},${address},${city},${state},${zipcode},${beds},${baths},${area},${price},${status}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionHouses(writeHouses, 'utf-8', () => {
  writeHouses.end();
});
