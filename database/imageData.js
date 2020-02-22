const images = [
  'https://photos.zillowstatic.com/p_h/ISe0lgrt20tm5b1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISmyogf77lsskb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISqxyae0a1kscb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISesm4x03dkvkb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/IS6mkseuy4cykb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISirwyvt5tbvcb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISq9g4ehqov3lb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISalumdn1l3ycb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISi3esvamgn6lb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISaxbgd4i8f9lb1000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_960/ISzjhaq34oglkj0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISnutt572geu5k0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/IS7ip55utzxz5k0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISr5lh4hljh56k0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISjzi5mahb986k0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISbtgt34d31b6k0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/IS3nehlx8vsd6k0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISvgc53r4nkg6k0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/ISnaatkk0fcj6k0000000000.jpg',
  'https://photos.zillowstatic.com/cc_ft_576/IS7y55k7syvo6k0000000000.jpg',
];

const fs = require('fs');

const writeImages = fs.createWriteStream('./csv/image.csv');
writeImages.write('id,image_url,house_id\n', 'utf8');

function writeSixtyMillionImages(writer, encoding, callback) {
  let i = 60000000;
  let index = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      index += 1;
      const id = index;
      const image_url = images[Math.floor(Math.random() * 20)];
      const house_id = Math.floor(Math.random() * 10000000) + 1;
      const data = `${id},${image_url},${house_id}\n`;
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

writeSixtyMillionImages(writeImages, 'utf-8', () => {
  writeImages.end();
});
