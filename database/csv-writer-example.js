// create csv file for house table

// const faker = require('faker');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// // create ten csv files and each csv file has one million records
// let counter = 0;
// const csvCreater = (counter) => {
//   const csvWriter = createCsvWriter({
//     path: `./csv/house${counter + 1}.csv`,
//     header: [
//       { id: 'house_id', title: 'House_id' },
//       { id: 'address', title: 'Address' },
//       { id: 'city', title: 'City' },
//       { id: 'state', title: 'State' },
//       { id: 'zipcode', title: 'Zipcode' },
//       { id: 'beds', title: 'Beds' },
//       { id: 'baths', title: 'Baths' },
//       { id: 'area', title: 'Area' },
//       { id: 'price', title: 'Price' },
//       { id: 'status', title: 'Status' },
//     ],
//   });

//   const house = [];
//   for (let i = counter * 1000000; i < (counter + 1) * 1000000; i++) {
//     house.push({
//       house_id: i + 1,
//       address: faker.address.streetAddress(),
//       city: faker.address.city(),
//       state: faker.address.stateAbbr(),
//       zipcode: Math.floor(Math.random() * 89999) + 10000,
//       beds: Math.floor(Math.random() * 5) + 1,
//       baths: Math.floor(Math.random() * 5) + 1,
//       area: Math.floor(Math.random() * 4000) + 1000,
//       price: Math.floor(Math.random() * 500000) + 100000,
//       status: ['For Sale', 'Sold', 'For Rent', 'New Construction'][Math.floor(Math.random() * 4)],
//     });
//   }

//   csvWriter
//     .writeRecords(house)
//     .then(() => {
//       console.log('The CSV file was written successfully');
//       counter++;
//       if (counter < 10) {
//         csvCreater(counter);
//       }
//     });
// };

// csvCreater(counter);




// create csv files for image table
// const faker = require('faker');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// // create csv files and each file has one million records

// let counter = 0;
// const csvCreater = (counter) => {
//   const csvWriter = createCsvWriter({
//     path: `./csv/image${counter + 1}.csv`,
//     header: [
//       { id: 'id', title: 'Id' },
//       { id: 'image_url', title: 'Image_url' },
//       { id: 'house_id', title: 'House_id' },
//     ],
//   });

//   const image = [];
//   for (let i = counter * 2000000; i < (counter + 1) * 2000000; i++) {
//     image.push({
//       id: i + 1,
//       image_url: images[Math.floor(Math.random() * 20)],
//       house_id: Math.floor(Math.random() * 10000000) + 1,
//     });
//   }

//   csvWriter
//     .writeRecords(image)
//     .then(() => {
//       console.log('The CSV file was written successfully');
//       counter++;
//       if (counter < 50) {
//         csvCreater(counter);
//       }
//     });
// };

// csvCreater(counter);



// create csv files for user table
// const faker = require('faker');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// // create 10 csv files and each file has one million records

// let counter = 0;
// const csvCreater = (counter) => {
//   const csvWriter = createCsvWriter({
//     path: `./csv/user${counter + 1}.csv`,
//     header: [
//       { id: 'user_id', title: 'User_id' },
//       { id: 'name', title: 'Name'},
//     ],
//   });

//   const user = [];
//   for (let i = counter * 1000000; i < (counter + 1) * 1000000; i++) {
//     user.push({
//       user_id: i + 1,
//       name: faker.name.findName(),
//     });
//   }

//   csvWriter
//     .writeRecords(user)
//     .then(() => {
//       console.log('The CSV file was written successfully');
//       counter++;
//       if (counter < 10) {
//         csvCreater(counter);
//       }
//     });
// };

// csvCreater(counter);