const fs = require('fs');

const writeSaveHomes = fs.createWriteStream('./csv/saveHome.csv');
writeSaveHomes.write('id,house_id,user_id\n', 'utf8');

function writeTwoMillionSaveHomes(writer, encoding, callback) {
  let i = 2000000;
  let index = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      index += 1;
      const id = index;
      const house_id = Math.floor(Math.random() * 2000000) + 1;
      const user_id = Math.floor(Math.random() * 1000000) + 1;
      const data = `${id},${house_id},${user_id}\n`;
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

writeTwoMillionSaveHomes(writeSaveHomes, 'utf-8', () => {
  writeSaveHomes.end();
});
